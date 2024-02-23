import './globals.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Fredoka, Press_Start_2P, Caveat } from 'next/font/google';

const fredoka = Fredoka({ subsets: ['latin'], variable: '--font-fredoka', display: 'swap' });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat', display: 'swap' });
const twoP = Press_Start_2P({ subsets: ['latin'], display: 'swap', variable: '--font-2p', weight: ['400'] });

export const metadata: Metadata = {
  title: 'Pier 418',
  description: 'A digital studio crafting experiences for the new era.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={clsx(fredoka.variable, caveat.variable, twoP.variable)} suppressHydrationWarning>
      <body className="min-h-screen antialiased bg-gradient-to-t from-gray-700 via-gray-900 to-black">{children}</body>
    </html>
  );
}
