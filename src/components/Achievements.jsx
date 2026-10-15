import Section from './Section.jsx'
import Icon from './Icon.jsx'
import { achievements } from '../data/profile.js'

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <ul className="grid max-w-4xl gap-4 sm:grid-cols-2">
        {achievements.map((a) => {
          // Wins get a trophy and a cyan accent; participation gets a flag and an indigo accent.
          const isWin = a.result !== 'Participant'
          return (
            <li
              key={a.title}
              className={`rounded-2xl border bg-surface p-6 ${isWin ? 'border-aqua/40' : 'border-line'}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                    isWin ? 'bg-aqua/15 text-aqua' : 'bg-iris/15 text-iris'
                  }`}
                >
                  <Icon name={isWin ? 'trophy' : 'flag'} size={20} />
                </span>
                <p className={`font-display text-lg font-bold ${isWin ? 'text-aqua' : 'text-iris'}`}>
                  {a.result}
                </p>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text">{a.title}</h3>
              {a.detail && <p className="mt-1 text-sm text-muted">{a.detail}</p>}
            </li>
          )
        })}
      </ul>
    </Section>
  )
}