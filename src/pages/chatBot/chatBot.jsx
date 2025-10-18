import React, { useState } from "react";
import "./chat.scss";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I am a chatbot. Ask me anything about crops!",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [isSuggesting, setIsSuggesting] = useState(false);

  const API_URL =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent";
  const apiKey = "AIzaSyBcZgJUTqjYtNyHy4L1MvYO63w48k5T4CI"; // 🔒 put API key in env file

  const exponentialBackoffFetch = async (
    url,
    options,
    maxRetries = 5,
    delay = 1000
  ) => {
    for (let i = 0; i < maxRetries; i++) {
      try {
        const response = await fetch(url, options);
        if (response.status === 429) {
          console.log(`Rate limit exceeded. Retrying in ${delay}ms...`);
          await new Promise((resolve) => setTimeout(resolve, delay));
          delay *= 2;
          continue;
        }
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        return response;
      } catch (error) {
        if (i === maxRetries - 1) throw error;
        console.error("Fetch failed, retrying...", error);
        await new Promise((resolve) => setTimeout(resolve, delay));
        delay *= 2;
      }
    }
    throw new Error("Maximum retries exceeded.");
  };

  const callGeminiApi = async (prompt) => {
    try {
      const payload = { contents: [{ parts: [{ text: prompt }] }] };
      const response = await exponentialBackoffFetch(
        API_URL + `?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const result = await response.json();
      return (
        result?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response received."
      );
    } catch (error) {
      console.error("Gemini API call failed:", error);
      return "An error occurred while communicating with the AI. Please try again later.";
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const botResponse = await callGeminiApi(input);
    const botMessage = { text: botResponse, sender: "bot" };
    setMessages((prev) => [...prev, botMessage]);
    setLoading(false);
  };

  const handleSummarize = async () => {
    const lastBotMessage = [...messages]
      .reverse()
      .find((msg) => msg.sender === "bot");
    if (!lastBotMessage) {
      setMessages((prev) => [
        ...prev,
        { text: "There is no bot response to summarize.", sender: "bot" },
      ]);
      return;
    }

    setIsSummarizing(true);
    const summaryPrompt = `Summarize the following text concisely: \n\n${lastBotMessage.text}`;
    const summary = await callGeminiApi(summaryPrompt);
    setMessages((prev) => [
      ...prev,
      { text: "✨ **Summary** ✨\n" + summary, sender: "bot" },
    ]);
    setIsSummarizing(false);
  };

  const handleSuggestCrop = async () => {
    setIsSuggesting(true);
    const suggestionPrompt =
      "Suggest a type of crop that grows well in a tropical climate with sandy soil. Provide a brief description of the crop and its growing conditions.";
    const suggestion = await callGeminiApi(suggestionPrompt);
    setMessages((prev) => [
      ...prev,
      { text: "✨ **Crop Suggestion** ✨\n" + suggestion, sender: "bot" },
    ]);
    setIsSuggesting(false);
  };

  return (
    <div className="chatbot-container">
      {/* Header */}
      <div className="chatbot-header">
        <h2>Crop Chatbot</h2>
      </div>

      {/* Messages container */}
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <p>{msg.text}</p>
          </div>
        ))}
        {(loading || isSummarizing || isSuggesting) && (
          <div className="message bot">
            <div className="loading-indicator">Typing...</div>
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div className="chatbot-input-form action-buttons">
        <button
          onClick={handleSummarize}
          disabled={loading || isSummarizing || isSuggesting}
        >
          ✨ Summarize Last Response
        </button>
        <button
          onClick={handleSuggestCrop}
          disabled={loading || isSummarizing || isSuggesting}
        >
          ✨ Suggest a Crop
        </button>
      </div>

      {/* Input form */}
      <form onSubmit={handleSendMessage} className="chatbot-input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          disabled={loading || isSummarizing || isSuggesting}
        />
        <button
          type="submit"
          disabled={loading || isSummarizing || isSuggesting || !input.trim()}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;

// import React, { useState } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import "./chat.scss";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([
//     { text: "Hello! I am a chatbot. Ask me anything!", sender: "bot" },
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Access your API key as an environment variable (securely)
//   const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

//   const genAI = new GoogleGenerativeAI(
//     "AIzaSyBcZgJUTqjYtNyHy4L1MvYO63w48k5T4CI"
//   );
//   // CORRECTED LINE: Use a widely available, stable model.
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMessage = { text: input, sender: "user" };
//     setMessages((prevMessages) => [...prevMessages, userMessage]);
//     setInput("");
//     setLoading(true);

//     try {
//       const result = await model.generateContent(input);
//       const botMessage = {
//         text: result.response.text(),
//         sender: "bot",
//       };
//       setMessages((prevMessages) => [...prevMessages, botMessage]);
//     } catch (error) {
//       console.error("Error fetching response from API:", error);
//       const errorMessage = {
//         text: "Sorry, I couldn't get a response. Please try again.",
//         sender: "bot",
//       };
//       setMessages((prevMessages) => [...prevMessages, errorMessage]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="chatbot-container">
//       <div className="chatbot-header">
//         <h2>Crop Chatbot</h2>
//       </div>
//       <div className="chatbot-messages">
//         {messages.map((msg, index) => (
//           <div key={index} className={`message ${msg.sender}`}>
//             <p>{msg.text}</p>
//           </div>
//         ))}
//         {loading && <div className="loading-indicator">Typing...</div>}
//       </div>
//       <form onSubmit={handleSendMessage} className="chatbot-input-form">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask me anything..."
//           disabled={loading}
//         />
//         <button type="submit" disabled={loading}>
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Chatbot;
// import React, { useState } from "react";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([
//     {
//       text: "Hello! I am a chatbot. Ask me anything about crops!",
//       sender: "bot",
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [isSummarizing, setIsSummarizing] = useState(false);
//   const [isSuggesting, setIsSuggesting] = useState(false);

//   // We are using the fetch API with a specific model as per the environment
//   const API_URL =
//     "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent";
//   const apiKey = "AIzaSyBcZgJUTqjYtNyHy4L1MvYO63w48k5T4CI";

//   // Function to handle exponential backoff for API retries
//   const exponentialBackoffFetch = async (
//     url,
//     options,
//     maxRetries = 5,
//     delay = 1000
//   ) => {
//     for (let i = 0; i < maxRetries; i++) {
//       try {
//         const response = await fetch(url, options);
//         if (response.status === 429) {
//           console.log(`Rate limit exceeded. Retrying in ${delay}ms...`);
//           await new Promise((resolve) => setTimeout(resolve, delay));
//           delay *= 2; // Double the delay for the next retry
//           continue;
//         }
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response;
//       } catch (error) {
//         if (i === maxRetries - 1) {
//           throw error; // Re-throw the error on the last attempt
//         }
//         console.error("Fetch failed, retrying...", error);
//         await new Promise((resolve) => setTimeout(resolve, delay));
//         delay *= 2;
//       }
//     }
//     throw new Error("Maximum retries exceeded.");
//   };

//   const callGeminiApi = async (prompt) => {
//     try {
//       const payload = {
//         contents: [{ parts: [{ text: prompt }] }],
//       };
//       const response = await exponentialBackoffFetch(
//         API_URL + `?key=${apiKey}`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(payload),
//         }
//       );
//       const result = await response.json();
//       return (
//         result?.candidates?.[0]?.content?.parts?.[0]?.text ||
//         "No response received."
//       );
//     } catch (error) {
//       console.error("Gemini API call failed:", error);
//       return "An error occurred while communicating with the AI. Please try again later.";
//     }
//   };

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMessage = { text: input, sender: "user" };
//     setMessages((prevMessages) => [...prevMessages, userMessage]);
//     setInput("");
//     setLoading(true);

//     const botResponse = await callGeminiApi(input);
//     const botMessage = { text: botResponse, sender: "bot" };
//     setMessages((prevMessages) => [...prevMessages, botMessage]);
//     setLoading(false);
//   };

//   const handleSummarize = async () => {
//     const lastBotMessage = messages
//       .slice()
//       .reverse()
//       .find((msg) => msg.sender === "bot");
//     if (!lastBotMessage) {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { text: "There is no bot response to summarize.", sender: "bot" },
//       ]);
//       return;
//     }

//     setIsSummarizing(true);
//     const summaryPrompt = `Summarize the following text concisely: \n\n${lastBotMessage.text}`;
//     const summary = await callGeminiApi(summaryPrompt);
//     setMessages((prevMessages) => [
//       ...prevMessages,
//       { text: "✨ **Summary** ✨\n" + summary, sender: "bot" },
//     ]);
//     setIsSummarizing(false);
//   };

//   const handleSuggestCrop = async () => {
//     setIsSuggesting(true);
//     const suggestionPrompt =
//       "Suggest a type of crop that grows well in a tropical climate with sandy soil. Provide a brief description of the crop and its growing conditions.";
//     const suggestion = await callGeminiApi(suggestionPrompt);
//     setMessages((prevMessages) => [
//       ...prevMessages,
//       { text: "✨ **Crop Suggestion** ✨\n" + suggestion, sender: "bot" },
//     ]);
//     setIsSuggesting(false);
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
//       {/* Header */}
//       <div className="bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700 shadow-sm">
//         <h2 className="text-xl font-bold text-center">Crop Chatbot</h2>
//       </div>

//       {/* Messages container */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-4">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`flex ${
//               msg.sender === "user" ? "justify-end" : "justify-start"
//             }`}
//           >
//             <div
//               className={`p-3 max-w-xs rounded-lg shadow-md ${
//                 msg.sender === "user"
//                   ? "bg-blue-500 text-white rounded-br-none"
//                   : "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-bl-none"
//               }`}
//             >
//               <p className="whitespace-pre-wrap">{msg.text}</p>
//             </div>
//           </div>
//         ))}
//         {(loading || isSummarizing || isSuggesting) && (
//           <div className="flex justify-start">
//             <div className="p-3 max-w-xs rounded-lg shadow-md bg-gray-300 dark:bg-gray-700">
//               <div className="flex space-x-1">
//                 <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:-0.3s]"></div>
//                 <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:-0.15s]"></div>
//                 <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Action buttons */}
//       <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
//         <div className="flex justify-center space-x-4">
//           <button
//             onClick={handleSummarize}
//             disabled={loading || isSummarizing || isSuggesting}
//             className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:bg-purple-400 transition-colors"
//           >
//             ✨ Summarize Last Response
//           </button>
//           <button
//             onClick={handleSuggestCrop}
//             disabled={loading || isSummarizing || isSuggesting}
//             className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-green-400 transition-colors"
//           >
//             ✨ Suggest a Crop
//           </button>
//         </div>
//       </div>

//       {/* Input form */}
//       <form
//         onSubmit={handleSendMessage}
//         className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
//       >
//         <div className="flex space-x-2">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Ask me anything..."
//             disabled={loading || isSummarizing || isSuggesting}
//             className="flex-1 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
//           />
//           <button
//             type="submit"
//             disabled={loading || isSummarizing || isSuggesting || !input.trim()}
//             className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-blue-400 dark:disabled:bg-blue-600 transition-colors"
//           >
//             Send
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Chatbot;
