require('dotenv').config({path:__dirname + '/../.env.local'});
const snoowrap = require('snoowrap');
const {admin, db} = require('../firebase-admin');

// Firestore reference
const postsCollection = db.collection('redditPosts');

// Initialize snoowrap (Reddit API client)
const reddit = new snoowrap({
  userAgent: process.env.REDDIT_USER_AGENT,
  clientId: process.env.REDDIT_CLIENT_ID,
  clientSecret: process.env.REDDIT_CLIENT_SECRET,
  username: process.env.REDDIT_USERNAME,
  password: process.env.REDDIT_PASSWORD,
});

// Define the subreddit and number of posts to fetch
const SUBREDDIT_LIST = ['funny', 'AskReddit', 'worldnews', 'technology']; 


const POST_LIMIT = 10;

async function fetchAndStoreRedditPosts() {
  try {
    for (const SUBREDDIT of SUBREDDIT_LIST) {
        const posts = await reddit.getSubreddit(SUBREDDIT).getHot({ limit: POST_LIMIT });

        const batch = db.batch();

        posts.forEach((post) => {
            const postRef = postsCollection.doc(post.id);
            batch.set(postRef, {
                id: post.id,
                title: post.title,
                author: post.author.name,
                upvotes: post.ups,
                num_comments: post.num_comments,
                url: `https://www.reddit.com${post.permalink}`,
                created_utc: post.created_utc,
                subreddit: SUBREDDIT,
                fetched_at: new Date().toISOString(),
            });
        });
        await batch.commit();
        console.log(`Successfully stored ${posts.length} posts from r/${SUBREDDIT}`);
    }
  } catch (error) {
    console.error('Error fetching Reddit posts:', error);
  }
}

// Run the scraper
fetchAndStoreRedditPosts();
