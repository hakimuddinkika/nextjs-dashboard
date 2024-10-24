import '@/app/ui/global.css';
import { inter } from './ui/fonts';

export const metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Hakimuddin Kika - Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://nextjs-dashboard-learn-tau.vercel.app/'),
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
