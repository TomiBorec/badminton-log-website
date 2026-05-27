import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Nav } from '@/components/sections/Nav';
import { Footer } from '@/components/sections/Footer';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Score Buddy — Score every game from your wrist',
  description:
    'Score Buddy keeps score for you on Apple Watch across badminton, tennis, basketball, football, and golf — with heart rate, calories, and per-sport rules built in. iPhone and iPad mirror every point in real time. (Formerly Badminton Log.)',
  applicationName: 'Score Buddy',
  authors: [{ name: 'Tomáš Kalmus' }],
  keywords: [
    'score buddy',
    'badminton log',
    'badminton',
    'tennis',
    'basketball',
    'football',
    'golf',
    'apple watch',
    'iphone',
    'ipad',
    'score keeper',
    'tournament',
    'heart rate',
    'healthkit',
  ],
  openGraph: {
    title: 'Score Buddy — Score every game from your wrist',
    description:
      'Badminton Log is now Score Buddy. Score on your wrist for badminton, tennis, basketball, football, and golf. Live BPM, calories, and per-sport rules built in.',
    type: 'website',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

const themeBootstrap = `(() => {
  try {
    const stored = localStorage.getItem('bl-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored === 'light' || stored === 'dark' ? stored : (prefersDark ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
  } catch (_) {
    document.documentElement.dataset.theme = 'light';
  }
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>
        <ThemeProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
