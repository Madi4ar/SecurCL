import Header from "@/components/Header";
import About from "./about/page";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <About />
      </main>
    </>
  );
}
