import Hero from "../components/hero";
import Features from "../components/features";
import Content from "../components/content";
import Pricing from "../components/pricing";
import Stats from "../components/stats";
import Team from "../components/team";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Content />
      <Pricing />
      <Stats />
      <Team />
    </main>
  );
}
