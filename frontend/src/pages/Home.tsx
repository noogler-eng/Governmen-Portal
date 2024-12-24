import Features from "../components/home-page/Features";
import Hero from "../components/home-page/Hero";
import Contacts from "../components/home-page/contacts";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <Contacts />
    </div>
  );
}
