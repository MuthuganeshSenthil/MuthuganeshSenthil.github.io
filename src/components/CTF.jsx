import { Flag } from "lucide-react";
import Section, { Reveal } from "./Section";
import { ctfPlatforms } from "../data/timeline";
export default function CTF() {
  return <Section id="ctf" index="09" label="CTF.log" title="Capture the Flag" kicker="Practical, hands-on learning platforms I'm currently exploring."><div className="grid sm:grid-cols-3 gap-5">{ctfPlatforms.map((p,i)=><Reveal key={p.name} delay={i*0.06}><div className="p-5 rounded-md border border-line bg-bg-panel flex items-center gap-3"><Flag size={18} className="text-signal"/><div><p className="font-medium text-sm">{p.name}</p><p className="font-mono text-[11px] text-ink-faint">Currently exploring</p></div></div></Reveal>)}</div></Section>;
}