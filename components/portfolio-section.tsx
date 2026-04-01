"use client"

import { useEffect, useMemo, useRef } from "react"
import { AnimateOnScroll } from "./animate-on-scroll"
import { cn } from "@/lib/utils"

const projects = [
  {
    name: "Помещения головного офиса АО Altyn Bank",
    area: "10,000 кв. м.",
    tasks: "услуги по техническому обслуживанию части здания для АО Altyn Bank",
    services: "обслуживание всех инженерных сетей и систем кондиционирования.",
    image: "/images/portfolio/altyn-bank.jpg",
  },
  {
    name: "Комплексное управление БЦ Almaty Plaza в г. Алматы",
    area: "24,000 кв. м.",
    tasks: "Управление зданием, техническое обслуживание, приём и обслуживание посетителей, управление отношениями между собственником и арендаторами.",
    image: "/images/portfolio/almaty-plaza.webp",
  },
  {
    name: "Головной офис АО Bank RBK",
    area: "27,000 кв. м. + 3,000 кв. м. РКО",
    tasks: "услуги по техническому обслуживанию здания",
    services: "обслуживание всех инженерных сетей, систем кондиционирования и водоснабжения.",
    image: "/images/portfolio/bank-rbk.jpg",
  },
  {
    name: "Комплексное управление БЦ Каратал",
    area: "12,000 кв. м.",
    tasks: "Управление зданием, техническое обслуживание, приём и обслуживание посетителей, управление отношениями между собственником и арендаторами.",
    image: "/images/portfolio/karatal.webp",
  },
  {
    name: "Venus, Елебекова 10/1, Алматы",
    area: "22,000 м² (объект), в WorkFlow 2,100 м²",
    services: "эксплуатация инженерных систем, кондиционирования и электроснабжения, обслуживание КС и IT-инфраструктуры, обработка FM-заявок и управление SLA, клининг и сервисные работы.",
    image: "/images/portfolio/venus.webp",
  },
  {
    name: "Teniz Towers, Алматы",
    area: "12,500 м²",
    tasks: "техническое обслуживание и эксплуатация офисных пространств в рамках сервисной модели WorkFlow",
    services: "эксплуатация HVAC, водоснабжения, пожарного оборудования, лифтов, электроснабжения, управление SLA, текущий ремонт.",
    image: "/images/portfolio/teniz-towers.jpg",
  },
  {
    name: "Koktem Grand, пр. Достык 210, Алматы",
    area: "56,379 м² (объект), в WorkFlow 2,000 м²",
    services: "эксплуатация инженерных систем и климатического оборудования (HVAC), обслуживание электроснабжения и IT-инфраструктуры, регламентные работы, обработка заявок.",
    image: "/images/portfolio/koktem-grand.jpg",
  },
  {
    name: "CDC2, Назарбаева 240, Алматы",
    area: "2,400 м²",
    tasks: "объект на инженерных системах вентиляции, отопления и кондиционирования",
    services: "эксплуатация систем HVAC и электроснабжения, обслуживание СКС, диспетчеризация заявок и контроль SLA, ведение технической документации.",
    image: "/images/portfolio/cdc2.jpg",
  },
  {
    name: "Нурлы Тау, Алматы",
    area: "в техническом обслуживании WorkFlow 1 500 м²",
    services:
      "эксплуатация систем вентиляции, кондиционирования и электроснабжения, текущий ремонт и техническая поддержка пользователей, контроль подрядных организаций, обслуживание общих зон здания.",
    image: "/images/portfolio/nur.jpg",
  },
  {
    name: "Koktem Tower, проспект Достык 176, Алматы",
    area: "6 300 м², в техническом обслуживании этаж WorkFlow 1 000 м²",
    services:
      "эксплуатация систем электроснабжения, освещения и климат-контроля, оперативное устранение неисправностей, плановое профилактическое обслуживание инженерных систем.",
    image: "/images/portfolio/koktem-towers.jpeg",
  },
]

const warehouses = {
  title: "Складские комплексы WorkFlow, оператор 3PL и технического обслуживания",
  locations: [
    "Суюнбая — 4 000 м²",
    "Алгабас — 13 500 м²",
    "Касымова 32 — 2 000 м²",
    "Абиша Кекильбайулы 270 — 1 000 м²",
    "Дополнительные площадки в портфеле складов",
  ],
  tasks: "техническая эксплуатация складов, поддержание работоспособности оборудования и инженерии, обеспечение непрерывности складских процессов",
  services: "обслуживание инженерных систем и электроснабжения, эксплуатация складского оборудования, регламентные и аварийные работы, техническое сопровождение 3PL-инфраструктуры.",
  image: "/images/portfolio/warehouse.jpeg",
}

export function PortfolioSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const lastTimeRef = useRef<number | null>(null)
  const userInteractingRef = useRef(false)
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const loopProjects = useMemo(() => [...projects, ...projects], [])

  const scrollSlider = (direction: "left" | "right") => {
    const container = sliderRef.current
    if (!container) return

    userInteractingRef.current = true
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)

    const firstSlide = container.querySelector<HTMLElement>("[data-carousel-slide]")
    const gapStr = getComputedStyle(container).gap
    const gapPx = gapStr ? parseFloat(gapStr) || 24 : 24
    const step = (firstSlide?.offsetWidth ?? 280) + gapPx

    const nextLeft =
      direction === "left"
        ? container.scrollLeft - step
        : container.scrollLeft + step

    // instant scroll avoids fighting the RAF loop + smooth scroll cancellation
    container.scrollTo({ left: nextLeft, behavior: "auto" })

    resumeTimeoutRef.current = setTimeout(() => {
      userInteractingRef.current = false
      resumeTimeoutRef.current = null
    }, 4500)
  }

  useEffect(() => {
    const container = sliderRef.current
    if (!container) return

    const SPEED_PX_PER_SEC = 18

    const scheduleResume = () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
      resumeTimeoutRef.current = setTimeout(() => {
        userInteractingRef.current = false
        resumeTimeoutRef.current = null
      }, 3200)
    }

    const onPointerDown = () => {
      userInteractingRef.current = true
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
    }

    const onPointerUp = () => {
      scheduleResume()
    }

    /** Vertical wheel over the strip should scroll the page, not get trapped on overflow-x. */
    const onWheel = (e: WheelEvent) => {
      const absX = Math.abs(e.deltaX)
      const absY = Math.abs(e.deltaY)
      if (absX > absY && absX > 1) {
        userInteractingRef.current = true
        if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
        resumeTimeoutRef.current = setTimeout(() => {
          userInteractingRef.current = false
          resumeTimeoutRef.current = null
        }, 2500)
        return
      }
      if (absY >= absX && absY > 0) {
        e.preventDefault()
        window.scrollBy({ top: e.deltaY, left: 0, behavior: "auto" })
      }
    }

    container.addEventListener("pointerdown", onPointerDown)
    container.addEventListener("pointerup", onPointerUp)
    container.addEventListener("pointercancel", onPointerUp)
    container.addEventListener("wheel", onWheel, { passive: false })

    const tick = (t: number) => {
      if (!container) return

      const last = lastTimeRef.current ?? t
      const dt = Math.min(64, t - last)
      lastTimeRef.current = t

      if (!userInteractingRef.current) {
        container.scrollLeft += (SPEED_PX_PER_SEC * dt) / 1000

        const half = container.scrollWidth / 2
        if (half > 0 && container.scrollLeft >= half) {
          container.scrollLeft -= half
        }
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      container.removeEventListener("pointerdown", onPointerDown)
      container.removeEventListener("pointerup", onPointerUp)
      container.removeEventListener("pointercancel", onPointerUp)
      container.removeEventListener("wheel", onWheel)
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = null
      lastTimeRef.current = null
    }
  }, [])

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimateOnScroll variant="fade-up">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Наш актуальный и подтвержденный опыт
            </h2>
            <div className="hidden md:flex gap-2">
              <button
                type="button"
                onClick={() => scrollSlider("left")}
                className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors"
                aria-label="Предыдущие проекты"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => scrollSlider("right")}
                className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors"
                aria-label="Следующие проекты"
              >
                ›
              </button>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Projects carousel */}
        <div className="relative mb-12">
          {/* Mobile arrows inside flow */}
          <div className="flex md:hidden justify-end gap-2 mb-3">
            <button
              type="button"
              onClick={() => scrollSlider("left")}
              className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors"
              aria-label="Предыдущие проекты"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scrollSlider("right")}
              className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors"
              aria-label="Следующие проекты"
            >
              ›
            </button>
          </div>

          <div
            ref={sliderRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Проекты и объекты"
            tabIndex={0}
            className={cn(
              "flex flex-nowrap gap-4 sm:gap-6 items-stretch",
              "overflow-x-auto overflow-y-clip overscroll-x-contain",
              "[-webkit-overflow-scrolling:touch]",
              "snap-x snap-mandatory scroll-px-4",
              "pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:scroll-p-0",
              "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg",
            )}
          >
            {loopProjects.map((project, index) => (
              <AnimateOnScroll
                key={`${project.name}-${index}`}
                variant="fade-up"
                delay={(index % projects.length) * 50}
                className="shrink-0 snap-start snap-always"
              >
                <div
                  data-carousel-slide
                  className="min-w-[260px] sm:min-w-[300px] md:min-w-[320px] max-w-xs bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow h-full"
                >
                  <div className="relative aspect-square bg-muted border-b border-border">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>

                  <div className="bg-primary p-4">
                    <h3 className="font-semibold text-primary-foreground text-sm mb-3 line-clamp-2">
                      {project.name}
                    </h3>
                  </div>

                  <div className="p-4 space-y-3">
                    <div>
                      <span className="text-xs font-semibold text-accent">Площадь:</span>
                      <span className="text-xs text-muted-foreground ml-1">{project.area}</span>
                    </div>

                    {project.tasks && (
                      <div>
                        <span className="text-xs font-semibold text-accent">Задачи:</span>
                        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-3">
                          {project.tasks}
                        </p>
                      </div>
                    )}

                    {project.services && (
                      <div>
                        <span className="text-xs font-semibold text-accent">Виды услуг:</span>
                        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-3">
                          {project.services}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
        
        {/* Warehouses section */}
        <div className="grid lg:grid-cols-2 gap-6">
          <AnimateOnScroll variant="fade-right" delay={100}>
            <div className="relative aspect-video bg-muted border border-border rounded-xl overflow-hidden h-full">
              <img
                src={warehouses.image}
                alt="Складские комплексы WorkFlow"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll variant="fade-left" delay={200}>
            <div className="bg-card border border-border rounded-xl overflow-hidden h-full">
              <div className="bg-primary p-4">
                <h3 className="font-semibold text-primary-foreground">
                  {warehouses.title}
                </h3>
              </div>
              
              <div className="p-6 grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-3">География и площади:</h4>
                  <ul className="space-y-1">
                    {warehouses.locations.map((loc) => (
                      <li key={loc} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 bg-muted-foreground rounded-full mt-1.5 flex-shrink-0"></span>
                        {loc}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-2">Задачи:</h4>
                    <p className="text-xs text-muted-foreground">{warehouses.tasks}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-2">Виды услуг:</h4>
                    <p className="text-xs text-muted-foreground">{warehouses.services}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
