import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Space } from "@/components/Space";
import { Vibe } from "@/components/Vibe";
import { Visit } from "@/components/Visit";

export function HomePage() {
  return (
    <>
      <Hero />
      <Vibe />
      <Menu />
      <Space />
      <Visit />
    </>
  );
}
