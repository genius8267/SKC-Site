import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi, afterEach } from 'vitest';

const setTheme = vi.fn();

vi.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'dark',
    systemTheme: 'dark',
    setTheme,
  }),
}));

import { ThemeToggle, ThemeToggleCompact } from '../ThemeToggle';

afterEach(() => {
  setTheme.mockClear();
});

describe('ThemeToggle', () => {
  it('switches theme on click', async () => {
    render(<ThemeToggle />);
    await waitFor(() => screen.getByRole('button', { name: /switch to light mode/i }));
    fireEvent.click(screen.getByRole('button', { name: /switch to light mode/i }));
    expect(setTheme).toHaveBeenCalledWith('light');
  });

  it('compact toggle switches theme', async () => {
    render(<ThemeToggleCompact />);
    await waitFor(() => screen.getByRole('button', { name: /switch to light mode/i }));
    fireEvent.click(screen.getByRole('button', { name: /switch to light mode/i }));
    expect(setTheme).toHaveBeenCalledWith('light');
  });
});
