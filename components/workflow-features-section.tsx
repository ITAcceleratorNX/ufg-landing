"use client"

import { Calendar, Wrench, MessageCircle, Lightbulb, Heart, Cpu, Droplets, Monitor } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"

const features = [
  {
    icon: Calendar,
    number: "01",
    title: "Бронь переговорных",
    description: "Полный цикл: выбор офиса, комнаты, слотов и управление своими бронированиями.",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Сервисные заявки",
    description: "Создание тикетов, отслеживание статусов выполнения и история всех обращений.",
  },
  {
    icon: MessageCircle,
    number: "03",
    title: "ИИ-чат помощник",
    description: "Мгновенные ответы на вопросы и помощь в навигации по офисным сервисам.",
  },
  {
    icon: Lightbulb,
    number: "04",
    title: "Умный офис",
    description: "Управление IoT-устройствами: свет, розетки, шторы и климат-контроль со смартфона.",
  },
  {
    icon: Heart,
    number: "05",
    title: "Здоровье",
    description: "Мониторинг здоровья сотрудников, встроенный шагомер и интеграция со смарт-часами.",
  },
  {
    icon: Cpu,
    number: "06",
    title: "Высокие технологии",
    description: "Энергосбережение, замкнутый водооборот, управление микроклиматом и wellbeing (Harvard/Oxford).",
  },
  {
    icon: Droplets,
    number: "07",
    title: "Сокращение водопотребления",
    description: "Сократить водопотребление на 40% через систему фильтрации и повторного использования серых вод.",
  },
  {
    icon: Monitor,
    number: "08",
    title: "Демо-режим",
    description: "Гостевой вход для ознакомления с функционалом без обязательной регистрации.",
  },
]

export function WorkflowFeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimateOnScroll variant="fade-up">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
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
            
            <button className="text-accent font-semibold uppercase tracking-wider text-sm hover:underline">
              Модули системы
            </button>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll variant="fade-up" delay={100}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            WorkFlow — единый корпоративный кабинет
          </h2>
          <p className="text-muted-foreground mb-12 max-w-3xl">
            Интеллектуальный софт, который трансформирует бизнес-процессы и делает офис по-настоящему умным
          </p>
        </AnimateOnScroll>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <AnimateOnScroll key={feature.title} variant="fade-up" delay={150 + index * 50}>
              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature.number}</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        
        <AnimateOnScroll variant="fade-up" delay={600}>
          <div className="mt-8 bg-accent/10 rounded-xl p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-sm text-muted-foreground">
              Умный офис использует данные международных университетов и подтвержденных научных исследований для улучшения условий здоровья в офисе.
            </p>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll variant="fade-up" delay={650}>
          <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Мобильное приложение</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Веб-версия</span>
            </div>
            <div className="ml-auto">
              <span className="text-xs">TMK WORKFLOW v2.0</span>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
