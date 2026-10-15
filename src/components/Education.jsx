import Section from './Section.jsx'
import Icon from './Icon.jsx'
import { education } from '../data/profile.js'

// Schooling entry. Add `years`, `board` or `score` here only when you want them shown.
const schooling = {
  institution: 'Kendriya Vidyalaya',
  location: 'Raebareli, Uttar Pradesh',
}

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="max-w-4xl space-y-4">
        <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-sm text-muted">{education.years}</p>
              <h3 className="mt-1 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {education.degree}
              </h3>
              <p className="mt-2 text-lg font-medium text-aqua">{education.institution}</p>
              <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted">
                <Icon name="pin" size={14} />
                {education.location}
              </p>
            </div>

            <div className="border-t border-line pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <p className="font-display text-5xl font-extrabold leading-none text-text">{education.sgpa}</p>
              <p className="mt-2 text-sm text-muted">Current SGPA</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-6 sm:px-8">
          <p className="text-sm text-muted">Schooling</p>
          <h3 className="mt-1 font-display text-xl font-bold tracking-tight sm:text-2xl">
            {schooling.institution}
          </h3>
          <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted">
            <Icon name="pin" size={14} />
            {schooling.location}
          </p>
        </div>
      </div>
    </Section>
  )
}