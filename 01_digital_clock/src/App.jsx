import { useEffect, useState } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());//cureent time milta h
  //setTime timer ko change or update karega 

  useEffect(() => {
    const interval = setInterval(() => {//setInterval ek function h jo bbar baar repeat hota h
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (t) => {
    const hours = String(t.getHours()).padStart(2, "0");
    const minutes = String(t.getMinutes()).padStart(2, "0");
    const seconds = String(t.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-200">
      <div className="bg-blue-100 p-10 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold mb-4">Digital Clock</h1>
        <p className="text-5xl font-mono">{formatTime(time)}</p>
      </div>
    </div>
  );
}
