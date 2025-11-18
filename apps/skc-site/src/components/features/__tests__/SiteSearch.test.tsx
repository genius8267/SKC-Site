import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';

vi.mock('next-intl', () => ({
  useLocale: () => 'en',
  useTranslations: () => {
    const t = (key: string, vars?: Record<string, string>) => {
      if (key === 'helper') return 'Search for content';
      if (key === 'placeholder') return 'Search SKC';
      if (key === 'empty') return `No results for "${vars?.query ?? ''}"`;
      if (key === 'enter') return 'enter';
      if (key === 'escape') return 'escape';
      if (key.startsWith('categories.')) {
        return key.split('.')[1];
      }
      return key;
    };
    (t as any).raw = () => [];
    return t;
  },
}));

vi.mock('@/data/searchIndex', () => ({
  searchIndex: [
    {
      id: 'battery',
      title: 'Battery Materials',
      description: 'Copper foil and silicon anodes',
      category: 'product',
      url: '/creation/battery',
    },
    {
      id: 'culture',
      title: 'Culture & Values',
      description: 'Career experience overview',
      category: 'page',
      url: '/career/culture',
    },
  ],
}));

import { SiteSearch } from '../SiteSearch';

describe('SiteSearch', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders matching results for a query', () => {
    render(<SiteSearch isOpen onClose={vi.fn()} />);

    fireEvent.change(screen.getByPlaceholderText('Search SKC'), {
      target: { value: 'battery' },
    });

    expect(screen.getByText('Battery Materials')).toBeInTheDocument();
    expect(screen.queryByText('Culture & Values')).toBeNull();
  });

  it('shows empty state when nothing matches', () => {
    render(<SiteSearch isOpen onClose={vi.fn()} />);
    fireEvent.change(screen.getByPlaceholderText('Search SKC'), {
      target: { value: 'unknown' },
    });
    expect(screen.getByText('No results for "unknown"')).toBeInTheDocument();
  });
});
