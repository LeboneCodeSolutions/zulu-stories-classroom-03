import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrailerSection from "@/components/TrailerSection";
import ProblemSolution from "@/components/ProblemSolution";
import Benefits from "@/components/Benefits";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrailerSection />
        <ProblemSolution />
        <section id="benefits">
          <Benefits />
        </section>
        <CallToAction />
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
