import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: false
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  title:"Car Doctor",
  description: "Car Doctor is your trusted partner for complete car servicing and maintenance. With modern technology and skilled mechanics, we ensure top-quality care for your vehicle. From engine check-ups, brake testing, battery replacement, and tire servicing to regular maintenance — everything you need is available in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav>

            <Navbar />

        </nav>
        {children}

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
