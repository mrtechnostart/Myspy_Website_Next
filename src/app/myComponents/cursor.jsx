"use client";
import React, { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
  const [currentWidth, setCurrentWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.outerWidth);
    };
    window.addEventListener("resize", handleResize);
    setCurrentWidth(window.outerWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <>{currentWidth > 700 && <AnimatedCursor />}</>;
}
