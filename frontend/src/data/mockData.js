export const mockTrendingPosts = [
  {
    id: 1,
    title: "AI in Marketing: The Next Frontier",
    author: "Jane Doe",
    engagement: "1.2k likes, 300 comments, 150 shares",
    summary: "Exploring how AI is revolutionizing marketing strategies and customer engagement...",
    content: "Full content of AI in Marketing post... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 2,
    title: "The Future of Remote Work",
    author: "John Smith",
    engagement: "800 likes, 150 comments, 90 shares",
    summary: "A deep dive into the evolving landscape of remote work and its impact on productivity...",
    content: "Full content of The Future of Remote Work post... Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 3,
    title: "Sustainable Business Practices for 2025",
    author: "Alice Green",
    engagement: "2.5k likes, 500 comments, 300 shares",
    summary: "Highlighting key sustainable practices businesses should adopt for a greener future...",
    content: "Full content of Sustainable Business Practices post... Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
];

export const mockPerformanceMetrics = {
  totalReposts: 125,
  totalEngagement: "15.6k",
  averageEngagementRate: "12.5%",
  topPerformingPost: "AI in Marketing (Reposted)"
};

export const mockScheduledPosts = [
  { id: 1, title: "Repost: AI in Marketing", date: "2025-05-20T10:00:00Z", platform: "LinkedIn" },
  { id: 2, title: "New Post: Industry Insights Q2", date: "2025-05-22T14:30:00Z", platform: "LinkedIn" },
  { id: 3, title: "Repost: Future of Remote Work", date: "2025-05-25T09:00:00Z", platform: "LinkedIn" }
];

export const mockQuickFilters = [
  { id: "ai", name: "AI & Machine Learning" },
  { id: "marketing", name: "Marketing & Sales" },
  { id: "sustainability", name: "Sustainability" },
  { id: "remote_work", name: "Remote Work" },
  { id: "leadership", name: "Leadership" }
];

export const mockTrendingAlgorithmData = [
  { name: "Topic A", engagement: 4000, trendScore: 90 },
  { name: "Topic B", engagement: 3000, trendScore: 85 },
  { name: "Topic C", engagement: 2000, trendScore: 70 },
  { name: "Topic D", engagement: 2780, trendScore: 75 },
  { name: "Topic E", engagement: 1890, trendScore: 60 },
];

export const mockIndustryFilters = [
  { id: "tech", name: "Technology" },
  { id: "finance", name: "Finance" },
  { id: "healthcare", name: "Healthcare" },
  { id: "education", name: "Education" }
];

export const mockEngagementStats = {
  likes: 1200,
  comments: 300,
  shares: 150,
  views: 15000
};

export const mockRepostQueue = [
  { ...mockTrendingPosts[0], scheduledTime: "2025-05-18T10:00:00Z", customNotes: "Add a question at the end." },
  { ...mockTrendingPosts[1], scheduledTime: "2025-05-19T15:30:00Z", customNotes: "Target audience: HR professionals." }
];

export const mockCustomizationOptions = {
  addIntro: true,
  addOutro: false,
  mentionOriginalAuthor: true,
  addHashtags: ["#AI", "#MarketingStrategy"],
  shortenPost: false
};

export const mockSchedulingSuggestions = [
  "Optimal time: Tuesday 11 AM EST (based on past engagement)",
  "Consider posting during lunch breaks for higher visibility.",
  "Avoid posting on weekends for B2B content."
];

export const mockPerformanceComparison = {
  original: { title: "AI in Marketing", likes: 1200, comments: 300, shares: 150 },
  repost: { title: "Repost: AI in Marketing", likes: 1500, comments: 350, shares: 180, addedValue: "Included a summary and call to action." }
};

export const mockAudienceGrowth = [
  { month: "Jan", growth: 200 },
  { month: "Feb", growth: 300 },
  { month: "Mar", growth: 250 },
  { month: "Apr", growth: 400 },
  { month: "May", growth: 350 }
];

export const mockEngagementRateData = [
  { date: "2025-05-01", rate: 10.2 },
  { date: "2025-05-05", rate: 11.5 },
  { date: "2025-05-10", rate: 12.1 },
  { date: "2025-05-15", rate: 12.5 }
];

