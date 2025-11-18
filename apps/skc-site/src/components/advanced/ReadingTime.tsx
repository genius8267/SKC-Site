'use client';

import { useEffect, useState } from 'react';
import { formatReadingTime, calculateReadingTime } from '@/utils/readingTime';

interface ReadingTimeProps {
  content: string;
  wordsPerMinute?: number;
}

export function ReadingTime({ content, wordsPerMinute = 200 }: ReadingTimeProps) {
  const [readingTime, setReadingTime] = useState<string>('');

  useEffect(() => {
    const minutes = calculateReadingTime(content, wordsPerMinute);
    setReadingTime(formatReadingTime(minutes));
  }, [content, wordsPerMinute]);

  if (!readingTime) return null;

  return (
    <span className="inline-flex items-center gap-2 text-sm text-text-secondary">
      <span className="text-base">📖</span>
      {readingTime}
    </span>
  );
}

// Badge variant
export function ReadingTimeBadge({ content, wordsPerMinute = 200 }: ReadingTimeProps) {
  const [readingTime, setReadingTime] = useState<string>('');

  useEffect(() => {
    const minutes = calculateReadingTime(content, wordsPerMinute);
    setReadingTime(formatReadingTime(minutes));
  }, [content, wordsPerMinute]);

  if (!readingTime) return null;

  return (
    <span className="pill text-xs">
      📖 {readingTime}
    </span>
  );
}
