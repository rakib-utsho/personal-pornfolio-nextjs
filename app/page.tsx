import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { ExtraCurricular } from "@/components/extra-curricular"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ViewMyWork } from "@/components/view-my-work"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      {/* <ViewMyWork /> */}
      <Projects />
      <ExtraCurricular />
      <Contact />
      <Footer />
    </main>
  )
}
