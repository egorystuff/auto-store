import type { Metadata } from "next";
import { Header } from "@/components/shared";

export const metadata: Metadata = {
  title: "Auto-Store",
  description: "Auto-Store - лучший магазин автомобилей",
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className='min-h-screen'>
        {modal}
        {children}
      </main>
    </>
  );
}
