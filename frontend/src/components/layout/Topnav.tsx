import { Bell, Search } from "lucide-react";

export function Topnav() {
  return (
    <header className="h-16 flex items-center justify-between px-8 border-b border-[#1e293b] bg-brand-panel/50 backdrop-blur-md sticky top-0 z-10">
      <div className="flex-1 max-w-lg relative text-gray-400">
        <label htmlFor="search-field" className="sr-only">
          Search
        </label>
        <Search className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-500" />
        <input
          id="search-field"
          className="block h-full w-full border-transparent py-2 pl-8 pr-3 bg-transparent text-gray-100 placeholder-gray-500 focus:border-neon-cyan focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
          placeholder="Search threats, IP addresses, users..."
          type="search"
        />
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>System Normal</span>
        </div>
        
        <button type="button" className="text-gray-400 hover:text-gray-300 relative">
          <span className="sr-only">View notifications</span>
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 -mr-1 -mt-1 w-2.5 h-2.5 bg-alert-red rounded-full border border-brand-panel animate-pulse"></span>
        </button>
      </div>
    </header>
  );
}
