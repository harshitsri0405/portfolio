import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-text">
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-text">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} className="hover:text-text">
              Email
            </a>
          </li>
          <li>
            <a href="#top" className="hover:text-text">
              Back to top
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}