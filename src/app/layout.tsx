import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import React from "react";

export const metadata = {
  title: "RUVORO",
  description: "RUVORO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
