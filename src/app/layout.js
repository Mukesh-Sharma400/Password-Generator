import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Password Generator",
  description:
    "The Password Generator App is a simple web application built using Next.js, Material UI, and Styled Components. It allows users to generate secure and random passwords with various customizable options. This app provides a user-friendly interface and ensures the generation of strong passwords for improved online security.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
