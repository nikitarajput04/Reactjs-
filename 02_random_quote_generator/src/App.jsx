import { useState } from "react";

export default function RandomQuoteGenerator() {
  const quotes = [
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal.",
    "Dream big and dare to fail.",
    "Act as if what you do makes a difference. It does.",
    "Every moment is a fresh beginning.",
    "Don't stop until you're proud.",
    "Believe in yourself a litte more",
    "Trust the timing of your life",
    "You are stronger than you think"
  ];

  const [quote, setQuote] = useState("Click the button to get a quote!");

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  return (
    <div className="flex items-center justify-center h-screen" style={{ backgroundColor: getRandomColor() }}>
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-lg">
        <h1 className="text-3xl font-bold mb-6">Random Quote Generator</h1>
        <p className="text-xl italic mb-8">"{quote}"</p>
        <button
          onClick={generateQuote}
          className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-700 transition"
        >
          Generate Quote
        </button>
      </div>
    </div>
  );
}
