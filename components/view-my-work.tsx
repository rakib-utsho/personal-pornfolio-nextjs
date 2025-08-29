"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Eye, Code, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function ViewMyWork() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const featuredWork = [
    {
      title: "Full-Stack E-Commerce Platform",
      description:
        "Complete e-commerce solution with advanced features including real-time inventory, payment processing, admin dashboard, and analytics.",
      image: "/modern-ecommerce-interface-dashboard.png",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full-Stack",
      complexity: "Advanced",
      features: ["Payment Integration", "Real-time Updates", "Admin Dashboard", "Analytics"],
    },
    {
      title: "Collaborative Task Management",
      description:
        "Enterprise-grade task management with real-time collaboration, team workspaces, and advanced project tracking capabilities.",
      image: "/task-management-dashboard.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web App",
      complexity: "Intermediate",
      features: ["Real-time Collaboration", "Team Management", "File Sharing", "Notifications"],
    },
    {
      title: "Weather Intelligence Dashboard",
      description:
        "Advanced weather analytics platform with predictive modeling, interactive maps, and comprehensive climate data visualization.",
      image: "/weather-dashboard.png",
      technologies: ["Vue.js", "D3.js", "Python", "Weather APIs", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Data Visualization",
      complexity: "Intermediate",
      features: ["Interactive Maps", "Predictive Analytics", "Data Visualization", "API Integration"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto max-w-7xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-emerald-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-primary/20"
          >
            <Eye className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">View My Work</span>
          </motion.div>

          <h2 className="text-6xl font-bold bg-gradient-to-r from-primary via-emerald-500 to-primary bg-clip-text text-transparent mb-6 text-balance">
            Crafted with Precision
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of full-stack applications, each built with modern technologies and best practices to
            deliver exceptional user experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {featuredWork.map((work, index) => (
            <motion.div key={index} variants={cardVariants} className="group">
              <Card
                className={`overflow-hidden border-0 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex flex-col lg:flex`}
              >
                {/* Image Section */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <div className="aspect-video lg:aspect-auto lg:h-full relative">
                    <img
                      src={work.image || "/placeholder.svg"}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Floating Action Buttons */}
                    <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <Button
                        size="sm"
                        className="bg-background/90 hover:bg-background text-foreground backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="bg-background/90 hover:bg-background text-foreground backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-gradient-to-r from-primary to-emerald-500 text-white border-0 shadow-lg">
                        <Code className="w-3 h-3 mr-1" />
                        {work.category}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <CardContent className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="bg-background/60">
                        <Zap className="w-3 h-3 mr-1 text-primary" />
                        {work.complexity}
                      </Badge>
                    </div>

                    <h3 className="text-3xl font-bold text-primary group-hover:text-primary/90 transition-colors duration-300">
                      {work.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed text-lg">{work.description}</p>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {work.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-emerald-500 rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {work.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-background/60 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button className="flex-1 bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 transition-all duration-300 group/btn shadow-lg hover:shadow-xl">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                      View Live Project
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 bg-transparent hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group/btn"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                      View Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-card/60 to-card/40 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-primary">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with cutting-edge technology and exceptional design.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
