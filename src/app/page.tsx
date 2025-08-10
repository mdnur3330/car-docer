import About from "@/component/About";
import Hero from "@/component/Hero";
import InfoBar from "@/component/Infobar";
import PopulerProduct from "@/component/PopulerProduct";
import Services from "@/component/Services";
import Team from "@/component/Team";
import WhyChoose from "@/component/WhyChoose";


export default function Home() {
  return (
  <div>
    <Hero />
    <About />
    <Services />
    <InfoBar />
    <WhyChoose />
    <PopulerProduct />
    <Team />
  </div>
  );
}
