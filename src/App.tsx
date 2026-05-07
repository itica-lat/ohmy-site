import { FileText, Mail, LayoutDashboard, ClipboardList, BarChart3, Globe } from "lucide-react"
import { useT, useI18nStore } from "./lib/i18n"

const iconMap = {
  FileText,
  Mail,
  LayoutDashboard,
  ClipboardList,
  BarChart3,
  Globe,
} as const

type IconName = keyof typeof iconMap

function App() {
  const t = useT()
  const locale = useI18nStore((s) => s.locale)
  const setLocale = useI18nStore((s) => s.setLocale)

  const tools: { icon: IconName; nameKey: string; subdomain: string; descKey: string; statusKey: string }[] = [
    {
      icon: "FileText",
      nameKey: "site.tool.docs.name",
      subdomain: "docs.ohmy.lat",
      descKey: "site.tool.docs.desc",
      statusKey: "site.status.live",
    },
    {
      icon: "Mail",
      nameKey: "site.tool.mail.name",
      subdomain: "mail.ohmy.lat",
      descKey: "site.tool.mail.desc",
      statusKey: "site.status.live",
    },
    {
      icon: "LayoutDashboard",
      nameKey: "site.tool.grid.name",
      subdomain: "grid.ohmy.lat",
      descKey: "site.tool.grid.desc",
      statusKey: "site.status.live",
    },
    {
      icon: "ClipboardList",
      nameKey: "site.tool.forms.name",
      subdomain: "forms.ohmy.lat",
      descKey: "site.tool.forms.desc",
      statusKey: "site.status.live",
    },
    {
      icon: "BarChart3",
      nameKey: "site.tool.charts.name",
      subdomain: "charts.ohmy.lat",
      descKey: "site.tool.charts.desc",
      statusKey: "site.status.live",
    },
    {
      icon: "Globe",
      nameKey: "site.tool.site.name",
      subdomain: "ohmy.lat",
      descKey: "site.tool.site.desc",
      statusKey: "site.status.portal",
    },
  ]

  return (
    <div className="relative flex flex-col min-h-screen bg-background text-text overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-175 h-175 rounded-full bg-secondary/30 blur-[140px]" />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 py-12">
        <div className="w-52 mb-10 drop-shadow-[0_0_40px_rgba(189,232,245,0.15)]">
          <img src="/Banner_OhMy_Alt.png" alt={t('site.logo.alt')} className="w-full" />
        </div>

        <h1 className="font-header text-4xl md:text-5xl text-primary leading-tight mb-3">
          {t('site.title')}
        </h1>

        <p className="font-body text-text/70 max-w-md text-center leading-relaxed text-base mb-12">
          {t('site.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
          {tools.map((tool) => {
            const Icon = iconMap[tool.icon]
            return (
              <a
                key={tool.nameKey}
                href={`https://${tool.subdomain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-start gap-3 p-5 rounded-xl bg-secondary/10 backdrop-blur-sm border border-primary/10 hover:bg-secondary/20 hover:border-primary/30 transition-all duration-200"
              >
                <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                <div className="flex flex-col gap-1">
                  <h3 className="font-header text-lg text-primary group-hover:text-primary/90 transition-colors">
                    {t(tool.nameKey as any)}
                  </h3>
                  <p className="font-body text-sm text-text/60 leading-relaxed">
                    {t(tool.descKey as any)}
                  </p>
                </div>
                <span className="font-mono text-[10px] tracking-wider uppercase text-primary/40 border border-primary/10 rounded-full px-2.5 py-0.5 mt-auto">
                  {t(tool.statusKey as any)}
                </span>
              </a>
            )
          })}
        </div>

        {/* Language toggle */}
        <button
          type="button"
          onClick={() => setLocale(locale === 'en' ? 'es' : 'en')}
          className="mt-6 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase text-primary/50 border border-primary/20 hover:text-primary/80 hover:border-primary/40 transition-colors"
        >
          {locale === 'en' ? 'ES' : 'EN'}
        </button>

        <div className="w-px h-10 bg-primary/10 my-10" />

        <a
          href="https://github.com/itica-lat"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-40 hover:opacity-100 transition-opacity duration-200"
          aria-label={t('site.github.label')}
        >
          <svg width="18" height="18">
            <use href="/icons.svg#github-icon" />
          </svg>
        </a>
      </main>

      <footer className="relative z-10 text-center py-6 font-mono text-xs text-text/25 tracking-wide">
        {t('site.footer')}
      </footer>
    </div>
  )
}

export default App
