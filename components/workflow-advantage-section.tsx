"use client"

import { AnimateOnScroll } from "./animate-on-scroll"

export function WorkflowAdvantageSection() {
  return (
    <section id="workflow" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <AnimateOnScroll variant="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Наша сильное преимущество
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-primary-foreground/80">
              Своя IT-платформа управление офисом
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimateOnScroll variant="fade-right" delay={100}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <span className="text-xl font-bold">TMK</span>
                  <span className="text-xs block -mt-1 opacity-70">HOLDING</span>
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll variant="fade-right" delay={200}>
              <p className="text-xs text-primary-foreground/60 uppercase tracking-wider mb-2">
                SMART OFFICE SYSTEM
              </p>
              
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#ff6b35] mb-4">
                WorkFlow
              </h3>
              
              <p className="text-2xl md:text-3xl font-medium text-primary-foreground/80 mb-8">
                Умный офис
                <br />
                будущего
              </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll variant="fade-up" delay={300}>
              <p className="text-primary-foreground/70 mb-10 max-w-md">
                Единая цифровая экосистема для управления пространством, климатом и комфортом
                сотрудников в один клик.
              </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll variant="fade-up" delay={400}>
              <div className="flex gap-8">
                <div className="border-r border-primary-foreground/30 pr-8">
                  <p className="text-2xl font-bold">AI</p>
                  <p className="text-xs text-primary-foreground/60 uppercase tracking-wider">POWERED</p>
                </div>
                <div className="border-r border-primary-foreground/30 pr-8">
                  <p className="text-2xl font-bold">IoT</p>
                  <p className="text-xs text-primary-foreground/60 uppercase tracking-wider">INTEGRATION</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">WELL</p>
                  <p className="text-xs text-primary-foreground/60 uppercase tracking-wider">STANDARD</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
          
          {/* Phone mockup with actual image */}
          <AnimateOnScroll variant="fade-left" delay={200}>
            <div className="relative flex justify-center items-center">
              {/* Main phone image */}
              <div className="relative">
                <img 
                  src="/images/workflow-phone.png" 
                  alt="WorkFlow App - Smart Office Control"
                  className="w-auto h-[550px] md:h-[650px] object-contain drop-shadow-2xl"
                />
              </div>
              
              {/* Floating cards */}
              <div className="absolute top-16 right-2 md:right-0 max-w-[calc(100vw-2rem)] bg-[#1a1a2e]/90 rounded-xl p-4 backdrop-blur-md border border-primary-foreground/20 shadow-xl">
                <p className="text-xs text-primary-foreground/60 uppercase tracking-wider">CLIMATE CONTROL</p>
                <p className="text-2xl font-bold text-[#00d4ff]">22.5°C</p>
              </div>
              
              <div className="absolute bottom-40 left-2 md:left-0 max-w-[calc(100vw-2rem)] bg-[#1a1a2e]/90 rounded-xl p-4 backdrop-blur-md border border-primary-foreground/20 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60 uppercase tracking-wider">AIR QUALITY</p>
                  <p className="text-sm font-bold text-green-400">Excellent</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
