
"use client";

import type { ReactNode } from "react";
import IntroScreenProvider from "./IntroScreenProvider";
import OffcanvasProvider from "./OffcanvasProvider";

interface AppProvidersProps {
  children: ReactNode;
}

export default function AppProviders({
  children,
}: AppProvidersProps) {
  return (
    <IntroScreenProvider>
       <OffcanvasProvider>
        {children}
       </OffcanvasProvider>
      
    </IntroScreenProvider>
  );
}