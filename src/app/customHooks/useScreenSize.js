import { useEffect, useState } from "react";

export function useScreenSize() {
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

  return currentWidth;
}
