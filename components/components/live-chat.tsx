"use client"

import type React from "react"

import { useState } from "react"
import { MessageSquare, Phone, X, Send, Minimize2, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [message, setMessage] = useState("")
  const [chatMessages, setChatMessages] = useState<{ sender: "user" | "agent"; text: string }[]>([
    { sender: "agent", text: "Hello! How can we assist you today with your roadside emergency?" },
  ])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    setIsMinimized(false)
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    // Add user message
    setChatMessages([...chatMessages, { sender: "user", text: message }])
    setMessage("")

    // Simulate agent response after a short delay
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "agent",
          text: "Thank you for your message. Our team will assist you shortly. For immediate assistance, please call us at +989120379961.",
        },
      ])
    }, 1000)
  }

  return (
    <>
      {/* Chat button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-accent-green text-text-dark shadow-lg hover:bg-accent-green/90 transition-all duration-300"
          aria-label="Open chat"
        >
          <MessageSquare className="h-7 w-7" />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div
          className={`fixed bottom-6 right-6 z-50 w-80 rounded-lg bg-bg-lavender shadow-xl transition-all duration-300 border-2 border-accent-green/20 ${
            isMinimized ? "h-14" : "h-[450px]"
          }`}
        >
          {/* Chat header */}
          <div className="flex items-center justify-between rounded-t-lg bg-button-blue p-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-green">
                <MessageSquare className="h-4 w-4 text-text-dark" />
              </div>
              <h3 className="font-medium text-text-dark">RoadAssist Chat</h3>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={toggleMinimize}
                className="rounded p-1 text-text-dark hover:bg-button-blue/80"
                aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </button>
              <button
                onClick={toggleChat}
                className="rounded p-1 text-text-dark hover:bg-button-blue/80"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Chat content - only shown when not minimized */}
          {!isMinimized && (
            <>
              <Tabs defaultValue="chat" className="h-[calc(100%-56px)]">
                <TabsList className="grid w-full grid-cols-2 rounded-none border-b">
                  <TabsTrigger value="chat" className="rounded-none">
                    Chat
                  </TabsTrigger>
                  <TabsTrigger value="call" className="rounded-none">
                    Call
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="chat" className="h-[calc(100%-40px)] flex flex-col">
                  <div className="flex-1 overflow-y-auto p-3 space-y-3">
                    {chatMessages.map((msg, index) => (
                      <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[80%] rounded-lg p-2 ${
                            msg.sender === "user"
                              ? "bg-button-blue text-text-dark"
                              : "bg-accent-green/20 text-text-dark"
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleSendMessage} className="border-t p-3 flex gap-2">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 bg-bg-lavender border-accent-green/20"
                    />
                    <Button
                      type="submit"
                      size="icon"
                      className="bg-accent-green text-text-dark hover:bg-accent-green/90"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent
                  value="call"
                  className="h-[calc(100%-40px)] flex flex-col items-center justify-center p-6 space-y-4"
                >
                  <div className="rounded-full bg-accent-green/20 p-4">
                    <Phone className="h-10 w-10 text-accent-green" />
                  </div>
                  <h3 className="text-lg font-medium text-text-dark">Call our support team</h3>
                  <p className="text-center text-text-dark/70">
                    We're available 24/7 to assist with your roadside emergencies
                  </p>
                  <a
                    href="tel:+989120379961"
                    className="flex items-center gap-2 rounded-full bg-cta-yellow px-4 py-2 font-medium text-text-dark hover:bg-cta-yellow/90"
                  >
                    <Phone className="h-4 w-4" />
                    +989120379961
                  </a>
                </TabsContent>
              </Tabs>
            </>
          )}
        </div>
      )}
    </>
  )
}
