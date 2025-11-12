import { experience } from '@/lib/profile';

export function ExperienceTimeline() {
  return (
    <div className="space-y-10">
      {experience.map((entry) => (
        <article key={entry.company} className="grid gap-6 md:grid-cols-[220px,1fr] md:gap-12">
          <div>
            <p className="text-sm uppercase tracking-wide text-slate-400">{entry.period}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{entry.role}</h3>
            <p className="text-base text-slate-300">{entry.company}</p>
          </div>
          <div className="space-y-4">
            <p className="text-base text-slate-200">{entry.summary}</p>
            <ul className="space-y-3 text-sm text-slate-300">
              {entry.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
