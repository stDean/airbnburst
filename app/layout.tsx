import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ClientOnly, Navbar, RegisterModal } from "./components";
import ToasterProvider from "./providers/ToasterProvider";

export const metadata: Metadata = {
  title: "AirBnB",
  description: "The airbnb clone app with next js.",
};

const font = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>

        {children}
      </body>
    </html>
  );
}
