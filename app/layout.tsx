import type { Metadata } from "next";
import { Geist, Geist_Mono, Bitcount_Grid_Double, Raleway, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/web/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const bitcountGridDouble = Bitcount_Grid_Double({
  subsets: ['latin'],
  variable: '--font-bitcount-grid-double',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "leRhem",
  description:
    "A personal website and blog by leRhem, showcasing projects, articles, and insights on technology, programming, and more.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bitcountGridDouble.variable} ${raleway.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}