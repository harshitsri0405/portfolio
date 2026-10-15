// Shared wrapper: consistent width, spacing and heading for every section.
export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl border-t border-line px-5 py-16 sm:px-8 md:py-20">
      <div className="mb-10 max-w-2xl">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        {intro && <p className="mt-3 text-base leading-relaxed text-muted">{intro}</p>}
      </div>
      {children}
    </section>
  )
}
