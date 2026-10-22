import { useState, useEffect, useRef } from "react";

const TeacherPersonalAssistant = ({
  teacherName,
  subject,
  experience,
  classes,
  school,
  location,
  demoAvailable = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      from: "ai",
      text: `Hello 👋 I’m ${teacherName}'s AI Assistant. Ask me about subjects, experience, classes or demo session.`,
    },
  ]);

  const generateReply = (question) => {
    const q = question.toLowerCase();

    if (q.includes("hi") || q.includes("hello"))
      return `Hello 👋 Welcome to ${teacherName}'s teaching portfolio.`;

    if (q.includes("about") || q.includes("who"))
      return `${teacherName} is a ${subject} teacher at ${school}, located in ${location}, with ${experience} of experience.`;

    if (q.includes("subject"))
      return `${teacherName} teaches ${subject} for classes ${classes}.`;

    if (q.includes("experience"))
      return `${teacherName} has ${experience} of teaching experience.`;

    if (q.includes("class"))
      return `Classes handled: ${classes}. Focus is on concept clarity and exam preparation.`;

    if (q.includes("school"))
      return `${teacherName} is currently associated with ${school}.`;

    if (q.includes("location"))
      return `${teacherName} is based in ${location}.`;

    if (q.includes("demo") || q.includes("book")) {
      return demoAvailable
        ? `Yes ✅ Demo classes are available. Please connect via the Contact section to book a session.`
        : `Currently demo sessions are not available. Please contact for more details.`;
    }

    if (q.includes("thank"))
      return "You're welcome 😊";

    return `You can ask about ${subject}, classes, experience, school or demo sessions.`;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    const replyText = generateReply(input);
    const aiMsg = { from: "ai", text: replyText };

    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setInput("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: "30px",
          right: "24px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "#22C55E",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: "22px",
          zIndex: 9999,
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        🎓
      </div>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "24px",
            width: "350px",
            background: "#101828",
            borderRadius: "16px",
            overflow: "hidden",
            color: "white",
            border: "1px solid #1E2939",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              padding: "12px 16px",
              background: "#1E2939",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            📚 Teacher Assistant
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setIsOpen(false)}
            >
              ✕
            </span>
          </div>

          <div
            style={{
              height: "250px",
              overflowY: "auto",
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  alignSelf:
                    msg.from === "user" ? "flex-end" : "flex-start",
                  background:
                    msg.from === "user" ? "#22C55E" : "#1E2939",
                  color: msg.from === "user" ? "black" : "white",
                  padding: "8px 12px",
                  borderRadius: "12px",
                  maxWidth: "80%",
                }}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div
            style={{
              display: "flex",
              padding: "10px",
              gap: "6px",
              background: "#0F172A",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask something..."
              style={{
                flex: 1,
                padding: "8px",
                borderRadius: "8px",
                border: "1px solid #1E2939",
                background: "#101828",
                color: "white",
              }}
            />
            <button
              onClick={handleSend}
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border: "none",
                background: "#22C55E",
                color: "black",
                fontWeight: "600",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TeacherPersonalAssistant;