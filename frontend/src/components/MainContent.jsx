import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal } from "lucide-react";

export function MainContent() {
  const posts = [
    {
      id: 1,
      title: "AI in Marketing: The Next Frontier",
      author: "Jane Doe",
      content:
        "Exploring how artificial intelligence is revolutionizing marketing strategies and customer engagement...",
      likes: 1200,
      comments: 89,
      shares: 45,
      timeAgo: "2h ago",
    },
    {
      id: 2,
      title: "The Future of Remote Work",
      author: "John Smith",
      content: "Remote work is here to stay. Here's how companies are adapting their strategies for the long term...",
      likes: 856,
      comments: 124,
      shares: 67,
      timeAgo: "4h ago",
    },
    {
      id: 3,
      title: "Sustainable Business Practices for 2025",
      author: "Alice Green",
      content: "Companies are increasingly focusing on sustainability. Here are the key trends to watch...",
      likes: 2100,
      comments: 156,
      shares: 89,
      timeAgo: "6h ago",
    },
  ];

  return (
    <div className="flex-1 bg-[#2a2a2a] p-6 overflow-auto">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">Content Dashboard</h1>
          <div className="flex gap-2">
            <Badge className="bg-[#ff6b35] text-white hover:bg-[#e55a2b]">24 Hours</Badge>
            <Badge variant="outline" className="border-[#3a3a3a] text-gray-400">
              7 Days
            </Badge>
            <Badge variant="outline" className="border-[#3a3a3a] text-gray-400">
              30 Days
            </Badge>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="bg-[#1f1f1f] border-[#3a3a3a]">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-white">125</p>
              <p className="text-sm text-gray-400">Total Reposts</p>
            </CardContent>
          </Card>
          <Card className="bg-[#1f1f1f] border-[#3a3a3a]">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-white">15.6k</p>
              <p className="text-sm text-gray-400">Total Engagement</p>
            </CardContent>
          </Card>
          <Card className="bg-[#1f1f1f] border-[#3a3a3a]">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-white">8.2%</p>
              <p className="text-sm text-gray-400">Avg. Engagement Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Posts Section */}
        <Card className="bg-[#1f1f1f] border-[#3a3a3a]">
          <CardHeader>
            <CardTitle className="text-white">Trending Posts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-[#2a2a2a] rounded-lg p-4 border border-[#3a3a3a]">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{post.title}</h3>
                    <p className="text-sm text-gray-400">
                      By: {post.author} • {post.timeAgo}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-[#3a3a3a]">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>

                <p className="text-gray-300 mb-4">{post.content}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      {post.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <Share className="h-4 w-4" />
                      {post.shares}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white">
                      <Repeat2 className="h-4 w-4 mr-1" />
                      Repost
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-[#3a3a3a] text-gray-400 hover:text-white hover:bg-[#3a3a3a]"
                    >
                      <MessageCircle className="h-4 w-4 mr-1" />
                      Comment
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
