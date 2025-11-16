import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';

const mockLocale = vi.fn(() => 'en');
const mockPathname = vi.fn(() => '/en/corporation');
const push = vi.fn();

vi.mock('next-intl', () => ({
  useLocale: () => mockLocale(),
}));

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push }),
  usePathname: () => mockPathname(),
}));

import { LanguageSwitcher, LanguageSwitcherCompact } from '../LanguageSwitcher';

beforeEach(() => {
  push.mockClear();
  mockLocale.mockReturnValue('en');
  mockPathname.mockReturnValue('/en/corporation');
});

describe('LanguageSwitcher', () => {
  it('routes to selected language', () => {
    render(<LanguageSwitcher />);
    fireEvent.click(screen.getByRole('button', { name: /English/i }));
    fireEvent.click(screen.getByRole('button', { name: /한국어/i }));
    expect(push).toHaveBeenCalledWith('/ko/corporation');
  });

  it('compact switch toggles locales', () => {
    render(<LanguageSwitcherCompact />);
    fireEvent.click(screen.getByTitle(/Switch to 한국어/i));
    expect(push).toHaveBeenCalledWith('/ko/corporation');
  });
});
