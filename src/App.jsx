import Topbar from "./components/Topbar";
import LeadSummary from "./components/LeadSummary";
import LeadDetails from "./components/LeadDetails";
import ActivityFeed from "./components/ActivityFeed";

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(9,9,11,0.06),transparent_60%)]">
      <Topbar />
      <main className="pb-10">
        <LeadSummary />
        <LeadDetails />
        <ActivityFeed />
      </main>
      <footer className="mx-auto w-full max-w-7xl px-4 pb-8 pt-4 text-xs text-zinc-500 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Lead Manager — Demo detail view</p>
      </footer>
    </div>
  );
}
