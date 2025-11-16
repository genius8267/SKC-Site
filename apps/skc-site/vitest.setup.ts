import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

vi.mock('framer-motion', () => {
  const motionProxy = new Proxy({}, {
    get: (_target, element: string) =>
      React.forwardRef<HTMLElement, React.PropsWithChildren<Record<string, unknown>>>((props, ref) => {
        const { children, ...rest } = props;
        const sanitizedProps = { ...rest } as Record<string, unknown>;
        ['whileHover', 'whileTap', 'animate', 'initial', 'transition', 'exit', 'viewport', 'whileInView'].forEach((key) => {
          delete sanitizedProps[key];
        });
        return React.createElement(element, { ...sanitizedProps, ref }, children as React.ReactNode);
      }),
  });

  return {
    __esModule: true,
    motion: motionProxy,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => React.createElement(React.Fragment, null, children),
  };
});

vi.mock('next-intl/middleware', () => ({
  __esModule: true,
  default: () => () => null,
}));
