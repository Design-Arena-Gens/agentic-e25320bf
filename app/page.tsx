import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { SkillMatrix } from '@/components/SkillMatrix';
import { AngularSkillShowcase } from '@/components/AngularSkillShowcase';
import { Testimonials } from '@/components/Testimonials';
import { ContactPanel } from '@/components/ContactPanel';

export default function HomePage() {
  return (
    <main className="pb-32">
      <div className="sticky top-0 z-50 w-full border-b border-white/5 bg-secondary/70 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 text-sm text-slate-200">
          <span className="font-display text-lg text-white">Avery Lee</span>
          <div className="flex flex-wrap gap-4">
            <a href="#experience" className="hover:text-primary">
              Experience
            </a>
            <a href="#projects" className="hover:text-primary">
              Projects
            </a>
            <a href="#skills" className="hover:text-primary">
              Skills
            </a>
            <a href="#angular" className="hover:text-primary">
              Angular
            </a>
            <a href="#contact" className="hover:text-primary">
              Contact
            </a>
          </div>
        </nav>
      </div>
      <div className="px-4">
        <Hero />
        <Section id="experience" title="Experience" subtitle="Impact across product teams delivering React and Angular interfaces.">
          <ExperienceTimeline />
        </Section>
        <Section id="projects" title="Selected Work" subtitle="Crafted for scale, accessibility, and modularity across frameworks.">
          <ProjectShowcase />
        </Section>
        <Section id="skills" title="Skill Architecture" subtitle="A cross-framework toolkit for resilient UI platforms.">
          <SkillMatrix />
        </Section>
        <Section id="angular" title="Angular x React Interop" subtitle="Angular Elements embedded seamlessly inside this React surface.">
          <AngularSkillShowcase />
        </Section>
        <Section id="testimonials" title="Voices From Teams" subtitle="Partnerships that shipped ambitious frontends on time.">
          <Testimonials />
        </Section>
        <Section id="contact" title="Let&apos;s Build" subtitle="Drop a line to collaborate on your next interface.">
          <ContactPanel />
        </Section>
      </div>
    </main>
  );
}
