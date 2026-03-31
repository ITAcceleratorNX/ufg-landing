import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-background tracking-tight">UFG</span>
            </Link>
            <p className="text-background/60 text-sm">
              Профессиональное управление коммерческой недвижимостью
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-background mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-background/60 text-sm hover:text-background transition-colors">Техническое обслуживание</Link></li>
              <li><Link href="#services" className="text-background/60 text-sm hover:text-background transition-colors">Профессиональный клининг</Link></li>
              <li><Link href="#workflow" className="text-background/60 text-sm hover:text-background transition-colors">WorkFlow платформа</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-background mb-4">Компания</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-background/60 text-sm hover:text-background transition-colors">О нас</Link></li>
              <li><Link href="#portfolio" className="text-background/60 text-sm hover:text-background transition-colors">Портфолио</Link></li>
              <li><Link href="#contact" className="text-background/60 text-sm hover:text-background transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-background mb-4">Контакты</h4>
            <ul className="space-y-2 text-background/60 text-sm">
              <li>+7 705 643 39 80</li>
              <li>bolesta.A@tmk-limited.com</li>
              <li>Алматы, Казахстан</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2024 UFG. Все права защищены.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-background/60 text-sm hover:text-background transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="text-background/60 text-sm hover:text-background transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
