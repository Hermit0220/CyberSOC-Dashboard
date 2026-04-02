"use client";

import { useState } from "react";
import Link from "next/link";
import { Shield, UserPlus, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/login");
  };

  const getStrengthScore = (p: string) => {
    if (!p) return 0;
    let score = 0;
    if (p.length > 8) score += 25;
    if (/[A-Z]/.test(p)) score += 25;
    if (/[0-9]/.test(p)) score += 25;
    if (/[^a-zA-Z0-9]/.test(p)) score += 25;
    return score;
  };

  const score = getStrengthScore(password);
  
  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center p-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
        <Shield className="w-5 h-5 text-neon-cyan" />
        <span className="font-bold tracking-wider text-glow">CyberSOC</span>
      </Link>

      <div className="w-full max-w-md glass-panel p-8 rounded-xl relative z-10 border border-[#1e293b]">
        <div className="text-center mb-8">
          <div className="mx-auto w-12 h-12 bg-neon-purple/10 rounded-full flex items-center justify-center mb-4">
            <UserPlus className="w-6 h-6 text-neon-purple" />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-wide">Request Access</h2>
          <p className="text-gray-400 mt-2 text-sm">Register for SOC clearance</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">First Name</label>
              <input type="text" className="w-full bg-[#0a0f1a] border border-[#1e293b] rounded focus:outline-none focus:border-neon-purple px-3 py-2 text-white text-sm" required />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Last Name</label>
              <input type="text" className="w-full bg-[#0a0f1a] border border-[#1e293b] rounded focus:outline-none focus:border-neon-purple px-3 py-2 text-white text-sm" required />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Email Address</label>
            <input type="email" className="w-full bg-[#0a0f1a] border border-[#1e293b] rounded focus:outline-none focus:border-neon-purple px-3 py-2 text-white text-sm" required />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Passphrase</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#0a0f1a] border border-[#1e293b] rounded focus:outline-none focus:border-neon-purple px-3 py-2 text-white text-sm mb-2"
              required 
            />
            {password && (
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] text-gray-500">
                  <span>Strength</span>
                  <span>{score}%</span>
                </div>
                <div className="w-full h-1 bg-gray-800 rounded overflow-hidden">
                  <div className={`h-full transition-all ${score < 50 ? 'bg-alert-red' : score < 75 ? 'bg-alert-amber' : 'bg-emerald-500'}`} style={{ width: `${score}%` }}></div>
                </div>
              </div>
            )}
          </div>

          <button type="submit" className="w-full bg-neon-purple/20 text-neon-purple border border-neon-purple hover:bg-neon-purple hover:text-white font-bold py-2.5 rounded tracking-widest transition-all mt-6 text-sm">
            SUBMIT REQUEST
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Already cleared? <Link href="/login" className="text-neon-purple hover:underline hover:text-white transition-colors">Login here</Link>
        </div>
      </div>
    </div>
  );
}
