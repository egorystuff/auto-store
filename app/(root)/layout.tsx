import { Header } from "@/shared/components/shared";
import type { Metadata } from "next";

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
