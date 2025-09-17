import { redirect } from "next/navigation";
// import { getServerSession } from "next-auth";
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="dashboard-layout">
      {/* Add dashboard navigation, header, etc. */}
      {children}
    </div>
  );
}
