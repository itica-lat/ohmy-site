function App() {
  return (
    <div className="relative flex flex-col min-h-screen bg-background text-text overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-175 h-175 rounded-full bg-secondary/30 blur-[140px]" />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center">
        <div className="w-52 mb-10 drop-shadow-[0_0_40px_rgba(189,232,245,0.15)]">
          <img src="/Banner_OhMy_Alt.png" alt="OhMy! Logo" className="w-full" />
        </div>

        <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-primary/50 border border-primary/15 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse" />
          Under Construction
        </span>

        <h1 className="font-header text-5xl md:text-6xl text-primary leading-tight mb-4">
          OhMy! Suite
        </h1>

        <p className="font-body text-text/70 max-w-xs leading-relaxed text-base">
          We're building something. Keep an eye out for updates.
        </p>

        <div className="w-px h-10 bg-primary/10 my-10" />

        <div className="flex items-center gap-7">
          {[
            { id: "github-icon", label: "GitHub" },
          ].map(({ id, label }) => (
            <a
              key={id}
              href="#"
              aria-label={label}
              className="opacity-40 hover:opacity-100 transition-opacity duration-200"
            >
              <svg
                width="18"
                height="18"
                className="filter-[brightness(0)_invert(1)]"
              >
                <use href={`/icons.svg#${id}`} />
              </svg>
            </a>
          ))}
        </div>
      </main>

      <footer className="relative z-10 text-center py-6 font-mono text-xs text-text/25 tracking-wide">
        © 2026 OhMy! Suite
      </footer>
    </div>
  )
}

export default App
