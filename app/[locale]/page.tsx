import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import KinkiMeaning from "@/components/KinkiMeaning";
import Story from "@/components/Story";
import Origin from "@/components/Origin";
import Coffee from "@/components/Coffee";
import InstagramFeed from "@/components/InstagramFeed";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FBF8F3]">
      <Navbar />
      <Hero />
      <KinkiMeaning />
      <Story />
      <Origin />
      <Coffee />
      <InstagramFeed />
      <Contact />
      <Footer />
    </main>
  );
}
