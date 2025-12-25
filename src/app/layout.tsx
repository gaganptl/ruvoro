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
      <body>{children}</body>
    </html>
  );
}
