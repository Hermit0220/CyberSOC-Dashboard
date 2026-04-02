import { Sidebar } from "@/components/layout/Sidebar";
import { Topnav } from "@/components/layout/Topnav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <Topnav />
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6 px-8 h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
