/// <reference types="@testing-library/jest-dom" />

import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";
import { createElement } from "react";
import type { ReactNode } from "react";

// Global mock for framer-motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: { children?: ReactNode; [key: string]: unknown }) =>
      createElement("div", props, children),
    span: ({ children, ...props }: { children?: ReactNode; [key: string]: unknown }) =>
      createElement("span", props, children),
    li: ({ children, ...props }: { children?: ReactNode; [key: string]: unknown }) =>
      createElement("li", props, children),
  },
  AnimatePresence: ({ children }: { children: ReactNode }) => children,
}));

// Global mock for useInView hook
vi.mock("@/hooks/useInView", () => ({
  useInView: () => ({ ref: { current: null }, isInView: true }),
}));
