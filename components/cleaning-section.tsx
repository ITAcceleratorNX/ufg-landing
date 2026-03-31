"use client"

import { Brush, TreePine, Search, Package, Shield, Building } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"

const services = [
  {
    icon: Brush,
    title: "Полный цикл уборки помещений",
  },
  {
    icon: TreePine,
    title: "Уборка прилегающих территорий",
  },
  {
    icon: Search,
    title: "Снабжение расходными материалами",
  },
  {
    icon: Package,
    title: "Поставка хозяйственных товаров",
  },
  {
    icon: Shield,
    title: "Дезинфекция и спецобработка",
  },
  {
    icon: Building,
    title: "Мытье окон и фасадов",
  },
]

export function CleaningSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <AnimateOnScroll variant="fade-right">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Профессиональный
                <br />
                клининг
              </h2>
            </AnimateOnScroll>
            
            <AnimateOnScroll variant="fade-up" delay={100}>
              <div className="border-l-4 border-muted-foreground/30 pl-6 mb-10">
                <p className="text-muted-foreground leading-relaxed">
                  Организация полного цикла уборки помещений и прилегающих территорий, а также
                  бесперебойное снабжение объекта расходными материалами и хозяйственными товарами
                </p>
              </div>
            </AnimateOnScroll>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <AnimateOnScroll key={service.title} variant="fade-up" delay={150 + index * 75}>
                  <div className="bg-card rounded-xl p-5 flex items-start gap-4 border border-border">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <p className="font-medium text-foreground text-sm leading-snug">
                      {service.title}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
          
          <AnimateOnScroll variant="fade-left" delay={200}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted border border-border lg:mt-20">
              <img
                src="/images/cleaning-team.jpg"
                alt="Команда клининга за работой"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
