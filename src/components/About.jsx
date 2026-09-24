import { Terminal, FlaskConical, Wrench, GraduationCap } from "lucide-react";
import Section, { Reveal } from "./Section";
import { personal } from "../data/personal";
const traits = [
  { icon: Terminal, label: "Curious", detail: "I enjoy understanding how systems actually work under the hood." },
  { icon: Wrench, label: "Hands-on", detail: "I learn by building labs and finishing real projects, not just reading." },
  { icon: FlaskConical, label: "Security-focused", detail: "I'm drawn to finding weaknesses and understanding how to fix them." },
  { icon: GraduationCap, label: "Student mindset", detail: "Continuously learning — I don't claim to know it all yet." },
];
export default function About() {
  return (
    <Section id="about" index="01" label="ABOUT.md" title="About me">
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3"><Reveal delay={0.1}><p className="text-ink leading-relaxed mb-4">{personal.summary}</p><p className="text-ink-dim leading-relaxed">My interests span ethical hacking, network security, web application security, cryptography, Linux, security automation, digital forensics, and Capture The Flag challenges. I'm currently exploring cloud security on AWS and working toward the Cloud Practitioner certification. My long-term goal is to build strong practical security skills and eventually contribute to real security engineering work.</p></Reveal></div>
        <div className="md:col-span-2 grid grid-cols-2 gap-4">{traits.map((t,i)=><Reveal key={t.label} delay={0.15+i*0.06}><div className="h-full p-4 border border-line rounded-md bg-bg-panel"><t.icon size={18} className="text-signal mb-3"/><p className="font-mono text-xs text-ink mb-1">{t.label}</p><p className="text-xs text-ink-faint leading-snug">{t.detail}</p></div></Reveal>)}</div>
      </div>
    </Section>
  );
}