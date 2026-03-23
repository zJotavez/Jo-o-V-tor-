import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";
import GlobalBackground from "./GlobalBackground";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative bg-[#0B0B0F]">
      <GlobalBackground />
      <Navbar />

      <main className="flex-grow relative z-10">
        <Outlet />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
      <FloatingButtons />
    </div>
  );
}
