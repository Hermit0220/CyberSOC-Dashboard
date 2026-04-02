"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  ShieldAlert, 
  Activity, 
  LockKeyhole, 
  Settings, 
  Users,
  TerminalSquare
} from "lucide-react";
import clsx from "clsx";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Threat Intel", href: "/threat-intel", icon: ShieldAlert },
  { name: "Network Monitor", href: "/network", icon: Activity },
  { name: "Password Analyzer", href: "/password-analysis", icon: LockKeyhole },
  { name: "Malware Scanner", href: "/malware", icon: TerminalSquare },
];

const secondaryNav = [
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Admin Panel", href: "/admin", icon: Users },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex bg-brand-panel flex-col w-64 border-r border-[#1e293b] h-screen text-gray-400">
      <div className="flex items-center h-16 px-6 font-bold text-neon-cyan text-xl tracking-wider">
        <ShieldAlert className="w-6 h-6 mr-3" />
        CyberSOC
      </div>
      
      <div className="flex-1 py-6 px-4 space-y-8 overflow-y-auto">
        <nav className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-neon-cyan/10 text-neon-cyan neon-border"
                    : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                )}
              >
                <item.icon
                  className={clsx(
                    "flex-shrink-0 -ml-1 mr-3 h-5 w-5",
                    isActive ? "text-neon-cyan" : "text-gray-500 group-hover:text-gray-300"
                  )}
                />
                <span className="truncate">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div>
          <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            System
          </h3>
          <nav className="mt-2 space-y-1">
            {secondaryNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-400 hover:bg-gray-800 hover:text-gray-200 transition-colors"
              >
                <item.icon className="flex-shrink-0 -ml-1 mr-3 h-5 w-5 text-gray-500 group-hover:text-gray-300" />
                <span className="truncate">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
      
      <div className="p-4 border-t border-[#1e293b]">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan text-xs font-bold ring-1 ring-neon-cyan/50">
            SA
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">System Admin</p>
            <p className="text-xs text-gray-500">Security Analyst</p>
          </div>
        </div>
      </div>
    </div>
  );
}
