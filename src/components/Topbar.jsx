import { Plus, Search, Bell, Settings, User } from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-white font-semibold">LM</div>
            <span className="hidden text-sm font-medium text-zinc-700 sm:inline">Lead Manager</span>
          </div>

          <div className="hidden flex-1 items-center justify-center sm:flex">
            <div className="relative w-full max-w-xl">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <input
                placeholder="Search leads, companies, notes..."
                className="w-full rounded-lg border border-zinc-200 bg-white py-2 pl-10 pr-4 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm outline-none transition focus:border-zinc-300 focus:ring-2 focus:ring-zinc-100"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800">
              <Plus className="h-4 w-4" />
              New Lead
            </button>
            <button className="rounded-lg p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-700">
              <Bell className="h-5 w-5" />
            </button>
            <button className="rounded-lg p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-700">
              <Settings className="h-5 w-5" />
            </button>
            <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300 text-zinc-700">
              <User className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
