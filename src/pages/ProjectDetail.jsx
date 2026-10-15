import Icon from '../components/Icon.jsx'
import ProjectPreview from '../components/ProjectPreview.jsx'
import { StackTags } from '../components/Projects.jsx'
import NotFound from './NotFound.jsx'
import { getProject, projects } from '../data/projects.js'

function Block({ title, children }) {
  return (
    <section className="grid gap-3 border-t border-line py-8 md:grid-cols-[12rem_1fr] md:gap-10">
      <h2 className="font-display text-lg font-bold text-text">{title}</h2>
      <div className="max-w-2xl text-base leading-relaxed text-muted">{children}</div>
    </section>
  )
}

function List({ items }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-aqua">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  )
}

export default function ProjectDetail({ slug }) {
  const project = getProject(slug)
  if (!project) return <NotFound />

  const next = projects[(projects.indexOf(project) + 1) % projects.length]
    // More screenshots below the main image, then the workflow diagram (when real screenshots exist).
  const gallery = [
    ...project.screenshots.slice(1).map((src, i) => ({ src, alt: `${project.title} screenshot ${i + 2}` })),
    ...(project.screenshots.length && project.cover
      ? [{ src: project.cover, alt: `${project.title} workflow diagram` }]
      : []),
  ]

  return (
    <article className="mx-auto max-w-4xl px-5 pb-20 pt-10 sm:px-8">
      <a href="#projects" className="inline-flex items-center gap-2 text-sm text-muted hover:text-text">
        <Icon name="arrowLeft" size={16} />
        Back to projects
      </a>

      <header className="mt-8">
        <p className="text-sm text-muted">{project.period}</p>
        <h1 className="mt-1 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-aqua">{project.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <Icon name="github" size={16} />
            View on GitHub
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <Icon name="external" size={16} />
              Live demo
            </a>
          )}
        </div>
      </header>

            <div className="mt-10 space-y-4">
        <ProjectPreview project={project} />
        {gallery.length > 0 && (
          <div className={`grid items-start gap-4 ${gallery.length > 1 ? 'sm:grid-cols-2' : ''}`}>
            {gallery.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-xl border border-line"
              />
            ))}
          </div>
        )}
      </div>
            

      <div className="mt-10">
        <Block title="The problem">
          <p>{project.problem}</p>
        </Block>
        <Block title="The solution">
          <p>{project.solution}</p>
        </Block>
        <Block title="Key features">
          <List items={project.features} />
        </Block>
        <Block title="How it is built">
          <List items={project.approach} />
        </Block>
        <Block title="Tech stack">
          <StackTags items={project.stack} />
        </Block>
        {project.metric && (
          <Block title="Result">
            <p>
              <span className="font-display text-2xl font-extrabold text-aqua">{project.metric.value}</span>{' '}
              {project.metric.label}, as reported on my resume.
            </p>
            {project.metricNote && <p className="mt-2">{project.metricNote}</p>}
          </Block>
        )}
      </div>

      <footer className="border-t border-line pt-8">
        <p className="text-sm text-muted">Next project</p>
        <a
          href={`#/projects/${next.slug}`}
          className="mt-1 inline-block font-display text-2xl font-bold hover:text-aqua"
        >
          {next.title}
        </a>
      </footer>
    </article>
  )
}