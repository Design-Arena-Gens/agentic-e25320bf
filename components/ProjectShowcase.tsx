import Link from 'next/link';
import { projects } from '@/lib/profile';

export function ProjectShowcase() {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {projects.map((project) => (
        <article key={project.title} className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-secondary/70 p-6">
          <header>
            <p className="text-xs uppercase tracking-[0.2em] text-primary/90">{project.year}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
          </header>
          <p className="text-sm text-slate-300">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="badge bg-white/5">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-auto flex flex-wrap gap-4">
            {project.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-primary transition hover:text-primary/80"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
