import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Yo! I am Crazy Malon. What\'s the move today? 💎' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Initialize Gemini Client
      // Note: process.env.API_KEY must be set in your Netlify Environment Variables
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "You are Crazy Malon. You are a legendary, mysterious character who loves luxury, heist movies, and memes. You speak in a mix of English and hype-slang (fam, bro, wagmi, crazy, luxury, diamonds). You are the mascot of $MALON coin. You are NOT a financial advisor, just a crazy legend. Keep responses short, punchy, and full of emojis. If asked about price, say 'Only Up'.",
        },
      });

      const text = response.text;
      
      setMessages(prev => [...prev, { role: 'model', text: text || "My diamonds are too bright, I missed that. Say again?" }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Yo, the feds are watching. API Error. Check your key." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-malon-gold border-4 border-black shadow-brutal rounded-full flex items-center justify-center text-black hover:bg-white transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={32} /> : <MessageSquare size={32} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-28 right-6 z-40 w-full max-w-[350px] h-[500px] bg-malon-black border-4 border-malon-gold shadow-brutal flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-malon-gold p-4 border-b-4 border-black flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-full overflow-hidden border-2 border-white">
                <img src="https://picsum.photos/100/100?random=1" className="w-full h-full object-cover" alt="Avatar" />
              </div>
              <div>
                <h3 className="font-display text-xl uppercase text-black leading-none">Crazy Malon</h3>
                <span className="text-xs font-bold text-black/70 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span> Online
                </span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-malon-dark/50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[80%] p-3 border-2 border-black shadow-[4px_4px_0_0_#000] text-sm font-bold font-body
                    ${msg.role === 'user' ? 'bg-malon-pink text-white rounded-tl-xl rounded-tr-xl rounded-bl-xl' : 'bg-white text-black rounded-tl-xl rounded-tr-xl rounded-br-xl'}`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white text-black p-3 border-2 border-black rounded-xl flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin" />
                    <span className="font-bold font-body text-xs">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-malon-black border-t-4 border-black">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask Malon..."
                  className="flex-1 bg-malon-dark text-white border-2 border-malon-gold px-3 py-2 font-body focus:outline-none focus:bg-black"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-malon-green text-black p-2 border-2 border-black hover:bg-white disabled:opacity-50 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;