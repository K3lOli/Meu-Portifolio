import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kelson Victor",
  description: "Kelson Victor - FullStack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html
      lang="en"
      className={`!scroll-smooth `}
      id="inicio"
    >
      <body>
        {children}
      </body>
    </html>
  );
}
