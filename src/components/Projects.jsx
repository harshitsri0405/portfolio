import Section from './Section.jsx'
import Icon from './Icon.jsx'
import ProjectPreview from './ProjectPreview.jsx'
import { projects } from '../data/projects.js'

export function StackTags({ items }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="rounded-md border border-line bg-surface px-2.5 py-1 text-xs text-muted">
          {t}
        </li>
      ))}
    </ul>
  )
}

export function ProjectLinks({ project }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a href={`#/projects/${project.slug}`} className="btn btn-primary">
        View details
      </a>
      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
        <Icon name="github" size={16} />
        GitHub
      </a>
      {/* Only shown when a working deployment is set in projects.js */}
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
          <Icon name="external" size={16} />
          Live demo
        </a>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Featured projects"
      intro="Three projects that take data from preprocessing to a trained model and a usable interface."
    >
      <div>
        {projects.map((p, i) => (
          <article
            key={p.slug}
            className={`grid gap-8 py-10 first:pt-0 lg:grid-cols-2 lg:items-center lg:gap-14 ${
              i > 0 ? 'border-t border-line' : ''
            }`}
          >
            <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <p className="text-sm text-muted">{p.period}</p>
              <h3 className="mt-1 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {p.title}
              </h3>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">{p.summary}</p>

              {p.metric && (
                <p className="mt-5 flex items-baseline gap-3">
                  <span className="font-display text-3xl font-extrabold text-aqua">{p.metric.value}</span>
                  <span className="text-sm text-muted">{p.metric.label}</span>
                </p>
              )}

              <div className="mt-5">
                <StackTags items={p.stack} />
              </div>
              <div className="mt-7">
                <ProjectLinks project={p} />
              </div>
            </div>

            <a
              href={`#/projects/${p.slug}`}
              aria-label={`View details for ${p.title}`}
              className={`block transition-opacity hover:opacity-90 ${i % 2 === 1 ? 'lg:order-1' : ''}`}
            >
              <ProjectPreview project={p} />
            </a>
          </article>
        ))}
      </div>
    </Section>
  )
}