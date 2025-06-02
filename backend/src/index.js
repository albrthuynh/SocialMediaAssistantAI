const express = require('express');
const cors = require('cors');
const { db } = require('../firebase-admin.js')
const { analyzeAndStoreViralPosts } = require('./services/postAnalyzer.js');

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for frontend requests
app.use(express.json()); // Parse JSON request bodies

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Reddit Post Analyzer API');
});

/**
 * GET /api/viral-posts
 * Returns all viral posts from the database
**/
app.get('/api/viral-posts', async (req, res) => {
    try {
        const viralPostsSnapshot = await db.collection('viralPosts').get();
        if (viralPostsSnapshot.empty) {
            return res.status(404).json({ message: 'No viral posts found.' });
        }

        const viralPosts = [];
        viralPostsSnapshot.forEach(doc => {
            viralPosts.push(doc.data());
        });

        return res.status(200).json(viralPosts);
    }
    catch (error) {
        console.error('Error fetching viral posts:', error);
        return res.status(500).json({ message: 'Failed to fetch viral posts.' });
    }
});

// Starting the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Schedule analysis to run automatically every 6 hours
const scheduleAnalysis = () => {
  console.log('Running scheduled viral post analysis...');
  analyzeAndStoreViralPosts()
    .then(() => console.log('Scheduled analysis completed'))
    .catch(err => console.error('Scheduled analysis failed:', err));
  
  // Schedule next run
  setTimeout(scheduleAnalysis, 6 * 60 * 60 * 1000);
};

// Start the first scheduled analysis
scheduleAnalysis();