import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Nav } from "@/components/Nav";
import { Vibe } from "@/components/Vibe";
import { Visit } from "@/components/Visit";

export default function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Vibe />
        <Menu />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
