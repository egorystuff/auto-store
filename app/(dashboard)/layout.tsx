import { Header } from "@/components/shared";

export const metadata = {
  title: "Auto-Store",
  description: "Generated by create next app",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='min-h-screen'>
      <Header search={false} />

      {children}
    </main>
  );
}
