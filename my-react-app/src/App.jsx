import React, { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [isSetColor, setIsSetColor] = useState(false);
  const [bgColor, setBgColor] = useState("#fca5a5"); // default background

  const color = [
    { id: 1, col: "#FF5733" }, // red-orange
    { id: 2, col: "#33FF57" }, // green
    { id: 3, col: "#3357FF" }, // blue
    { id: 4, col: "#FF33A1" }, // pink
    { id: 5, col: "#FFD133" }, // yellow-orange
    { id: 6, col: "#33FFF3" }, // teal
    { id: 7, col: "#A133FF" }, // violet
    { id: 8, col: "#FF8C33" }, // orange
    { id: 9, col: "#66FF33" }, // light green
    { id: 10, col: "#3380FF" }, // sky blue
    { id: 11, col: "#FF3380" }, // deep pink
    { id: 12, col: "#F3FF33" }, // lemon
    { id: 13, col: "#33FFD1" }, // aqua
    { id: 14, col: "#B833FF" }, // purple
    { id: 15, col: "#FF6F33" }, // coral
    { id: 16, col: "#33FF8C" }, // mint green
    { id: 17, col: "#3375FF" }, // vivid blue
    { id: 18, col: "#FF33D1" }, // magenta
    { id: 19, col: "#FFF633" }, // bright yellow
    { id: 20, col: "#33D1FF" }, // cyan-blue
  ];

  const handleClick = () => {
    setIsSetColor(true);

    const randomColor = color[Math.floor(Math.random() * color.length)].col;
    setBgColor(randomColor);
  };

  useEffect(() => {
    handleClick(); // Call once on mount
  }, []);

  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <button
        type="button"
        onClick={handleClick}
        className="px-4 py-2 bg-white text-black rounded shadow"
      >
        Click
      </button>
    </div>
  );
}

export default App;
