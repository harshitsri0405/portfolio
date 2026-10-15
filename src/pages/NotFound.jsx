export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-28 sm:px-8">
      <p className="font-display text-6xl font-extrabold text-aqua">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold">This page does not exist</h1>
      <p className="mt-3 max-w-md text-muted">
        The link may be mistyped or the page may have moved. Go back to the home page to find what you need.
      </p>
      <a href="#top" className="btn btn-primary mt-8">
        Back to home
      </a>
    </div>
  )
}