
"use client";

import type { ReactNode } from "react";
import IntroScreenProvider from "./IntroScreenProvider";

interface AppProvidersProps {
  children: ReactNode;
}

export default function AppProviders({
  children,
}: AppProvidersProps) {
  return (
    <IntroScreenProvider>
      {children}
    </IntroScreenProvider>
  );
}