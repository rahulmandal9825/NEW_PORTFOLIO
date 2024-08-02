import Aboutus from "@/components/Aboutus";
import Contactme from "@/components/Contactme";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Techstack from "@/components/Techstack";


export default function Home() {
  return (
    <main className="w-full h-full">
      <Header/>
      <Hero/>
      <Techstack/>
      <Aboutus/>
      <Project/>
      <Contactme/>

    </main>
  );
}
