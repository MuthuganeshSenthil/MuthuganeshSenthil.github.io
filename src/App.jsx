import StatusBar from "./components/StatusBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FocusAreas from "./components/FocusAreas";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import CyberLab from "./components/CyberLab";
import LearningJourney from "./components/LearningJourney";
import Certifications from "./components/Certifications";
import CTF from "./components/CTF";
import GitHubSection from "./components/GitHubSection";
import Education from "./components/Education";
import ResumeCTA from "./components/ResumeCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink font-body">
      <StatusBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <FocusAreas />
        <Skills />
        <Tools />
        <Projects />
        <CyberLab />
        <LearningJourney />
        <Certifications />
        <CTF />
        <GitHubSection />
        <Education />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}