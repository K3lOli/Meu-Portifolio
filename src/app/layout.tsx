import "./globals.css";
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";



export const metadata: Metadata = {
  title: "Kelson Victor",
  description: "Kelson Victor - FullStack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  // console.log(isDarkMode);

  return (
    <html
      lang="en"
      className={`!scroll-smooth `}
      id="inicio"
    >
      {children}
    </html>
  );
  // bg-gradient-to-r from-[#9FB4E9] to-[#C6D5FC]]
}
