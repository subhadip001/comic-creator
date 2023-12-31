import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Hydration from "./lib/Hydration";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Comic Creator",
  description: "Create comics with your friends with AI-generated images.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Hydration >
        <Navbar />
        {children}
        </Hydration>
      </body>
    </html>
  );
}
