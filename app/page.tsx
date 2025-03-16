"use client";
import { navItems } from "@/Data";
import { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
// Dynamically import Grid component with SSR disabled
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
import Footer from "@/components/Footer";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Education from "@/components/Education";

// Helper component for client-only rendering
function ClientOnly({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // or a loading placeholder
  }

  return <>{children}</>;
}


// Create a separate component for the search params logic
function ScrollManager() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const hash = searchParams.get("hash");
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          const navHeight = document.querySelector("nav")?.clientHeight || 0;
          const offsetTop = element.offsetTop - navHeight - 10;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
          window.history.replaceState({}, document.title, window.location.pathname);
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [pathname, searchParams]);

  return null;
}

const Home = () => {
  return (
    <ClientOnly>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <Suspense fallback={null}>
          <ScrollManager />
        </Suspense>
        <nav className="max-w-7xl w-full">
          {/* Wrap FloatingNav in a div to get its height */}
          <FloatingNav navItems={navItems} />
        </nav>
        <div className="max-w-7xl w-full">
          <Hero />
          <Grid />
          <RecentProjects />
          <Education />
          <Footer />
        </div>
      </main>
    </ClientOnly>
  );
};

export default Home;
