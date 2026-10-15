import Section from './Section.jsx'
import { about } from '../data/profile.js'

// Project names link to their detail page.
const link = (slug, label) => (
  <a href={`#/projects/${slug}`} className="font-medium text-text underline decoration-line underline-offset-4 hover:decoration-aqua">
    {label}
  </a>
)

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="max-w-xl space-y-4 text-base leading-relaxed text-muted">
          <p className="text-lg font-medium leading-relaxed text-text sm:text-xl">
            I'm a Computer Science Engineering student who builds practical AI, machine learning and Python
            applications.
          </p>

          <p>
            I work with Python, SQL, NLP, Pandas, Scikit-learn and TensorFlow. My projects include{' '}
            {link('automock-ai', 'AutoMock AI')}, {link('mailshield-ai', 'MailShield AI')} and{' '}
            {link('student-dropout-risk', 'NoDrop')}, and in 2026 I completed internships in Python development
            and AI.
          </p>

          <p>
            I placed 3rd at Technophilia 2026 and won the SIH 2025 and 2026 internal hackathons. I'm looking for
            roles where I can keep learning and build technology that helps people.
          </p>
        </div>

        <dl className="divide-y divide-line self-start border-y border-line">
          {about.facts.map((f) => (
            <div key={f.label} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
              <dt className="w-28 shrink-0 text-sm text-muted">{f.label}</dt>
              <dd className="text-sm font-medium text-text">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}