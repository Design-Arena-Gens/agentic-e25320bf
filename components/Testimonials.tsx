import { testimonials } from '@/lib/profile';

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {testimonials.map((entry) => (
        <figure key={entry.name} className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-secondary/70 p-6">
          <blockquote>
            <p className="text-lg text-slate-100">“{entry.quote}”</p>
          </blockquote>
          <figcaption className="mt-6 text-sm text-slate-300">
            <span className="block font-semibold text-white">{entry.name}</span>
            <span>{entry.role}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
