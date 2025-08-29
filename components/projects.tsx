"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with user authentication, payment processing, and admin dashboard. Built with modern technologies for optimal performance.",
      image: "/modern-ecommerce-interface-dashboard.png",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: { stars: 124, forks: 32 },
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates and team collaboration features. Streamlines workflow for remote teams.",
      image: "/task-management-dashboard.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: { stars: 89, forks: 21 },
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather dashboard with location-based forecasts and interactive charts. Features real-time data and responsive design.",
      image: "/weather-dashboard.png",
      technologies: ["Vue.js", "Chart.js", "Weather API", "CSS Grid"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: { stars: 67, forks: 15 },
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-background via-muted/5 to-background">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primary via-emerald-500 to-primary bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise across the full development stack
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <Card className="overflow-hidden border-0 bg-gradient-to-br from-card/60 to-card/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <div className="relative aspect-video overflow-hidden">
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-gradient-to-r from-primary to-emerald-500 text-white border-0">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500" />
                      {project.stats.stars}
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-primary group-hover:text-primary/90 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-background/60 hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 transition-all duration-300 group/btn"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group/btn"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
