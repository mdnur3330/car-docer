import About from "@/component/About";
import Hero from "@/component/Hero";
import InfoBar from "@/component/Infobar";
import PopulerProduct from "@/component/PopulerProduct";
import Team from "@/component/Team";
import WhyChoose from "@/component/WhyChoose";
import Services from "./services/page";


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
