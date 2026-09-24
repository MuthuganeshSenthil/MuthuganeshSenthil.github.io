import { Award, Loader2, CheckCircle2 } from "lucide-react";
import Section, { Reveal } from "./Section";
const achievements = [
  "Delivered 4 end-to-end academic projects spanning secure software development, data analytics, network analysis, and cryptography research",
  "Completed self-directed learning in Cybersecurity Fundamentals, Threat Detection, SIEM Concepts, and SOC Workflows",
  "Actively expanding skills in AWS security services, IAM policies, and cloud threat detection",
];
export default function Certifications() {
  return <Section id="certifications" index="08" label="CERTIFICATIONS.json" title="Certifications & achievements" className="bg-bg-panel/40"><div className="grid md:grid-cols-2 gap-8"><Reveal><div className="p-6 rounded-md border border-signal-dim bg-signal/5"><div className="flex items-center gap-2 mb-3"><Loader2 size={16} className="text-signal"/><span className="font-mono text-xs text-signal tracking-widest">IN PROGRESS</span></div><h3 className="font-display text-lg font-medium mb-1">AWS Cloud Practitioner</h3><p className="text-sm text-ink-dim">Actively building foundational cloud and cloud-security expertise.</p></div></Reveal><Reveal delay={0.08}><div className="p-6 rounded-md border border-line bg-bg-panel"><div className="flex items-center gap-2 mb-4"><Award size={16} className="text-cool"/><span className="font-mono text-xs text-ink-faint tracking-widest">ACCOMPLISHMENTS</span></div><ul className="space-y-3">{achievements.map(a=><li key={a} className="flex gap-2 text-sm text-ink-dim leading-relaxed"><CheckCircle2 size={15} className="text-cool shrink-0 mt-0.5"/>{a}</li>)}</ul></div></Reveal></div></Section>;
}