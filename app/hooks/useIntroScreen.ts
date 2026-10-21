
"use client";

import { useContext } from "react";
import { IntroScreenContext } from "@/app/context/IntroScreenContext";

export default function useIntroScreen() {
  const context = useContext(IntroScreenContext);

  if (context === undefined) {
    throw new Error(
      "useIntroScreen must be used within IntroScreenProvider"
    );
  }

  return context;
}