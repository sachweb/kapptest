import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Footer from "@/components/Common/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
// import Header from "@/components/Common/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'KavachApp',
  description: 'Kavach app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}){
  return (
    <html lang="en">
        <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
