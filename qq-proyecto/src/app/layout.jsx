
import Navbar from '@/components/Navbar';
import { Inter } from "next/font/google";
import { Spectral } from "next/font/google";

import "./globals.css";
import NextAuthProvider from './NextAuthProvider';

const inter = Inter({ subsets: ["latin"] });
const spectral = Spectral({
  weight: '500',
  subsets: ['latin'],
})

export const metadata = {
  title: "Quill Quest",
  description: "Descubre tu próxima historia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spectral.className}>
        
          <NextAuthProvider>
          <Navbar/>
          {children}
          </NextAuthProvider>
      </body>
    </html>
  );
}
