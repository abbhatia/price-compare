import Hero from "../components/hero";
import Features from "../components/features";
import Content from "../components/content";
import Pricing from "../components/pricing";
import Stats from "../components/stats";
import Team from "../components/team";
import { getMessage } from "@/data/getMessage";

export default function Home({ message }: { message: string }) {
  return (
    <main>
      {message}
      <Hero />
      <Features />
      <Content />
      <Pricing />
      <Stats />
      <Team />
    </main>
  );
}

export async function getServerSideProps() {
  const message = await getMessage();
  return {
    props: {
      message,
    },
  };
}
