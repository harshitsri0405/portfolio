import Section from './Section.jsx'
import { experience } from '../data/profile.js'
import { projects } from '../data/projects.js'

// Skills shown in the portfolio. Everything comes from the resume (SKILLS section, internship
// "Technologies used" lines and project descriptions). No ratings or percentages.
// `featured: true` marks the groups most relevant to Python Developer and AI/ML Engineer roles.
const skillGroups = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: 'cpu',
    featured: true,
    items: [
      'Machine Learning',
      'Supervised learning',
      'Unsupervised learning',
      'Deep Learning',
      'Neural networks',
      'CNN',
      'NLP',
      'LLMs',
      
      
    ],
  },
  {
    id: 'python-data',
    title: 'Python & Data Analysis',
    icon: 'chart',
    featured: true,
    items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Data preprocessing'],
  },
  { id: 'languages', title: 'Programming Languages', icon: 'code', items: ['Python', 'SQL', 'C', 'Java'] },
  {
    id: 'frameworks',
    title: 'Frameworks & Development',
    icon: 'layers',
    items: ['Streamlit', 'FastAPI', 'React', 'Tailwind CSS'],
  },
  { id: 'databases', title: 'Databases', icon: 'database', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL'] },
  {
    id: 'tools',
    title: 'Developer Tools',
    icon: 'wrench',
    items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Google Colab'],
  },
  {
    id: 'practices',
    title: 'Engineering Practices',
    icon: 'check',
    items: ['Object-oriented Python', 'Debugging', 'Code optimization', 'Problem solving'],
  },
]

// Small icons used only in this section.
const icons = {
  code: (
    <>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </>
  ),
  cpu: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </>
  ),
  chart: (
    <>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </>
  ),
  layers: (
    <>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
  check: (
    <>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </>
  ),
}

function GroupIcon({ name }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  )
}

// A skill counts as "used in work" when it appears in a project or internship stack.
// Aliases map the wording used in the skills list to the wording used in the stacks.
const aliases = { git: 'git/github', github: 'git/github', llms: 'local llms' }
const norm = (s) => {
  const k = s.toLowerCase()
  return aliases[k] || k
}

const work = [
  ...projects.map((p) => ({ name: p.title, href: `#/projects/${p.slug}`, stack: p.stack.map(norm) })),
  ...experience.map((e) => ({ name: e.company, href: null, stack: e.stack.map(norm) })),
]

const usedIn = (item) => work.filter((w) => w.stack.includes(norm(item)))

function SkillGroup({ group }) {
  // Skills backed by real work come first, so the strongest ones are the first thing a recruiter reads.
  const items = [...new Set(group.items)]
  const withWork = items.filter((i) => usedIn(i).length > 0)
  const ordered = [...withWork, ...items.filter((i) => !withWork.includes(i))]

  // Projects and internships where any skill of this group was used.
  const evidence = work.filter((w) => items.some((i) => w.stack.includes(norm(i))))

  return (
    <article
      aria-labelledby={`skills-${group.id}`}
      className={`flex flex-col rounded-2xl border bg-surface p-6 transition duration-200 hover:-translate-y-0.5 hover:border-azure/60 motion-reduce:transform-none motion-reduce:transition-none ${
        group.featured ? 'border-azure/40 sm:p-7' : 'border-line'
      }`}
    >
      <header className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink text-aqua ring-1 ring-inset ring-line">
            <GroupIcon name={group.icon} />
          </span>
          <h3 id={`skills-${group.id}`} className="font-display text-lg font-bold text-text">
            {group.title}
          </h3>
        </div>
        {group.featured && (
          <span className="shrink-0 rounded-full border border-aqua/40 px-2.5 py-0.5 text-xs font-semibold text-aqua">
            Core
          </span>
        )}
      </header>

      <ul className="mt-5 flex flex-wrap gap-2">
        {ordered.map((item) => {
          const hit = withWork.includes(item)
          return (
            <li
              key={item}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-sm font-medium ring-1 ring-inset ${
                hit ? 'bg-ink text-text ring-aqua/40' : 'bg-ink text-muted ring-line'
              }`}
            >
              {hit && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-aqua" />}
              {item}
              {hit && <span className="sr-only"> (used in a project or internship)</span>}
            </li>
          )
        })}
      </ul>

      {evidence.length > 0 && (
        <p className="mt-auto pt-5 text-xs leading-relaxed text-muted">
          <span className="font-semibold text-text">Used in: </span>
          {evidence.map((w, i) => (
            <span key={w.name}>
              {i > 0 && ' · '}
              {w.href ? (
                <a href={w.href} className="underline-offset-2 hover:text-aqua hover:underline">
                  {w.name}
                </a>
              ) : (
                w.name
              )}
            </span>
          ))}
        </p>
      )}
    </article>
  )
}

export default function Skills() {
  const featured = skillGroups.filter((g) => g.featured)
  const rest = skillGroups.filter((g) => !g.featured)

  return (
    <Section
      id="skills"
      title="Technical skills"
      intro="Grouped by what I use them for. Highlighted skills are ones I have used in a project or internship."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {featured.map((g) => (
          <SkillGroup key={g.id} group={g} />
        ))}
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((g) => (
          <SkillGroup key={g.id} group={g} />
        ))}
      </div>
    </Section>
  )
}