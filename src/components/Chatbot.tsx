import React, { useState } from "react";

const Chatbot: React.FC = () => {
    const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([]);
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    // Predefined cybersecurity-related responses
    const responses: { [key: string]: string } = {
        "what is phishing?": "Phishing is a cyber attack where attackers impersonate legitimate entities to steal sensitive information.",
        "how to secure a password?": "Use a mix of letters, numbers, and symbols. Enable two-factor authentication (2FA).",
        "what is a firewall?": "A firewall is a security system that monitors and controls network traffic.",
        "how to prevent malware?": "Keep software updated, avoid suspicious downloads, and use antivirus software.",
        "what is ransomware?": "Ransomware is malware that encrypts files and demands payment for their release.",
        "default": "I don't have an answer for that. Try asking a cybersecurity-related question."
    };

    const sendMessage = () => {
        if (!input.trim()) return;

        const userMessage = { text: input, sender: "user" as const };
        const botResponse = { text: responses[input.toLowerCase()] || responses["default"], sender: "bot" as const };

        setMessages((prev) => [...prev, userMessage, botResponse]);
        setInput("");
    };

    return (
        <div>
            {/* Chatbot Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    left: "20px",
                    backgroundColor: "#ddd",
                    color: "#000",
                    border: "none",
                    padding: "12px",
                    borderRadius: "50%",
                    cursor: "pointer",
                    fontSize: "20px",
                    boxShadow: "2px 2px 10px rgba(0,0,0,0.2)"
                }}
            >
                💬
            </button>

            {/* Chatbot Window */}
            {isOpen && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "80px",
                        left: "20px",
                        width: "320px",
                        border: "1px solid #ccc",
                        borderRadius: "12px",
                        backgroundColor: "#f9f9f9",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                        padding: "10px",
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    {/* Chat Messages */}
                    <div style={{ 
                        height: "250px", 
                        overflowY: "auto", 
                        padding: "10px", 
                        display: "flex", 
                        flexDirection: "column",
                        gap: "8px"
                    }}>
                        {messages.map((msg, index) => (
                            <div key={index} style={{
                                alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                                backgroundColor: msg.sender === "user" ? "#dcdcdc" : "#e0e0e0",
                                padding: "8px 12px",
                                borderRadius: "8px",
                                maxWidth: "80%",
                                wordWrap: "break-word"
                            }}>
                                <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}
                            </div>
                        ))}
                    </div>

                    {/* Input Box */}
                    <div style={{ display: "flex", gap: "5px", padding: "5px" }}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about cybersecurity..."
                            style={{
                                flexGrow: 1,
                                padding: "8px",
                                border: "1px solid #ccc",
                                borderRadius: "6px",
                                fontSize: "14px"
                            }}
                        />
                        <button 
                            onClick={sendMessage} 
                            style={{
                                padding: "8px 12px",
                                backgroundColor: "#ccc",
                                border: "none",
                                borderRadius: "6px",
                                cursor: "pointer",
                                fontSize: "14px"
                            }}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
