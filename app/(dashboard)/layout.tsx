import { redirect } from "next/navigation";
// import { getServerSession } from "next-auth";
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 🔑 1. Check auth server-side
  // const session = await getServerSession(); // Replace with your auth logic

  // if (!session) {
  //   // ❌ Not logged in → redirect to login
  //   redirect("/login");
  // }
  return (
    <div className="dashboard-layout">
      {/* Add dashboard navigation, header, etc. */}
      {children}
    </div>
  );
}
