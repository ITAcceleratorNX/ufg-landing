"use client"

import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={closeMobile}>
          <span className="text-2xl font-bold text-foreground tracking-tight">UFG</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            О компании
          </Link>
          <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Услуги
          </Link>
          <Link href="#workflow" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            WorkFlow
          </Link>
          <Link href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Портфолио
          </Link>
          <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Контакты
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <Link 
            href="#contact" 
            className="hidden md:inline-flex px-4 py-2 text-sm font-medium bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Связаться
          </Link>

          {/* Mobile burger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Открыть меню"
          >
            <span className="sr-only">Открыть меню</span>
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/98 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-2">
            <Link
              href="#about"
              onClick={closeMobile}
              className="py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              О компании
            </Link>
            <Link
              href="#services"
              onClick={closeMobile}
              className="py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Услуги
            </Link>
            <Link
              href="#workflow"
              onClick={closeMobile}
              className="py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              WorkFlow
            </Link>
            <Link
              href="#portfolio"
              onClick={closeMobile}
              className="py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Портфолио
            </Link>
            <Link
              href="#contact"
              onClick={closeMobile}
              className="py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Контакты
            </Link>
            <Link
              href="#contact"
              onClick={closeMobile}
              className="mt-2 inline-flex justify-center px-4 py-2 text-sm font-medium bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Связаться
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
