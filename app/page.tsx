import Doctor from "./components/Doctor";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Navbar from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import VideoOffer from "./components/VideoOffer";

export default function Home() {
  return (
    <main className="bg-[#fff7fc]">
      <Navbar />
      <Hero />
      <Problem />
      <VideoOffer />
      <Doctor />
      <FinalCTA />
      <Footer />
    </main>
  );
}
