
import Navbar from '@/components/Navbar';
import { Inter } from "next/font/google";
import { Cabin } from "next/font/google";

import "./globals.css";
import NextAuthProvider from './NextAuthProvider';

const inter = Inter({ subsets: ["latin"] });
const cabin = Cabin({
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
      <body className={cabin.className}>
        
          <NextAuthProvider>
          <Navbar/>
          {children}
          </NextAuthProvider>
      </body>
    </html>
  );
}
