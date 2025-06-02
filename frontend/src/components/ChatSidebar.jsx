import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send, ChevronLeft, ChevronRight, Bot } from "lucide-react"

export function ChatSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content:
        "Hi! I'm your trend assistant. I can help you analyze posts, suggest content strategies, and provide insights on engagement trends.",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      type: "user",
      content: "Can you analyze the AI in Marketing post for reposting potential?",
      timestamp: "10:32 AM",
    },
    {
      id: 3,
      type: "bot",
      content:
        "The 'AI in Marketing' post has high engagement potential. It's received 1.2k likes and 89 comments in just 2 hours. I recommend reposting with a custom introduction highlighting your company's AI initiatives.",
      timestamp: "10:34 AM",
    },
  ])

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: "user",
        content: message,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages([...messages, newMessage])
      setMessage("")

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          type: "bot",
          content: "I understand your request. Let me analyze that for you...",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }
        setMessages((prev) => [...prev, botResponse])
      }, 1000)
    }
  }

  return (
    <div
      className={`bg-[#1f1f1f] border-l border-[#3a3a3a] transition-all duration-300 ${
        isCollapsed ? "w-32 ml-50" : "w-80"
      }`}
    >
      <div className="p-4 border-b border-[#3a3a3a] flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-gray-400 hover:text-white hover:bg-[#3a3a3a]"
        >
          {isCollapsed ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
        {!isCollapsed && (
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <Bot className="h-5 w-5 text-[#ff6b35]" />
            Trend Assistant
          </h2>
        )}
      </div>

      {!isCollapsed ? (
        <div className="flex flex-col h-full">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.type === "bot" && (
                    <Avatar className="h-8 w-8 bg-[#ff6b35]">
                      <AvatarFallback className="bg-[#ff6b35] text-white text-xs">AI</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      msg.type === "user" ? "bg-[#ff6b35] text-white" : "bg-[#2a2a2a] text-gray-200"
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                    <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                  </div>
                  {msg.type === "user" && (
                    <Avatar className="h-8 w-8 bg-[#3a3a3a]">
                      <AvatarFallback className="bg-[#3a3a3a] text-white text-xs">U</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-4 border-t border-[#3a3a3a]">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-gray-400"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button
                size="sm"
                onClick={handleSendMessage}
                className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 flex justify-center">
          <Bot className="h-6 w-6 text-[#ff6b35]" />
        </div>
      )}
    </div>
  )
}
