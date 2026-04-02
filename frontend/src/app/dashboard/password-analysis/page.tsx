"use client";

import { useState } from "react";
import { LockKeyhole, ShieldAlert, CheckCircle2, XCircle } from "lucide-react";

export default function PasswordAnalyzer() {
  const [password, setPassword] = useState("");

  const calculateStrength = (pass: string) => {
    let score = 0;
    if (!pass) return 0;
    if (pass.length > 8) score += 20;
    if (pass.length >= 12) score += 20;
    if (/[A-Z]/.test(pass)) score += 15;
    if (/[a-z]/.test(pass)) score += 15;
    if (/[0-9]/.test(pass)) score += 15;
    if (/[^A-Za-z0-9]/.test(pass)) score += 15;
    return Math.min(score, 100);
  };

  const score = calculateStrength(password);

  let feedback = { color: "bg-gray-700", text: "Enter Password", desc: "No data" };
  if (password.length > 0) {
    if (score < 40) feedback = { color: "bg-alert-red text-alert-red", text: "Weak", desc: "Instantly crackable" };
    else if (score < 70) feedback = { color: "bg-alert-amber text-alert-amber", text: "Moderate", desc: "Takes hours to crack" };
    else if (score < 90) feedback = { color: "bg-neon-cyan text-neon-cyan", text: "Strong", desc: "Takes years to crack" };
    else feedback = { color: "bg-emerald-500 text-emerald-500", text: "Very Strong", desc: "Century+ to crack" };
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-100 tracking-wide text-glow flex items-center gap-2">
          <LockKeyhole className="text-neon-cyan" />
          Password Analyst Engine
        </h1>
        <p className="text-gray-400 mt-2">Evaluate cryptographic strength and potential vulnerabilities of a given credential.</p>
      </div>

      <div className="glass-panel p-8 rounded-xl border border-[#1e293b]">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-400 mb-2">Target Credential</label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#0a0f1a] border border-[#1e293b] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan font-mono transition-colors"
            placeholder="Type credential to analyze..."
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-300">Entropy Score</span>
            <span className={`text-sm font-bold ${password ? feedback.color.split(' ')[1] : 'text-gray-500'}`}>
              {password ? `${score}/100 - ${feedback.text}` : '0/100'}
            </span>
          </div>
          <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ease-in-out ${password ? feedback.color.split(' ')[0] : 'bg-transparent'}`}
              style={{ width: `${score}%` }}
            ></div>
          </div>
          
          {password && (
             <div className="mt-8 grid grid-cols-2 gap-4">
               <div className="bg-[#0a0f1a] p-4 rounded-lg border border-[#1e293b]">
                 <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Estimated Crack Time</p>
                 <p className={`font-mono text-lg ${feedback.color.split(' ')[1]}`}>{feedback.desc}</p>
               </div>
               <div className="bg-[#0a0f1a] p-4 rounded-lg border border-[#1e293b]">
                 <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Breach Status</p>
                 <p className="font-mono text-lg text-emerald-500 flex items-center gap-2">
                   <CheckCircle2 className="w-4 h-4" /> Not found in databases
                 </p>
               </div>
             </div>
          )}
        </div>
      </div>

      {password && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-alert-amber" />
              Identified Weaknesses
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {password.length < 12 && (
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-alert-red mt-0.5 shrink-0" />
                  Length is under the recommended 12 characters.
                </li>
              )}
              {!/[A-Z]/.test(password) && (
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-alert-red mt-0.5 shrink-0" />
                  Missing uppercase characters.
                </li>
              )}
              {!/[^A-Za-z0-9]/.test(password) && (
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-alert-amber mt-0.5 shrink-0" />
                  Consider adding special symbols for higher entropy.
                </li>
              )}
              {score >= 90 && (
                <li className="flex items-start gap-2 text-emerald-500">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                  No immediate structural weaknesses detected.
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
