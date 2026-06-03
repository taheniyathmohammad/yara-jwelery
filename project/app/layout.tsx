import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Inter, Great_Vibes } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  variable: '--font-great-vibes',
  display: 'swap',
  weight: '400',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yaralittlewings.com'),
  title: 'Yara: Little Wings of Joy | Permanent Jewelry Dallas, TX',
  description:
    'Luxury permanent jewelry boutique in Dallas, TX. Custom chain welding, sterling silver, gold-filled, and rose gold permanent bracelets & anklets. Book your Dallas session today.',
  keywords:
    'permanent jewelry Dallas, permanent bracelet Dallas TX, welded jewelry DFW, permanent jewelry near me, Dallas permanent jewelry boutique',
  openGraph: {
    title: 'Yara: Little Wings of Joy | Permanent Jewelry Dallas, TX',
    description:
      'Luxury permanent jewelry welding in Dallas, TX. Book your appointment or private event today.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${greatVibes.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
