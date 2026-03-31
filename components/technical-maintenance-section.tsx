"use client"

import { Thermometer, Droplets, Zap, Building2, Wind, Bell } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"

const services = [
  {
    icon: Thermometer,
    title: "Системы теплоснабжения и отопления",
  },
  {
    icon: Droplets,
    title: "Водоснабжение (ХВС/ГВС) и водоотведение",
  },
  {
    icon: Zap,
    title: "Электроснабжение и электрооборудование",
  },
  {
    icon: Building2,
    title: "Лифтовое хозяйство",
  },
  {
    icon: Wind,
    title: "Вентиляция и кондиционирование (HVAC)",
  },
  {
    icon: Bell,
    title: "Автоматическая пожарная сигнализация",
  },
]

export function TechnicalMaintenanceSection() {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <AnimateOnScroll variant="fade-right">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                КТО (Техническое
                <br />
                обслуживание)
              </h2>
            </AnimateOnScroll>
            
            <AnimateOnScroll variant="fade-up" delay={100}>
              <div className="border-l-4 border-muted-foreground/30 pl-6 mb-10">
                <p className="text-muted-foreground leading-relaxed">
                  Обеспечение надлежащего технического состояния и бесперебойной работы
                  инженерной инфраструктуры объекта
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
                src="/images/technical-team.jpg"
                alt="Инженерно-техническая команда TMK"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
