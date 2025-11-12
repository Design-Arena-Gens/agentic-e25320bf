import { ReactNode } from 'react';

export function Section({
  id,
  title,
  subtitle,
  children
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-10 flex flex-col gap-3">
        <span className="badge w-max bg-primary/15 text-primary">{title}</span>
        {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
      </div>
      <div className="card-surface border-white/5 p-10 shadow-profile">
        {children}
      </div>
    </section>
  );
}
