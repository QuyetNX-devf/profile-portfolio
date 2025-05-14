import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { PageTransition } from "@/components/PageTransition";
import { StairTransition } from "@/components/StairTransition";
import { Toaster } from "@/components/ui/sonner";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Protfolio",
  description: "My Protfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.png" sizes="16x16" />
      </head>
      <body className={`${jetBrainsMono.variable} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Toaster richColors />
      </body>
    </html>
  );
}
