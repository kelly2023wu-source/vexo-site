import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VEXO | Commercialization Studio",
  description:
    "VEXO helps frontier technologies and innovative brands scale across borders through commercialization strategy, market validation, strategic partnerships, and go to market execution.",
  metadataBase: new URL("https://vexo.global"),
  openGraph: {
    title: "VEXO | Commercialization Studio",
    description:
      "Helping frontier technologies scale across borders with market validation, partnerships, and commercial execution.",
    url: "https://vexo.global",
    siteName: "VEXO",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
