import { Inter_Tight } from 'next/font/google';
import './globals.css';

const interTight = Inter_Tight({ 
  subsets: ['latin'],
  weight: ['400', '600', '800', '900'] 
});


export const metadata = {
  title: 'Turnless | Portfolio',
  icons: {
    icon: '/pics.jpg',
    shortcut: '/pics.jpg',
    apple: '/pics.jpg'
  },
};

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <body className={interTight.className}>
        {children}
      </body>
    </html>
  );
}