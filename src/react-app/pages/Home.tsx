import Hero from '@/react-app/components/Hero';
import MemoryGallery from '@/react-app/components/MemoryGallery';
import LoveLetter from '@/react-app/components/LoveLetter';
import Footer from '@/react-app/components/Footer';

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
