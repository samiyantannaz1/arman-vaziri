
"use client";

import { useState } from "react";
import { IntroScreenContext } from "@/app/context/IntroScreenContext";
import IntroScreen from "@/app/components/IntroScreen";

interface IntroScreenProviderProps {
  children: React.ReactNode;
}

export default function IntroScreenProvider({
  children,
}: IntroScreenProviderProps) {
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  return (
    <IntroScreenContext.Provider
      value={{
        isIntroComplete,
        setIsIntroComplete,
      }}
    >
      {!isIntroComplete && (
        <IntroScreen />
      )}

      {/* {false && !isIntroComplete && (
  <IntroScreen />
)} */}

      {children}
    </IntroScreenContext.Provider>
  );
}