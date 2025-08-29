"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const technicalSkills = {
    expertise: [
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    ],
    comfortable: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    ],
    familiar: [
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Redux Toolkit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "RESTful API", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/api/api-original.svg" }, // placeholder
    ],
    tools: [
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
      { name: "Netlify", logo: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
    ],
  }

  const sectionTitles = {
    expertise: "Core Expertise",
    comfortable: "Comfortable",
    familiar: "Familiar",
    tools: "Tools",
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto" ref={ref}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primary via-emerald-500 to-primary bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and soft skills that drive innovation and success
          </p>
        </motion.div>

        {/* Technical Skills */}
        <Card className="border-0 bg-gradient-to-br from-card/50 to-card/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 mb-10">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl text-primary flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">⚡</span>
              </div>
              Technical Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-primary mb-4">{sectionTitles[category]}</h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                >
                  {skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                      className="group"
                    >
                      <div className="flex flex-col items-center p-4 rounded-xl bg-background/50 hover:bg-background/80 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                        <div className="w-12 h-12 mb-3 flex items-center justify-center">
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                            onError={(e) => (e.currentTarget.style.display = "none")}
                          />
                        </div>
                        <span className="text-sm font-medium text-center group-hover:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
