'use client';

import { Theme } from '../types';

export default function ThemeWrapper({
  theme,
  children,
}: {
  theme: Theme;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        '--primary': theme.primary,
        '--secondary': theme.secondary,
        '--background': theme.background,
        '--card-bg': theme.cardBg,
        '--text': theme.text,
        '--text-muted': theme.textMuted,
        '--accent': theme.accent,
        backgroundColor: theme.background,
        color: theme.text,
      } as React.CSSProperties}
      className="min-h-screen w-full transition-colors duration-300"
    >
      {children}
    </div>
  );
}
