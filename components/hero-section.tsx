"use client"

import { Shield } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background with dark blue industrial image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80" 
          alt="Industrial background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/85 to-[#0a1628]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1628]/50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <AnimateOnScroll variant="fade-up" delay={0}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold leading-tight mb-2">
              Комплексно-техническое
              <br />
              обслуживание
            </h1>
          </AnimateOnScroll>
          
          <AnimateOnScroll variant="fade-up" delay={150}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-8">
              и профессиональное управление
              <br />
              коммерческой недвижимостью
            </h2>
          </AnimateOnScroll>
          
          <AnimateOnScroll variant="fade-up" delay={300}>
            <div className="mb-12">
              <p className="text-lg text-primary-foreground/80 mb-1">
                Мы берём на себя
              </p>
              <p className="text-xl md:text-2xl font-semibold text-gold">
                исправность вашего здания
              </p>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll variant="fade-up" delay={450}>
            <div className="flex items-start gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 max-w-3xl border border-primary-foreground/20">
              <Shield className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
              <p className="text-primary-foreground/90 leading-relaxed">
                Гарантируем исправное функционирование всех систем, минимизируем риски
                аварий и повышаем доходность объекта за счёт качественного управления
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
