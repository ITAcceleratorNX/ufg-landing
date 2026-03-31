"use client"

import { ImageIcon } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"

const partners = [
  { name: "Chevron", logo: "/images/partners/chevron.png" },
  { name: "Coca-Cola", logo: "/images/partners/coca-cola.png" },
  { name: "Beeline", logo: "/images/partners/beeline.png" },
  { name: "Airbus", logo: "/images/partners/airbus.png" },
  { name: "Bonduelle", logo: "/images/partners/bonduelle.png" },
  { name: "Chanel", logo: "/images/partners/chanel.png" },
  { name: "Wildberries", logo: "/images/partners/wildberries.png" },
  { name: "OZON", logo: "/images/partners/ozon.png" },
  { name: "QazPost", logo: "/images/partners/qazpost.png" },
  { name: "Forbes", logo: "/images/partners/forbes.png" },
]

export function PartnersSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimateOnScroll variant="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground italic mb-12">
            Наши партнеры и клиенты
          </h2>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {partners.map((partner, index) => (
            <AnimateOnScroll 
              key={partner.name} 
              variant="scale" 
              delay={index * 50}
            >
              <div className="aspect-[4/3] bg-card rounded-xl border border-border flex flex-col items-center justify-center p-4 hover:shadow-md transition-shadow">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-[72%] max-w-[72%] object-contain"
                  />
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
