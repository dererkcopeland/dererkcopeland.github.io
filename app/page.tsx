"use client";

import { navItems } from "@/data";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Education from "@/components/Education";

const Home = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = searchParams.get("hash"); // Get the hash from the URL
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        // Scroll to the element, taking into account the nav's height
        const navHeight = document.querySelector("nav")?.clientHeight || 0;
        const offsetTop = element.offsetTop - navHeight - 10;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
        // Clean the url
        window.history.replaceState({}, document.title, window.location.pathname);

      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]); // Run when the pathname changes (e.g., on navigation)

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
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
  );
};

export default Home;
