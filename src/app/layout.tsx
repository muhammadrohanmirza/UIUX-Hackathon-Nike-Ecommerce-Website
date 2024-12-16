import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Mainheader from "./component/mainheader";
import Footer from "./component/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nike",
  description: "Nike UI Ecommers Website Design",
  icons:{
    icon:{ url:"/logo/logo2.png", type:"image/png" }
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
<Mainheader/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
