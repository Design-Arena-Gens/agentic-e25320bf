import Link from 'next/link';
import { contact } from '@/lib/profile';

export function ContactPanel() {
  return (
    <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
      <div className="space-y-5">
        <p className="text-lg text-slate-200">{contact.availability}</p>
        <p className="text-sm text-slate-300">
          I thrive in product teams that care about design excellence, accessibility, and developer experience. Let&apos;s talk about building delightful interfaces together.
        </p>
        <Link
          href={`mailto:${contact.email}`}
          className="inline-flex w-max items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-primary/90"
        >
          Email Avery
        </Link>
      </div>
      <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Based in</p>
          <p className="text-base text-white">{contact.location}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Reach out</p>
          <p className="text-base text-white">{contact.email}</p>
        </div>
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Social</p>
          <ul className="space-y-1 text-sm text-primary">
            {contact.socials.map((social) => (
              <li key={social.label}>
                <Link href={social.href} className="hover:text-primary/80">
                  {social.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
