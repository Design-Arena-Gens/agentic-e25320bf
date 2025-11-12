import { skillMatrix } from '@/lib/profile';

const sections = [
  { key: 'foundations', label: 'Engineering Foundations' },
  { key: 'reactEcosystem', label: 'React Delivery' },
  { key: 'angularEcosystem', label: 'Angular Delivery' },
  { key: 'craftsmanship', label: 'Craft & Collaboration' }
] satisfies { key: keyof typeof skillMatrix; label: string }[];

export function SkillMatrix() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {sections.map((section) => (
        <div key={section.key} className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">{section.label}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skillMatrix[section.key].map((skill) => (
              <span key={skill} className="badge bg-primary/10 text-slate-100">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
