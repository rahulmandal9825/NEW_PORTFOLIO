import type { Metadata } from "next";
import { Inter ,DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rahul Portfolio",
  description: "- Full Stack Web development ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(dmSans.className ,"antialiased")}>{children}</body>
    </html>
  );
}
