// /app/(admin)/layout.tsx
import Sidebar from "@/components/dashboard/sidebar";
import TopNav from "@/components/dashboard/top-nav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-slate-50/60 dark:bg-[#0A0A0C]">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 shrink-0 bg-background/95 backdrop-blur-md border-b border-border/70 z-10">
          <TopNav />
        </header>
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
