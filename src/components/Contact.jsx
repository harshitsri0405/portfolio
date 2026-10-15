import Section from './Section.jsx'
import Icon from './Icon.jsx'
import { profile } from '../data/profile.js'

const details = [
  { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phoneHref}` },
  { icon: 'pin', label: 'Location', value: profile.location },
  { icon: 'linkedin', label: 'LinkedIn', value: 'harshit-srivastava', href: profile.linkedin, external: true },
  { icon: 'github', label: 'GitHub', value: 'harshitsri0405', href: profile.github, external: true },
]

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      intro="I am looking for AI/ML and Python internships and entry-level roles. Email is the quickest way to reach me."
    >
      <div className="flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className="btn btn-primary">
          <Icon name="mail" size={16} />
          Email me
        </a>
        <a href={profile.resume} download className="btn btn-ghost">
          <Icon name="download" size={16} />
          Download resume
        </a>
      </div>

      <ul className="mt-12 grid gap-x-12 gap-y-6 sm:grid-cols-2 lg:max-w-3xl">
        {details.map((d) => (
          <li key={d.label} className="flex items-start gap-4">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line text-aqua">
              <Icon name={d.icon} size={18} />
            </span>
            <div>
              <p className="text-sm text-muted">{d.label}</p>
              {d.href ? (
                <a
                  href={d.href}
                  target={d.external ? '_blank' : undefined}
                  rel={d.external ? 'noopener noreferrer' : undefined}
                  className="text-base font-medium text-text hover:text-aqua"
                >
                  {d.value}
                </a>
              ) : (
                <p className="text-base font-medium text-text">{d.value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}