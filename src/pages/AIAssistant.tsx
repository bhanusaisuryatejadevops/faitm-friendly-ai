import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Mic, Send, Plus, Image, Camera, FileText, Trash2, Settings } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "👋 Welcome to FAITM AI Assistant! I'm here to help you manage your tasks, schedule appointments, and boost your productivity. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I understand you'd like help with that. Let me assist you with your request.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleClearHistory = () => {
    setMessages([messages[0]]);
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    // Voice recording logic would go here
  };

  return (
    <Layout>
      <div className="flex flex-col h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)]">
        {/* Header */}
        <div className="backdrop-blur-glass bg-card/80 border-b border-border/50 p-4 flex items-center justify-between shadow-soft">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center shadow-soft">
              <Mic className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-lg">AI Assistant</h1>
              <p className="text-xs text-muted-foreground">Powered by FAITM</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={handleClearHistory}>
              <Trash2 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="max-w-3xl mx-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <Card
                  className={`p-4 max-w-[80%] transition-smooth ${
                    message.role === "user"
                      ? "gradient-primary text-primary-foreground shadow-soft"
                      : "bg-card border-border/50"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <span className={`text-xs mt-2 block ${
                    message.role === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </Card>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="backdrop-blur-glass bg-card/80 border-t border-border/50 p-4 shadow-large">
          <div className="max-w-3xl mx-auto space-y-3">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="shrink-0">
                <Plus className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="shrink-0">
                <Image className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="shrink-0">
                <Camera className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="shrink-0">
                <FileText className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-end gap-2">
              <Textarea
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                className="min-h-[60px] resize-none transition-smooth focus:border-primary"
              />
              
              <div className="flex gap-2">
                <Button
                  size="icon"
                  variant={isListening ? "default" : "outline"}
                  onClick={toggleListening}
                  className={`shrink-0 h-[60px] w-[60px] transition-smooth ${
                    isListening ? "gradient-accent animate-pulse" : ""
                  }`}
                >
                  <Mic className="w-5 h-5" />
                </Button>
                
                <Button
                  size="icon"
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="shrink-0 h-[60px] w-[60px] gradient-primary text-primary-foreground shadow-soft hover:shadow-medium transition-smooth"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              Allow FAITM to record audio for voice commands
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AIAssistant;
