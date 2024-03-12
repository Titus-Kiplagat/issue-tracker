import { Container, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./NavBar";
import AuthProvider from "./auth/Provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <AuthProvider>
          <Theme appearance="light" accentColor="purple" radius="large">
            <Container>
              <NavBar />
              <main className="p-5">{children}</main>
            </Container>
          </Theme>
        </AuthProvider>
      </body>
    </html>
  );
}
