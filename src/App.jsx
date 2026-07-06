import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Skills from './components/Skills';
import Works from './components/Works';

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-paper text-ink">
      <div className="page-glow" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Works />
        <Services />
        <Skills />
        <Contact />
      </main>
      <footer className="mx-auto max-w-7xl px-5 pb-10 pt-4 text-sm text-sage sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-3 border-t border-line pt-8 sm:flex-row">
          <span>AI Portfolio 2026</span>
          <span>AIGC Visual Design / Prompt Design / Digital Content</span>
        </div>
      </footer>
    </div>
  );
}
