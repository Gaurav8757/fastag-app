// app/(dashboard)/layout.tsx

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <main className="flex-1 bg-gray-100 overflow-auto">
        {children}
      </main>
    </div>
  );
}
