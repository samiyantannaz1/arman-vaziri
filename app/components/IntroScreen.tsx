
"use client";

import { useEffect } from "react";
import useIntroScreen from "@/app/hooks/useIntroScreen";

export default function IntroScreen() {
  const { setIsIntroComplete } = useIntroScreen();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroComplete(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, [setIsIntroComplete]);

  
   return (
  <div className="intro-screen">
    <div className="intro-screen__frame intro-screen__frame--top" />
    <div className="intro-screen__frame intro-screen__frame--bottom" />
    <div className="intro-screen__frame intro-screen__frame--left" />
    <div className="intro-screen__frame intro-screen__frame--right" />

    <div className="intro-screen__line" />

    <span className="intro-screen__brand">
      ARMAN VAZIRI
    </span>
  </div>
);
}

