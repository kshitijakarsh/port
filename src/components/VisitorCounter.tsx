'use client';

import { useEffect, useState } from 'react';

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const response = await fetch('/api/visitors');
        const data = await response.json();
        setCount(data.uniqueVisitors);
      } catch (error) {
        console.error('Failed to fetch visitor count:', error);
      }
    };

    fetchVisitors();
  }, []);

  if (count === null) return <span>...</span>;

  return <span>{count}</span>;
}
