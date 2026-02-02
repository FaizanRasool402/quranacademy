import Hero from "@/components/Hero";
import Points from "@/components/Points";
import HomeAbout from "@/components/HomeAbout";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Points />
      <HomeAbout />
      <Services />
      <Testimonials />
    </div>
  );
}
