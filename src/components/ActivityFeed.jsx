import { Clock, MessageSquare, FileText, Plus, Filter } from "lucide-react";

const activities = [
  {
    type: "note",
    icon: FileText,
    title: "Proposal shared",
    time: "Today, 10:24 AM",
    desc: "Sent updated pricing proposal and feature list for phase 1.",
  },
  {
    type: "message",
    icon: MessageSquare,
    title: "Call completed",
    time: "Yesterday, 3:05 PM",
    desc: "30 min discovery. Pain points: reconciliation & reporting latency.",
  },
  {
    type: "status",
    icon: Clock,
    title: "Stage moved to Discovery",
    time: "Mon, 9:41 AM",
    desc: "Progressed from New → Discovery after initial qualification.",
  },
];

export default function ActivityFeed() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-zinc-200 p-4 sm:p-6">
          <div>
            <h3 className="text-sm font-medium text-zinc-900">Activity</h3>
            <p className="mt-1 text-xs text-zinc-500">Timeline of calls, emails, notes and stage changes</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-50">
              <Plus className="h-4 w-4" />
              Add activity
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-50">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>
        </div>

        <ol className="divide-y divide-zinc-200">
          {activities.map((item, idx) => (
            <li key={idx} className="p-4 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
                  <item.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-medium text-zinc-900">{item.title}</p>
                    <span className="text-xs text-zinc-500">{item.time}</span>
                  </div>
                  <p className="mt-1 text-sm text-zinc-700">{item.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
