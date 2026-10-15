// Shows the first real screenshot if there is one, then the workflow-diagram cover, then a neutral placeholder.
export default function ProjectPreview({ project, className = '' }) {
  const shot = project.screenshots[0]

  // Real screenshots keep their own proportions, so nothing in the app UI gets cropped.
  if (shot) {
    return (
      <img
        src={shot}
        alt={`${project.title} screenshot`}
        loading="lazy"
        decoding="async"
        className={`h-auto w-full rounded-xl border border-line ${className}`}
      />
    )
  }

  if (project.cover) {
    return (
      <img
        src={project.cover}
        alt={`${project.title} workflow diagram`}
        width="1280"
        height="800"
        loading="lazy"
        decoding="async"
        className={`aspect-[16/10] w-full rounded-xl border border-line object-cover ${className}`}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={`${project.title} preview, screenshot not added yet`}
      className={`flex aspect-[16/10] w-full flex-col items-center justify-center rounded-xl border border-line bg-surface px-6 text-center ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(rgba(129,140,248,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,0.07) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
    >
      <p className="font-display text-xl font-bold text-text">{project.title}</p>
      <p className="mt-1 text-sm text-muted">Screenshot coming soon</p>
    </div>
  )
}