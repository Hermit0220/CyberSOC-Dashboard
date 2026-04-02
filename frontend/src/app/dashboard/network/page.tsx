"use client";

import { Activity, Globe, Server, RadioReceiver } from "lucide-react";

export default function NetworkMonitor() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-100 tracking-wide text-glow flex items-center gap-2">
            <Activity className="text-neon-cyan" />
            Network Traffic Visualization
          </h1>
          <p className="text-gray-400 mt-2">Real-time simulation of incoming connections, requests, and potential attacks.</p>
        </div>
        <div className="bg-[#1e293b]/50 border border-alert-amber/20 px-4 py-2 rounded-lg flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-alert-amber animate-pulse"></span>
          <span className="text-sm font-medium text-alert-amber">Elevated Traffic</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="glass-panel p-6 rounded-xl col-span-3 min-h-[500px] flex flex-col relative overflow-hidden">
          <h3 className="text-lg font-semibold text-gray-200 mb-4 border-b border-[#1e293b] pb-2 flex items-center gap-2 z-10 w-max">
            <Globe className="w-5 h-5 text-neon-blue" />
            Live Attack Map (Simulation)
          </h3>
          
          <div className="flex-1 border border-[#1e293b] bg-[#0a0f1a] rounded-lg mt-2 relative overflow-hidden flex items-center justify-center">
            {/* Mock Map Background Visual */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-blue to-transparent"></div>
            
            {/* Map lines overlay simulation */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg className="w-full h-full opacity-30" preserveAspectRatio="none">
                 <path d="M 200,100 C 400,200 600,100 800,250" stroke="var(--color-neon-cyan)" fill="transparent" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse" />
                 <path d="M 100,400 C 400,300 500,400 900,150" stroke="var(--color-alert-red)" fill="transparent" strokeWidth="2" strokeDasharray="10,5" className="animate-pulse" />
                 <path d="M 50,50 C 300,300 700,500 950,450" stroke="var(--color-neon-purple)" fill="transparent" strokeWidth="1" />
              </svg>
            </div>
            
            <Server className="w-16 h-16 text-neon-cyan absolute z-10 animate-pulse text-glow" />
            <span className="text-xs text-neon-cyan absolute -bottom-6 font-mono z-10">CORE_SERVER_01</span>
            
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-alert-red rounded-full animate-ping"></div>
            <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-neon-purple rounded-full animate-ping delay-150"></div>
            <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-alert-amber rounded-full animate-ping delay-300"></div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="glass-panel p-6 rounded-xl flex-1">
            <h3 className="text-md font-semibold text-gray-200 mb-4 flex items-center gap-2 border-b border-[#1e293b] pb-2">
              <RadioReceiver className="w-4 h-4 text-neon-purple" />
              Traffic Origins
            </h3>
            <ul className="space-y-4 text-sm font-mono mt-4">
              <li className="flex justify-between items-center text-gray-300">
                <span>Russia (RU)</span>
                <span className="text-alert-red">42.5%</span>
              </li>
              <li className="flex justify-between items-center text-gray-300">
                <span>China (CN)</span>
                <span className="text-alert-amber">28.1%</span>
              </li>
              <li className="flex justify-between items-center text-gray-300">
                <span>United States (US)</span>
                <span className="text-neon-cyan">15.2%</span>
              </li>
              <li className="flex justify-between items-center text-gray-300">
                <span>Unknown (Tor)</span>
                <span className="text-gray-500">14.2%</span>
              </li>
            </ul>
          </div>
          
          <div className="glass-panel p-6 rounded-xl flex-1">
             <h3 className="text-md font-semibold text-gray-200 mb-2 border-b border-[#1e293b] pb-2">Top Attack Types</h3>
             <ul className="space-y-3 mt-4">
               <div>
                 <div className="flex justify-between text-xs mb-1 text-gray-400"><span>DDoS</span><span>12,402 reqs/s</span></div>
                 <div className="w-full bg-gray-800 h-1.5 rounded"><div className="bg-alert-red h-full w-[85%] rounded"></div></div>
               </div>
               <div>
                 <div className="flex justify-between text-xs mb-1 text-gray-400"><span>SQLi Attempts</span><span>342 reqs/m</span></div>
                 <div className="w-full bg-gray-800 h-1.5 rounded"><div className="bg-alert-amber h-full w-[45%] rounded"></div></div>
               </div>
               <div>
                 <div className="flex justify-between text-xs mb-1 text-gray-400"><span>Port Scans</span><span>8,992 reqs/h</span></div>
                 <div className="w-full bg-gray-800 h-1.5 rounded"><div className="bg-neon-purple h-full w-[65%] rounded"></div></div>
               </div>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
