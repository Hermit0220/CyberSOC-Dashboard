"use client";

import { useState } from "react";
import { Users, Settings, Activity, ShieldBan, MonitorDot, AlertTriangle } from "lucide-react";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("users");

  const mockUsers = [
    { id: 1, name: "Admin Alpha", email: "alpha@cybersoc.local", role: "Administrator", status: "Active", lastLogin: "2 mins ago" },
    { id: 2, name: "Analyst Beta", email: "beta@cybersoc.local", role: "Security Analyst", status: "Active", lastLogin: "1 hour ago" },
    { id: 3, name: "Guest User", email: "guest@external.com", role: "Guest User", status: "Suspended", lastLogin: "4 days ago" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-100 tracking-wide text-glow flex items-center gap-2">
          <Settings className="text-gray-400" />
          System Administration
        </h1>
        <p className="text-gray-400 mt-2">Manage system parameters, user access, and global platform analytics.</p>
      </div>

      <div className="flex border-b border-[#1e293b] space-x-8">
        <button 
          onClick={() => setActiveTab("users")}
          className={`pb-3 font-medium text-sm transition-colors relative ${activeTab === 'users' ? 'text-neon-cyan' : 'text-gray-500 hover:text-gray-300'}`}
        >
          User Management
          {activeTab === 'users' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-cyan neon-border"></span>}
        </button>
        <button 
          onClick={() => setActiveTab("analytics")}
          className={`pb-3 font-medium text-sm transition-colors relative ${activeTab === 'analytics' ? 'text-neon-cyan' : 'text-gray-500 hover:text-gray-300'}`}
        >
          System Analytics
          {activeTab === 'analytics' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-cyan neon-border"></span>}
        </button>
      </div>

      {activeTab === "users" && (
        <div className="glass-panel rounded-xl overflow-hidden border border-[#1e293b]">
          <div className="p-4 border-b border-[#1e293b] flex justify-between items-center bg-[#0a0f1a]/50">
            <h3 className="font-semibold text-gray-200">Registered Personnel</h3>
            <button className="bg-brand-panel border border-[#1e293b] text-xs font-medium px-3 py-1.5 rounded hover:text-neon-cyan transition-colors">
              Export Audit Log
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-400">
              <thead className="bg-[#111827] text-gray-500 uppercase text-xs">
                <tr>
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Last Active</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e293b]">
                {mockUsers.map(user => (
                  <tr key={user.id} className="hover:bg-[#1e293b]/30 transition-colors">
                    <div className="px-6 py-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-300 border border-gray-700">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-gray-200 font-medium">{user.name}</div>
                        <div className="text-xs text-gray-500">{user.email}</div>
                      </div>
                    </div>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider ${
                        user.role === 'Administrator' ? 'bg-neon-purple/10 text-neon-purple border border-neon-purple/30' :
                        user.role === 'Security Analyst' ? 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30' :
                        'bg-gray-800 text-gray-400 border border-gray-700'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                         <span className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-alert-red'}`}></span>
                         {user.status}
                      </div>
                    </td>
                    <td className="px-6 py-4">{user.lastLogin}</td>
                    <td className="px-6 py-4 text-right space-x-3">
                       <button className="text-neon-cyan hover:text-white transition-colors text-xs font-medium">Edit</button>
                       <button className="text-alert-red hover:text-white transition-colors text-xs font-medium flex items-center inline-flex gap-1">
                         <ShieldBan className="w-3 h-3" /> Suspend
                       </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "analytics" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in zoom-in duration-300">
          <div className="glass-panel p-6 rounded-xl border border-[#1e293b] flex gap-4">
            <div className="p-3 bg-neon-purple/10 rounded-lg text-neon-purple h-max">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Active Agents</p>
              <p className="text-3xl font-bold text-gray-100">24</p>
            </div>
          </div>
          
          <div className="glass-panel p-6 rounded-xl border border-[#1e293b] flex gap-4">
            <div className="p-3 bg-alert-amber/10 rounded-lg text-alert-amber h-max">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Threats Mitigated (24h)</p>
              <p className="text-3xl font-bold text-gray-100">8,942</p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-xl border border-[#1e293b] flex gap-4">
            <div className="p-3 bg-neon-cyan/10 rounded-lg text-neon-cyan h-max">
              <MonitorDot className="w-6 h-6" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">System Uptime</p>
              <p className="text-3xl font-bold text-gray-100">99.98%</p>
            </div>
          </div>
          
          <div className="glass-panel col-span-1 lg:col-span-3 min-h-[300px] rounded-xl border border-[#1e293b] p-6 flex flex-col">
            <h3 className="font-semibold text-gray-200 mb-4 border-b border-[#1e293b] pb-2">Platform Utilization (7 Days)</h3>
            <div className="flex-1 border border-dashed border-gray-700/50 rounded flex items-center justify-center text-gray-500">
              [Activity Chart Placeholder]
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
