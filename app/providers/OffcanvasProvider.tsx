
"use client";

import { useCallback, useState } from "react";
import type { ReactNode } from "react";
import { OffcanvasContext } from "@/app/context/OffcanvasContext";

interface OffcanvasProviderProps {
  children: ReactNode;
}

export default function OffcanvasProvider({
  children,
}: OffcanvasProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openOffcanvas = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeOffcanvas = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleOffcanvas = useCallback(() => {
    setIsOpen((previous) => !previous);
  }, []);

  return (
    <OffcanvasContext.Provider
      value={{
        isOpen,
        openOffcanvas,
        closeOffcanvas,
        toggleOffcanvas,
      }}
    >
      {children}
    </OffcanvasContext.Provider>
  );
}
