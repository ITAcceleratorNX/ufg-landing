"use client"

import { ImageIcon } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimateOnScroll variant="fade-right">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              О компании
              <br />
              в цифрах
              <br />
              и фактах
            </h2>
          </AnimateOnScroll>
          
          <AnimateOnScroll variant="fade-left" delay={200}>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted border border-border">
              <img
                src="/images/about-building.png"
                alt="Офисное здание под управлением TMK"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <AnimateOnScroll variant="fade-up" delay={0}>
            <div className="border-l-4 border-accent pl-6">
              <p className="text-sm text-muted-foreground mb-2">Опыт</p>
              <p className="text-4xl md:text-5xl font-bold text-foreground mb-3">10 лет</p>
              <p className="text-muted-foreground leading-relaxed">
                на рынке управления недвижимостью
              </p>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll variant="fade-up" delay={150}>
            <div className="border-l-4 border-accent pl-6">
              <p className="text-sm text-muted-foreground mb-2">Масштаб</p>
              <p className="text-4xl md:text-5xl font-bold text-foreground mb-3">до 400 000 м²</p>
              <p className="text-muted-foreground leading-relaxed">
                площадей в управлении (включая международный опыт в Казахстане, ОАЭ, Латвии и Турции)
              </p>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll variant="fade-up" delay={300}>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">Специализация:</p>
              <p className="text-muted-foreground leading-relaxed">
                Эксплуатация бизнес-центров, складских комплексов и офисных пространств
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
