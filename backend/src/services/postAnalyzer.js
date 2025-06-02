const { db } = require('../../firebase-admin.js')


function getDateDifferenceInHours(utcTimestamp) {
    var today = new Date();
    var convertedPostDate = new Date(utcTimestamp * 1000); // convert to milliseconds
    
    const timeDifferenceInMs = today - convertedPostDate;
    const diffInHours = Math.floor(timeDifferenceInMs / (1000 * 60 * 60));

    return diffInHours;
}

async function analyzeAndStoreViralPosts() {
    try {
        const postsCollection = db.collection('redditPosts');
        // grabbing all the posts from the collection redditPosts
        const snapshot = await postsCollection.get();

        if (snapshot.empty) {
            console.log('No posts found in the collection.');
            return;
        }

        const batch = db.batch();
        let viralPostsCount = 0;

        snapshot.forEach(doc => {
            const postData = doc.data();
            const postAgeInHours= getDateDifferenceInHours(postData.created_utc);

            // check if the post is viral based off the number of upvotes and comments within 24 hours
            if (postData.upvotes >= 8000 && postAgeInHours <= 24) {
                // calculate the number of comments for engagement
                const commentEngagement = Math.floor(postData.upvotes / postData.num_comments)
                if (commentEngagement >= 5 && commentEngagement <= 20) {
                    // add the post to the viral posts collection
                    const viralPosts = db.collection('viralPosts');
                    const collectionRef = viralPosts.doc(postData.id);
                    batch.set(collectionRef, {
                        id: postData.id,
                        title: postData.title,
                        author: postData.author,
                        upvotes: postData.upvotes,
                        num_comments: postData.num_comments,
                        url: postData.url,
                        created_utc: postData.created_utc,
                        subreddit: postData.subreddit,
                        fetched_at: new Date().toISOString(),
                    });
                    viralPostsCount++;
                    console.log(`Post ${postData.id} is viral!`);
                }
            }
        });

        if (viralPostsCount > 0) {
            await batch.commit();
            console.log(`Successfully stored ${viralPostsCount} viral posts.`);
        }
        else {
            console.log('No viral posts found in the collection.');
        }
    }
    catch (error) {
        console.error('Error analyzing and storing viral posts:', error);
    }
}

module.exports = { analyzeAndStoreViralPosts}

analyzeAndStoreViralPosts()
    .then(() => console.log('Analysis complete'))
    .catch(err => console.error('Analysis failed:', err));
