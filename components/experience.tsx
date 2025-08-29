"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description:
        "Lead development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and implemented CI/CD pipelines that reduced deployment time by 60%.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
      achievements: [
        "Led a team of 5 developers on enterprise-level projects",
        "Improved application performance by 45% through optimization",
        "Implemented microservices architecture serving 100k+ users",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description:
        "Built and maintained multiple client projects using modern web technologies. Collaborated with design team to implement pixel-perfect UIs and enhanced user engagement by 35%.",
      technologies: ["Next.js", "Python", "Django", "MongoDB", "GraphQL"],
      achievements: [
        "Delivered 15+ client projects on time and within budget",
        "Reduced API response times by 50% through optimization",
        "Mentored 3 junior developers and conducted code reviews",
      ],
    },
    {
      title: "Frontend Developer",
      company: "WebSolutions Ltd.",
      period: "2019 - 2020",
      description:
        "Developed responsive web applications and improved site performance by 40%. Worked closely with UX designers to enhance user experience and accessibility standards.",
      technologies: ["JavaScript", "React", "Sass", "REST APIs", "Git"],
      achievements: [
        "Improved website loading speed by 40% through optimization",
        "Implemented responsive designs for 20+ client websites",
        "Achieved 98% accessibility compliance across all projects",
      ],
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
      x: -50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-muted/20 via-background to-muted/10">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primary via-emerald-500 to-primary bg-clip-text text-transparent mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey of growth, innovation, and impactful contributions across diverse tech environments
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block z-10"></div>

                <Card className="md:ml-20 border-0 bg-gradient-to-br from-card/60 to-card/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <CardHeader className="relative z-10 pb-4">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl text-primary group-hover:text-primary/90 transition-colors duration-300">
                          {exp.title}
                        </CardTitle>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <p className="text-lg font-semibold text-foreground">{exp.company}</p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className="w-fit bg-primary/10 border-primary/30 text-primary font-medium px-4 py-2"
                      >
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10 space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-base">{exp.description}</p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="w-1 h-1 rounded-full bg-primary/60 mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs bg-background/60 hover:bg-primary/20 hover:text-primary transition-colors duration-300 cursor-default"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
