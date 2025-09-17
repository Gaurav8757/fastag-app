// /app/(admin)/layout.tsx
import Sidebar from "@/components/dashboard/sidebar";
import TopNav from "@/components/dashboard/top-nav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
        <div className="flex h-screen">
          <Sidebar />
          <div className="w-full flex flex-col">
            <header className="h-16 border-b border-gray-200 dark:border-[#1F1F23]">
              <TopNav />
            </header>
            <main className="flex-1 overflow-auto p-6 bg-white dark:bg-[#0F0F12]">
              {children}
            </main>
          </div>
        </div>

  );
}
