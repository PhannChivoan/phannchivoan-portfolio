import About from "./components/About";
import ContactCard from "./components/ContactCard";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Interests from "./components/Interests";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <section className="section" id="experience">
          <div className="container bottom-grid">
            <Experience />
            <Interests />
            <ContactCard />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
