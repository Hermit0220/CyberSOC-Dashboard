"use client";

import { 
  ShieldAlert, 
  Activity, 
  LockKeyhole, 
  TerminalSquare
} from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-100 tracking-wide text-glow">System Dashboard</h1>
        <div className="bg-brand-panel border border-[#1e293b] px-4 py-2 rounded-lg flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-sm font-medium text-emerald-400">System Secure</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-panel p-6 rounded-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <ShieldAlert className="w-16 h-16 text-neon-cyan" />
          </div>
          <p className="text-gray-400 text-sm font-medium mb-1">Global Security Score</p>
          <p className="text-4xl font-bold text-neon-cyan">92/100</p>
          <div className="w-full bg-gray-800 h-1.5 mt-4 rounded-full overflow-hidden">
            <div className="bg-neon-cyan h-full w-[92%]"></div>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
             <Activity className="w-16 h-16 text-alert-amber" />
          </div>
          <p className="text-gray-400 text-sm font-medium mb-1">Active Threats</p>
          <p className="text-4xl font-bold text-alert-amber">3</p>
          <p className="text-xs text-gray-500 mt-4">+1 from last hour</p>
        </div>

        <div className="glass-panel p-6 rounded-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
             <LockKeyhole className="w-16 h-16 text-neon-purple" />
          </div>
          <p className="text-gray-400 text-sm font-medium mb-1">Failed Logins</p>
          <p className="text-4xl font-bold text-neon-purple">124</p>
          <p className="text-xs text-gray-500 mt-4">Last 24 hours</p>
        </div>

        <div className="glass-panel p-6 rounded-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
             <TerminalSquare className="w-16 h-16 text-emerald-500" />
          </div>
          <p className="text-gray-400 text-sm font-medium mb-1">Files Scanned</p>
          <p className="text-4xl font-bold text-emerald-500">12.5k</p>
          <p className="text-xs text-emerald-500/50 mt-4">All clean</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="glass-panel rounded-xl col-span-2 p-6 min-h-[400px]">
          <h2 className="text-lg font-semibold text-gray-200 mb-4 border-b border-[#1e293b] pb-2">Network Activity</h2>
          <div className="flex items-center justify-center h-64 text-gray-500 border border-dashed border-gray-700/50 rounded-lg">
            Network Chart Placeholder
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-lg font-semibold text-gray-200 mb-4 border-b border-[#1e293b] pb-2">Recent Alerts</h2>
          <div className="space-y-4">
             {[
               { time: "10:24 AM", type: "Multiple Failed Logins", origin: "192.168.1.105", level: "Low" },
               { time: "09:12 AM", type: "Suspicious Port Scan", origin: "45.33.22.11", level: "Medium" },
               { time: "08:05 AM", type: "Malware Signature Detected", origin: "Internal Mail", level: "High" },
             ].map((alert, i) => (
                <div key={i} className="bg-brand-panel/50 p-3 rounded border-l-2 border-alert-red text-sm">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-gray-200">{alert.type}</span>
                    <span className="text-xs text-gray-500">{alert.time}</span>
                  </div>
                  <div className="flex justify-between items-end mt-2">
                    <span className="text-gray-400 text-xs">Origin: {alert.origin}</span>
                    <span className="text-[10px] uppercase tracking-wider bg-alert-red/10 text-alert-red px-2 py-0.5 rounded">
                      {alert.level}
                    </span>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
