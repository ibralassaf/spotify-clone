import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="">
      <main className="h-screen overflow-hidden bg-black">
        <Sidebar />
        {/* Center */}
      </main>

      <div>{/* Player */}</div>
    </div>
  );
}
