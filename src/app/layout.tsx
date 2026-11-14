import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BT Metal บีทีเมทัล | รับรีโนเวทบ้าน บันไดวน กันสาด ประตูอัตโนมัติ",
    template: "%s | BT Metal บีทีเมทัล",
  },
  description:
    "BT Metal (บีทีเมทัล) รับรีโนเวทบ้าน ต่อเติม งานเหล็ก บันไดวน กันสาด และประตูอัตโนมัติ งานคุณภาพ ประเมินราคาฟรี",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className={`${prompt.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
