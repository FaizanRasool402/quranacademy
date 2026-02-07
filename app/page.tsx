import Hero from "@/components/Hero";
import Box from "@/components/Box";
import Points from "@/components/Points";
import HomeAbout from "@/components/HomeAbout";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Box />
      <Points />
      <HomeAbout />
      <Services />
      <Testimonials />
    </div>
  );
}