export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-neutral-900">
      <main className="w-full max-w-3xl px-6 py-24 bg-white/80 dark:bg-neutral-900/80 backdrop-blur border border-gray-200 dark:border-neutral-800 rounded-2xl shadow-sm">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            Bienvenido a Swappme
          </h1>
          <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
            Esta es la plantilla base con Next.js (App Router) y Tailwind CSS.
            Empieza editando <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200">src/app/page.tsx</code>.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-neutral-700 bg-gray-900 text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium hover:opacity-90 transition"
              href="https://vercel.com/new"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deploy Now
            </a>
            <a
              className="inline-flex items-center rounded-full border border-gray-300 dark:border-neutral-700 px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-800 transition"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
