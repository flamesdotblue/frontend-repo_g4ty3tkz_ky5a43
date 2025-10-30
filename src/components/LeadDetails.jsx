import { Phone, Mail, Building2, Tag, Calendar, MapPin, Link as LinkIcon } from "lucide-react";

function DetailRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-2 text-sm text-zinc-800">
      <Icon className="h-4 w-4 text-zinc-400" />
      <span className="truncate">{value}</span>
    </div>
  );
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-zinc-500">{label}</span>
      {href ? (
        <a href={href} className="truncate text-right text-sm text-zinc-900 underline-offset-2 hover:underline">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}

export default function LeadDetails() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-1">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-sm font-medium text-zinc-900">Contact</h3>
            <div className="space-y-3">
              <DetailRow icon={Mail} label="Email" value="ava.thompson@northco.com" href="mailto:ava.thompson@northco.com" />
              <DetailRow icon={Phone} label="Phone" value="(415) 555-0183" href="tel:+14155550183" />
              <DetailRow icon={Building2} label="Company" value="North & Co." />
              <DetailRow icon={MapPin} label="Location" value="San Francisco, CA" />
              <DetailRow icon={Calendar} label="Created" value="May 10, 2025" />
              <DetailRow icon={LinkIcon} label="Website" value="northco.example" href="#" />
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-sm font-medium text-zinc-900">Tags</h3>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-700">
                <Tag className="mr-1 h-3.5 w-3.5" /> Priority
              </span>
              <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-700">
                <Tag className="mr-1 h-3.5 w-3.5" /> Enterprise
              </span>
              <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-700">
                <Tag className="mr-1 h-3.5 w-3.5" /> West Coast
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-zinc-900">Notes</h3>
              <button className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-50">Add note</button>
            </div>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4 text-sm text-zinc-700">
                Discussed current tooling, key pain points around inventory reconciliation. Interested in a pilot after Q2 budget review.
              </div>
              <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4 text-sm text-zinc-700">
                Follow-up scheduled with procurement for pricing breakdown and security documents.
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-zinc-900">Attachments</h3>
              <button className="rounded-lg border border-dashed border-zinc-300 bg-white px-3 py-1.5 text-xs font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-50">Upload</button>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              <li className="flex items-center justify-between rounded-lg border border-zinc-100 bg-zinc-50 p-3"><span>Proposal-v2.pdf</span><span className="text-xs text-zinc-500">1.2 MB</span></li>
              <li className="flex items-center justify-between rounded-lg border border-zinc-100 bg-zinc-50 p-3"><span>Security-Checklist.xlsx</span><span className="text-xs text-zinc-500">340 KB</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
