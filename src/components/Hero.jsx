import Icon from './Icon.jsx'
import { profile } from '../data/profile.js'

const socials = [
  { name: 'github', label: 'GitHub', href: profile.github },
  { name: 'linkedin', label: 'LinkedIn', href: profile.linkedin },
  { name: 'mail', label: 'Email', href: `mailto:${profile.email}` },
]

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-20 pt-14 sm:px-8 md:pt-24">
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <h1
            className="rise font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            style={{ '--d': '0s' }}
          >
            {profile.name}
          </h1>

          <p
            className="rise mt-5 max-w-xl text-lg font-medium text-aqua sm:text-xl"
            style={{ '--d': '0.1s' }}
          >
            {profile.headline}
          </p>

          <p className="rise mt-5 max-w-xl text-base leading-relaxed text-muted" style={{ '--d': '0.2s' }}>
            {profile.intro}
          </p>

          <div className="rise mt-8 flex flex-wrap items-center gap-3" style={{ '--d': '0.3s' }}>
            <a href="#projects" className="btn btn-primary">
              View my projects
            </a>
            <a href={profile.resume} download className="btn btn-ghost">
              <Icon name="download" size={16} />
              Download resume
            </a>
            <a href="#contact" className="px-2 py-2 text-sm font-semibold text-muted underline-offset-4 hover:text-text hover:underline">
              Contact me
            </a>
          </div>

          <ul className="rise mt-8 flex items-center gap-2" style={{ '--d': '0.4s' }}>
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target={s.name === 'mail' ? undefined : '_blank'}
                  rel={s.name === 'mail' ? undefined : 'noopener noreferrer'}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-azure hover:text-text"
                >
                  <Icon name={s.name} size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

              <figure className="rise mx-auto w-full max-w-xs lg:mx-0 lg:max-w-sm lg:justify-self-end" style={{ '--d': '0.3s' }}>
          <img
            src="/profile.jpg"
            alt={`Portrait of ${profile.name}`}
            width="800"
            height="770"
            decoding="async"
            className="aspect-square w-full rounded-full border-2 border-line object-cover object-top"
          />
        </figure>
      </div>
    </section>
  )
}