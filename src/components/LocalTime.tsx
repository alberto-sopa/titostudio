"use client";
import { useEffect, useState } from "react";

export default function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const madridTime = now.toLocaleTimeString("es-ES", {
        timeZone: "Europe/Madrid",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit", // 👈 añadimos segundos
      });
      setTime(madridTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="text-white font-medium">{time} hora de Madrid</div>;
}
