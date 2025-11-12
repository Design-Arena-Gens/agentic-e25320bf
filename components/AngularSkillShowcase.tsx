'use client';

import Script from 'next/script';
import { useEffect, useId, useState } from 'react';

export function AngularSkillShowcase() {
  const [ready, setReady] = useState(false);
  const elementId = useId();

  useEffect(() => {
    const handler = () => setReady(true);
    window.addEventListener('angular-profile-ready', handler, { once: true });
    if (customElements.get('angular-skill-card')) {
      setReady(true);
    }
    return () => window.removeEventListener('angular-profile-ready', handler);
  }, []);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
      <div className="space-y-5">
        <h3 className="text-2xl font-semibold text-white">Angular-driven UI Snapshot</h3>
        <p className="text-sm text-slate-300">
          Angular remains first-class in my toolkit. This widget is rendered entirely through Angular Elements and demonstrates a lightweight skill summary that could slot into Angular-first surfaces while remaining reusable in React teams.
        </p>
        <ul className="space-y-2 text-sm text-slate-200">
          <li>• Custom element compiled from Angular standalone components</li>
          <li>• Streams metrics via RxJS subject</li>
          <li>• Ships as framework-agnostic Web Component</li>
        </ul>
      </div>
      <div className="relative rounded-3xl border border-primary/40 bg-secondary/80 p-6">
        <Script src="/angular-profile.js" strategy="afterInteractive" />
        <div className={!ready ? 'animate-pulse opacity-40' : ''}>
          {ready ? null : (
            <div className="space-y-3 text-sm text-slate-400">
              <p className="font-semibold text-slate-200">Loading Angular widget…</p>
              <p>Angular Elements bundle is streaming in.</p>
            </div>
          )}
          <angular-skill-card data-component-id={elementId} />
        </div>
      </div>
    </div>
  );
}
