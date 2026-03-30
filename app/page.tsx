import Doctor from "./components/Doctor";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Navbar from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Quiz from "./components/Quiz";
import VideoOffer from "./components/VideoOffer";

export default function Home() {
  return (
    <main className="bg-[#070D1F]">
      <Navbar />
      <Hero />
      <Problem />
      <Quiz />
      <VideoOffer />
      <Doctor />
      <FinalCTA />
      <Footer />
    </main>
  );
}
