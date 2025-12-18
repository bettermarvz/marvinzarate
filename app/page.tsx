
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import WorkSection from "./components/WorkSection";

export default function Home() {
  return (
    <>
    <div className="flex flex-col">
    <HeroSection />
    <AboutSection />
    <WorkSection/>
    <Footer/>
    </div>
    </>
  );
}
