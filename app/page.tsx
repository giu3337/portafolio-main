"use client";

import { navItems } from "@/data";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

export const dynamic = "force-dynamic";

const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), { ssr: false });
const HeroVideoSection = dynamic(() => import("@/components/ui/HeroVideoSection"), { ssr: false });
const ApproachVideoSection = dynamic(() => import("@/components/ui/ApproachVideoSection"), { ssr: false });

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <HeroVideoSection />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <ApproachVideoSection />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
