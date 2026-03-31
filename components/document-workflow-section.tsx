"use client"

import { AlertTriangle, Mail, FileQuestion, Clock, ShieldAlert, CheckCircle, Zap, Eye, Target, Users } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"

const problems = [
  {
    icon: Mail,
    title: "Хаос в каналах связи",
    description: "Потеря версий файлов в почте, Telegram и папках.",
  },
  {
    icon: FileQuestion,
    title: "Зависание документов",
    description: "Непонятно, у кого сейчас находится документ и почему.",
  },
  {
    icon: Clock,
    title: "Срыв сроков",
    description: "Затянутые согласования из-за отсутствия контроля.",
  },
  {
    icon: ShieldAlert,
    title: "Сложность проверки прав",
    description: "Трудно отследить лимиты и полномочия подписантов.",
  },
]

const steps = [
  {
    number: "01",
    title: "Создание заявки (AI Assist)",
    description: "ИИ помогает выбрать тип и заполнить поля из файлов.",
  },
  {
    number: "02",
    title: "Умная маршрутизация",
    description: "Авто-маршрут по правилам: роль сотрудника, сумма, тип.",
  },
  {
    number: "03",
    title: "Процесс согласования",
    description: "Утверждение, отклонение или комментарии в один клик.",
  },
  {
    number: "04",
    title: "Audit Trail & История",
    description: "Полная фиксация всех действий и изменений статусов.",
  },
  {
    number: "05",
    title: "Контроль сроков (SLA)",
    description: "Эскалация руководителю при задержке документа.",
    faded: true,
  },
]

const advantages = [
  { icon: Zap, label: "Скорость" },
  { icon: Eye, label: "Прозрачность" },
  { icon: Target, label: "Точность" },
  { icon: Users, label: "Контроль" },
]

export function DocumentWorkflowSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimateOnScroll variant="fade-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold text-foreground">TMK</span>
              <span className="text-xs text-muted-foreground block -mt-1">HOLDING</span>
            </div>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll variant="fade-up" delay={100}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Документооборот WorkFlow
          </h2>
          <p className="text-muted-foreground mb-4">
            Новый модуль — единое пространство для согласования
          </p>
        </AnimateOnScroll>
        
        <AnimateOnScroll variant="fade-up" delay={150}>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 bg-card border border-border rounded-full text-sm font-medium">PURCHASE</span>
            <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">CONTRACT</span>
            <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium flex items-center gap-1">
              <Zap className="w-3 h-3" /> AI POWERED
            </span>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll variant="fade-up" delay={200}>
          <div className="bg-card border border-border rounded-xl p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-semibold text-foreground">Интеграция с ИИ-агентом</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Выполняет все команды связанные с документооборотом: создание заявок, маршрутизация, напоминания, анализ статусов.
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Problems */}
          <AnimateOnScroll variant="fade-right" delay={250}>
            <div className="bg-card border border-border rounded-xl p-6 h-full">
              <div className="flex items-center gap-2 mb-6">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <h3 className="text-lg font-bold text-foreground">Проблемы, которые решаем</h3>
              </div>
              
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <AnimateOnScroll key={problem.title} variant="fade-up" delay={300 + index * 75}>
                    <div className="flex items-start gap-4 border-l-4 border-red-200 pl-4 py-2">
                      <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <problem.icon className="w-4 h-4 text-red-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{problem.title}</h4>
                        <p className="text-xs text-muted-foreground">{problem.description}</p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
          
          {/* How it works */}
          <AnimateOnScroll variant="fade-left" delay={250}>
            <div className="bg-card border border-border rounded-xl p-6 h-full">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold text-foreground">Как это работает</h3>
              </div>
              
              <div className="relative">
                {steps.map((step, index) => (
                  <AnimateOnScroll key={step.title} variant="fade-up" delay={300 + index * 75}>
                    <div className={`flex items-start gap-4 pb-6 ${step.faded ? 'opacity-50' : ''}`}>
                      <div className="relative flex flex-col items-center">
                        <div className="w-4 h-4 bg-accent rounded-full z-10"></div>
                        {index < steps.length - 1 && (
                          <div className="w-0.5 h-full bg-accent/30 absolute top-4"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-foreground text-sm">{step.title}</h4>
                          <span className="text-xs text-muted-foreground">{step.number}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
        
        {/* Advantages bar */}
        <AnimateOnScroll variant="fade-up" delay={600}>
          <div className="mt-8 bg-primary rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-primary-foreground/70 text-sm uppercase tracking-wider">Преимущества:</span>
            <div className="flex flex-wrap justify-center gap-6">
              {advantages.map((adv) => (
                <div key={adv.label} className="flex items-center gap-2 text-primary-foreground">
                  <adv.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{adv.label}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
