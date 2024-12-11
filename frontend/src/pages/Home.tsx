import Features from "../components/home-page/Features";
import Hero from "../components/home-page/Hero";
import Stats from "../components/home-page/Stats";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <Stats />
    </div>
  );
}
