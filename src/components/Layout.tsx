import { Outlet } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import { useViewportHeight } from "@/hooks/useViewportHeight";

export function Layout() {
  useViewportHeight();
  useScrollToHash();

  return (
    <div className="flex min-h-[var(--app-height)] w-full max-w-[100vw] flex-col overflow-x-clip">
      <Nav />
      <main className="w-full min-w-0 flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
