import { describe, expect, it } from 'vitest';
import { calculateReadingTime, formatReadingTime, getReadingTimeFromHTML } from '../readingTime';

describe('readingTime utils', () => {
  it('calculates minutes with default wpm', () => {
    expect(calculateReadingTime('word '.repeat(200))).toBe(1);
  });

  it('formats labels correctly', () => {
    expect(formatReadingTime(0)).toBe('Less than 1 min read');
    expect(formatReadingTime(1)).toBe('1 min read');
    expect(formatReadingTime(3)).toBe('3 min read');
  });

  it('parses HTML content', () => {
    const result = getReadingTimeFromHTML('<p>Hello world</p>');
    expect(result.minutes).toBe(1);
    expect(result.text).toBe('1 min read');
  });
});
