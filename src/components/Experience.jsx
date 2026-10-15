import Section from './Section.jsx'
import { StackTags } from './Projects.jsx'
import { experience } from '../data/profile.js'

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      intro="Two remote internships in 2026, one in AI and one in Python development."
    >
      {/* A real sequence in time, so a timeline fits the content */}
      <ol className="ml-1.5 border-l border-line">
        {experience.map((job) => (
          <li key={job.company} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
            <span
              className="absolute -left-[6px] top-2 h-3 w-3 rounded-full border-2 border-aqua bg-ink"
              aria-hidden="true"
            />
            <p className="text-sm text-muted">
              {job.period}, {job.location}
            </p>
            <h3 className="mt-1 font-display text-xl font-bold tracking-tight sm:text-2xl">{job.role}</h3>
            <p className="mt-0.5 text-base font-medium text-aqua">{job.company}</p>

            <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-base leading-relaxed text-muted marker:text-aqua">
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            <div className="mt-5">
              <StackTags items={job.stack} />
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}