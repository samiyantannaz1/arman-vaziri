
"use client";

import { createContext } from "react";

interface OffcanvasContextType {
  isOpen: boolean;
  openOffcanvas: () => void;
  closeOffcanvas: () => void;
  toggleOffcanvas: () => void;
}

export const OffcanvasContext =
  createContext<OffcanvasContextType | undefined>(undefined);
