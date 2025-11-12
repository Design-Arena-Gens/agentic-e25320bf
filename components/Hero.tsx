import Link from 'next/link';
import { hero } from '@/lib/profile';

export function Hero() {
  return (
    <header className="relative mx-auto mt-16 w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-12 shadow-profile backdrop-blur-xl">
      <div className="absolute inset-0 bg-hero-grid opacity-60" aria-hidden />
      <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-6">
          <span className="badge bg-white/20 text-primary">React & Angular Specialist</span>
          <h1 className="text-4xl font-display font-semibold tracking-tight text-white md:text-6xl">
            {hero.name}
          </h1>
          <p className="text-lg text-slate-200 md:text-xl">{hero.tagline}</p>
          <p className="max-w-xl text-base text-slate-300 md:text-lg">{hero.description}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-primary/40 transition hover:bg-primary/90"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-primary hover:text-primary"
            >
              Let&apos;s Collaborate
            </Link>
          </div>
        </div>
        <div className="flex h-full w-full max-w-sm flex-col gap-4 rounded-2xl border border-white/10 bg-secondary/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Currently shipping
          </p>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm text-slate-200">
              <span>Design System</span>
              <span className="text-white">PulseKit</span>
            </div>
            <div className="flex items-center justify-between text-sm text-slate-200">
              <span>Framework Mix</span>
              <span className="text-white">React · Angular</span>
            </div>
            <div className="flex items-center justify-between text-sm text-slate-200">
              <span>Focus</span>
              <span className="text-white">DX Tooling & Performance</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
