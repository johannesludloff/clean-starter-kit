"use client";

import type { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
  [key: string]: unknown;
}

// Stub analytics provider — replace with your analytics solution (e.g. OpenPanel, Posthog, etc.)
export function Provider({ children }: ProviderProps) {
  return <>{children}</>;
}
