import Link from "next/link";
import { Shield, Lock, Activity, Eye, ArrowRight, ServerCrash } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-neon-cyan/30">
      {/* Navbar */}
      <header className="border-b border-brand-panel/60 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-neon-cyan" />
            <span className="font-bold text-xl tracking-wider text-glow">CyberSOC</span>
          </div>
          <div className="flex gap-4">
            <Link href="/login" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Login
            </Link>
            <Link href="/dashboard" className="px-4 py-2 text-sm font-medium bg-neon-cyan/10 text-neon-cyan neon-border cursor-pointer transition-all hover:bg-neon-cyan/20 rounded">
              Launch Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 py-24 text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-panel border border-[#1e293b] text-sm text-gray-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            System Live & Monitoring
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue text-glow">Threat Intelligence</span> Platform
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Simulate, analyze, and visualize real-world cybersecurity threats in a professional multi-tenant SOC environment designed for modern defense teams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="px-8 py-4 bg-neon-cyan text-background font-bold rounded flex items-center justify-center gap-2 hover:bg-neon-cyan/90 transition-colors">
              Create Account <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/dashboard" className="px-8 py-4 bg-brand-panel border border-[#1e293b] text-gray-200 font-bold rounded flex items-center justify-center gap-2 hover:bg-[#1e293b] transition-colors">
              Explore Demo <Eye className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>

      {/* Features Grid */}
      <section className="py-24 bg-brand-panel/30 border-t border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Comprehensive Defense Toolkit</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to monitor network health, identify vulnerabilities, and analyze malware in one unified interface.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-xl hover:border-neon-cyan/50 transition-colors group">
              <div className="w-12 h-12 bg-neon-cyan/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neon-cyan/20 transition-colors">
                <Lock className="w-6 h-6 text-neon-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Password Analyzer</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Advanced entropy calculations, strength metering, and breach database checking for identifying weak organizational credentials.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-xl hover:border-alert-red/50 transition-colors group">
              <div className="w-12 h-12 bg-alert-red/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-alert-red/20 transition-colors">
                <ServerCrash className="w-6 h-6 text-alert-red" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Malware Simulation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Simulate signature matching, heuristic, and behavioral analysis engines on uploaded files or code snippets.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-xl hover:border-neon-purple/50 transition-colors group">
              <div className="w-12 h-12 bg-neon-purple/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neon-purple/20 transition-colors">
                <Activity className="w-6 h-6 text-neon-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Network Visualization</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Real-time attack maps and traffic graphs demonstrating simulated brute force, DDoS, and SQL injection attempts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
