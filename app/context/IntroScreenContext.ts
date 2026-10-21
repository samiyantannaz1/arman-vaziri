
"use client";

import { createContext } from "react";

interface IntroScreenContextType {
  isIntroComplete: boolean;
  setIsIntroComplete: (value: boolean) => void;
}

export const IntroScreenContext =
  createContext<IntroScreenContextType | undefined>(undefined);