'use client';
import { useState } from 'react';

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  const sendMessage = async () => {
    if (!input.trim()) return;
  
    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
  
 
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
  
      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }
  
      const data = await res.json();
  
      const botMessage = { role: 'assistant', content: data.reply };
      setMessages((prev) => [...prev, botMessage]);
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: '⚠️ Sorry, something went wrong. Please try again later.' },
      ]);
    
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-80 bg-white border rounded-lg shadow-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-bold">💬 Chat with SoftBot</h3>
            <button onClick={toggleChat} className="text-red-500">X</button>
          </div>
          <div className="h-60 overflow-y-auto text-sm mb-2">
            {messages.map((msg, i) => (
              <div key={i} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                <div
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-2 py-1 border rounded text-sm"
              placeholder="Ask something..."
            />
            <button
              onClick={sendMessage}
              className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg"
        >
         🤖 Open Chatbot
        </button>
      )}
    </>
  );
}
