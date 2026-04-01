import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PartnersSection } from "@/components/partners-section"
import { TechnicalMaintenanceSection } from "@/components/technical-maintenance-section"
import { CleaningSection } from "@/components/cleaning-section"
import { WorkflowAdvantageSection } from "@/components/workflow-advantage-section"
import { WorkflowFeaturesSection } from "@/components/workflow-features-section"
import { DocumentWorkflowSection } from "@/components/document-workflow-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
        <WorkflowAdvantageSection />
        <WorkflowFeaturesSection />
      <TechnicalMaintenanceSection />
      <CleaningSection />
      <DocumentWorkflowSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
