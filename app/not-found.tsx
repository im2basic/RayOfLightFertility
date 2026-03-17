import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-6xl font-extrabold text-brand-primary">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-brand-dark">
          Page Not Found
        </h2>
        <p className="mt-4 text-base leading-relaxed text-brand-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-primary px-8 py-3 text-sm font-bold text-brand-dark shadow-md transition-colors duration-200 hover:bg-brand-secondary hover:text-white"
        >
          Return Home
        </Link>
      </div>
    </section>
  )
}
