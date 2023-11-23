import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ClientOnly, Navbar, RegisterModal, RentModal } from "./components";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/LoginModal.component";
import getCurrentUser from "./actions/getCurrentUser";

export const metadata: Metadata = {
  title: "AirBnB",
  description: "The airbnb clone app with next js.",
};

const font = Nunito({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>

        {children}
      </body>
    </html>
  );
}
