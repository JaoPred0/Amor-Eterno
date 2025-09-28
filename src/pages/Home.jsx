import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LoveLetter from "../components/LoveLetter";
import MemoryGallery from "../components/MemoryGallery";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <MemoryGallery />
      <LoveLetter />
      <Footer />
    </div>
  );
}
