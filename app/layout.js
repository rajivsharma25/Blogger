import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubscribeSection from "@/components/SubscribeSection";
import { ThemeProvider } from "@/context/ThemeContext";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Blogger",
  description:
    "A simple blogging platform built with Next.js and Tailwind CSS. Share your thoughts and ideas with the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <SubscribeSection />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
