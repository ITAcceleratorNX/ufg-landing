"use client"

import { Phone, Mail, ImageIcon } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20">
      {/* Background with professional office image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" 
          alt="Office background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/90 to-[#0f172a]/80" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimateOnScroll variant="fade-right">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground italic leading-tight mb-8">
                Свяжитесь с нами для
                <br />
                дальнейшей работы
              </h2>
            </AnimateOnScroll>
            
            <AnimateOnScroll variant="fade-up" delay={200}>
              <div className="relative w-64 h-80 bg-primary-foreground/10 rounded-2xl border border-primary-foreground/30 mx-auto lg:mx-0 overflow-hidden">
                <img
                  src="/images/contact-person.webp"
                  alt="Представитель TMK для связи"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </div>
            </AnimateOnScroll>
          </div>
          
          <div className="space-y-8">
            {/* Pricing info */}
            <AnimateOnScroll variant="fade-left" delay={100}>
              <div className="bg-card rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Расчёт стоимости:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    Формирование персонального предложения на основе аудита
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                    Мы не используем стандартные прайсы, так как каждый объект уникален и требует индивидуального подхода.
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>
            
            {/* Contact info */}
            <AnimateOnScroll variant="fade-left" delay={200}>
              <div className="bg-card rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Контактная информация:</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">+7 705 643 39 80 (Александр)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">bolesta.A@tmk-limited.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
