import Grid from "@/components/grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floting-nav";
import { RecentProject } from "@/components/recentProject";
import { navItems } from "@/data";
import { Clients } from "@/components/clients";
import { Experience } from "@/components/experience";
import { Approach } from "@/components/approach";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className=" relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        {/* <Clients /> */}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
