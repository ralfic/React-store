import { useEffect, useState } from 'react';

export default function useToggleThem() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) return savedTheme;

    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    return prefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    document.documentElement.classList.remove(theme);
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { toggleTheme };
}
