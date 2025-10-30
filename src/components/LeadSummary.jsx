import { CheckCircle2, Edit, MoreVertical, Star, ArrowUpRight } from "lucide-react";

export default function LeadSummary() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        <div className="relative bg-gradient-to-br from-zinc-50 to-white p-6 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-start gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl ring-1 ring-zinc-200">
                <img
                  alt="Lead avatar"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=320&auto=format&fit=crop"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-semibold text-zinc-900 sm:text-2xl">Ava Thompson</h1>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Qualified
                  </span>
                </div>
                <p className="mt-1 text-sm text-zinc-600">Senior Operations Manager • Retail</p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                  <span className="inline-flex items-center gap-1 rounded-md bg-zinc-100 px-2 py-1">Lead Score: <strong className="ml-1 text-zinc-800">82</strong></span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-zinc-100 px-2 py-1">Stage: <strong className="ml-1 text-zinc-800">Discovery</strong></span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-zinc-100 px-2 py-1">Last Activity: <strong className="ml-1 text-zinc-800">2d ago</strong></span>
                </div>
              </div>
            </div>

            <div className="flex w-full items-center gap-2 sm:w-auto">
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-50 sm:w-auto">
                <Star className="h-4 w-4" />
                Favorite
              </button>
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-50 sm:w-auto">
                <Edit className="h-4 w-4" />
                Edit
              </button>
              <button className="inline-flex w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white p-2 text-zinc-600 shadow-sm transition hover:bg-zinc-50">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 bg-white p-3 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-500">Engagement</span>
                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
                  +12%
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
              <p className="mt-1 text-lg font-semibold text-zinc-900">High</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-3 shadow-sm">
              <span className="text-xs text-zinc-500">Potential Value</span>
              <p className="mt-1 text-lg font-semibold text-zinc-900">$48,000 ARR</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-3 shadow-sm">
              <span className="text-xs text-zinc-500">Owner</span>
              <p className="mt-1 text-lg font-semibold text-zinc-900">Jordan Lee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
