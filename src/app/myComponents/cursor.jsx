"use client";
import AnimatedCursor from "react-animated-cursor";
import { useScreenSize } from "../customHooks/useScreenSize";

export default function Cursor() {
  const currentWidth = useScreenSize();
  return <>{currentWidth > 700 && <AnimatedCursor />}</>;
}
