"use client";

import { useState } from "react";
import Link from "next/link";
import { Shield, ArrowRight, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center p-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
        <Shield className="w-5 h-5 text-neon-cyan" />
        <span className="font-bold tracking-wider text-glow">CyberSOC</span>
      </Link>

      <div className="w-full max-w-md glass-panel p-8 rounded-xl relative z-10 border border-[#1e293b] shadow-2xl shadow-neon-cyan/5">
        <div className="text-center mb-8">
          <div className="mx-auto w-12 h-12 bg-neon-cyan/10 rounded-full flex items-center justify-center mb-4">
            <Lock className="w-6 h-6 text-neon-cyan" />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-wide">Analyst Login</h2>
          <p className="text-gray-400 mt-2 text-sm">Secure access to the monitoring platform</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Agent ID / Email</label>
            <input 
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#0a0f1a] border border-[#1e293b] rounded focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan px-4 py-2.5 text-white transition-colors"
              placeholder="agent@cybersoc.local"
              required
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-400">Passphrase</label>
              <Link href="#" className="text-xs text-neon-cyan hover:underline">Forgot?</Link>
            </div>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#0a0f1a] border border-[#1e293b] rounded focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan px-4 py-2.5 text-white transition-colors"
              placeholder="••••••••••••"
              required
            />
          </div>

          <button type="submit" className="w-full bg-brand-panel border border-[#1e293b] text-white hover:text-neon-cyan hover:border-neon-cyan font-bold py-3 rounded tracking-widest flex items-center justify-center gap-2 transition-all mt-4">
            AUTHENTICATE <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          Unregistered agent? <Link href="/register" className="text-neon-cyan hover:underline hover:text-white transition-colors">Request clearance here</Link>
        </div>
      </div>
    </div>
  );
}
