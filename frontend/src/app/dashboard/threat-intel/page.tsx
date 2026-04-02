import { GlobeLock, Calendar, AlertCircle } from "lucide-react";

export default function ThreatIntel() {
  const mockThreats = [
    {
      id: 1,
      title: "CVE-2024-3400: Palo Alto Networks OS Command Injection",
      category: "Zero-Day Vulnerability",
      severity: "Critical",
      date: "2024-04-12",
      description: "A command injection vulnerability in the GlobalProtect feature of Palo Alto Networks PAN-OS software for specific PAN-OS versions enables an unauthenticated attacker to execute arbitrary code with root privileges on the firewall."
    },
    {
      id: 2,
      title: "New Ransomware Variant: 'DarkAngels' targets ESXi Servers",
      category: "Ransomware",
      severity: "High",
      date: "2024-04-10",
      description: "DarkAngels ransomware group has updated their Linux variant to specifically target VMware ESXi virtualization servers, deploying automated scripts to pause virtual machines before encrypting the datastores."
    },
    {
      id: 3,
      title: "Widespread Phishing Campaign using AI-Generated Audio",
      category: "Phishing",
      severity: "Medium",
      date: "2024-04-08",
      description: "Security researchers have identified a coordinated phishing campaign attempting to bypass voice authentication mechanisms in financial institutions using deepfake audio recordings gathered from social media."
    },
    {
      id: 4,
      title: "Midnight Blizzard ongoing attacks against Microsoft tenants",
      category: "APT Activity",
      severity: "High",
      date: "2024-03-25",
      description: "The Russian state-sponsored actor known as Midnight Blizzard (Nobelium) is attempting to use information exfiltrated from Microsoft's corporate email systems to gain unauthorized access to source code repositories."
    }
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-100 tracking-wide text-glow flex items-center gap-2">
          <GlobeLock className="text-neon-purple" />
          Global Threat Intelligence
        </h1>
        <p className="text-gray-400 mt-2">Latest security advisories, vulnerability disclosures, and global threat campaigns.</p>
      </div>

      <div className="grid gap-6">
        {mockThreats.map((threat) => (
          <div key={threat.id} className="glass-panel p-6 rounded-xl border border-[#1e293b] hover:border-neon-purple/30 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-100 mb-1">{threat.title}</h3>
                <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {threat.date}</span>
                  <span className="px-2 py-0.5 rounded bg-brand-panel border border-[#1e293b]">{threat.category}</span>
                </div>
              </div>
              
              <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded ${
                threat.severity === 'Critical' ? 'bg-alert-red text-white' :
                threat.severity === 'High' ? 'bg-alert-amber/20 text-alert-amber border border-alert-amber' :
                'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan'
              }`}>
                {threat.severity}
              </span>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed border-l-2 pl-4 border-gray-700">
              {threat.description}
            </p>

            <div className="mt-4 flex gap-3">
              <button className="text-xs font-medium text-neon-purple hover:text-white transition-colors flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> Read Advisory
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
