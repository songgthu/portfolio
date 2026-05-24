import type { Metadata } from "next";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/700.css";

import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";
import "./portfolio.css";

export const metadata: Metadata = {
  title: "Trinh Hoai Song Thu | Portfolio",
  description:
    "Modern portfolio for Trinh Hoai Song Thu, a full-stack engineer focused on AI-native, user-centric software products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="portfolio-theme"
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
        >
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}