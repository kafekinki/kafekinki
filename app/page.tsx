import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Origin from "@/components/Origin";
import Coffee from "@/components/Coffee";
import Process from "@/components/Process";
import InstagramFeed from "@/components/InstagramFeed";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FBF8F3]">
      <Navbar />
      <Hero />
      <Story />
      <Origin />
      <Coffee />
      <Process />
      <InstagramFeed />
      <Contact />
      <Footer />
    </main>
  );
}
