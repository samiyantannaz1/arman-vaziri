
"use client";

import { useContext } from "react";
import { OffcanvasContext } from "@/app/context/OffcanvasContext";

export default function useOffcanvas() {
  const context = useContext(OffcanvasContext);

  if (context === undefined) {
    throw new Error(
      "useOffcanvas must be used within OffcanvasProvider"
    );
  }

  return context;
}
