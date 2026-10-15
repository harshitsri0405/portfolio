import Section from './Section.jsx'
import Icon from './Icon.jsx'
import { certifications } from '../data/profile.js'

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c) => (
          <li key={c.title} className="flex flex-col">
            {/* Click the image to open the full certificate in a new tab */}
            <a
              href={c.image}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open the ${c.title} certificate in a new tab`}
              className="block overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-azure"
            >
              <img
                src={c.image}
                alt={`${c.title} certificate from ${c.issuer}`}
                loading="lazy"
                decoding="async"
                className="aspect-[3/2] w-full object-contain"
              />
            </a>
            <h3 className="mt-4 text-base font-semibold text-text">{c.title}</h3>
            <p className="mt-0.5 text-sm text-muted">
              {c.issuer}, {c.date}
            </p>
            {c.note && <p className="text-sm text-muted">{c.note}</p>}
            {/* Shown only when a verified URL is added in profile.js */}
            {c.url && (
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-aqua hover:underline"
              >
                <Icon name="external" size={14} />
                Verify certificate
              </a>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}