"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Calendar, Code, Coffee } from "lucide-react"
import Image from "next/image"
import portfolioImg from "@/assets/Screenshot.png"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1], // cubic-bezier for "easeOut"
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-muted/10 via-background to-muted/20">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primary via-emerald-500 to-primary bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about crafting digital experiences that make a difference
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with over{" "}
                <span className="text-primary font-semibold">1 years of experience</span> building scalable web
                applications. I love turning complex problems into simple, beautiful designs and writing clean,
                efficient code.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects,
                or sharing knowledge with the developer community through blog posts and mentoring.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-gradient-to-br from-card/50 to-card/80 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary">Location</h3>
                </div>
                <p className="text-muted-foreground">Dhaka, Bangladesh</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-gradient-to-br from-card/50 to-card/80 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary">Experience</h3>
                </div>
                <p className="text-muted-foreground">1+ Years</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-gradient-to-br from-card/50 to-card/80 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Code className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary">Projects</h3>
                </div>
                <p className="text-muted-foreground">10+ Completed</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-gradient-to-br from-card/50 to-card/80 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Coffee className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary">Coffee</h3>
                </div>
                <p className="text-muted-foreground">∞ Cups</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={imageVariants} className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <Card className="relative overflow-hidden border-0 shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={portfolioImg}
                      alt="Alex Johnson - Full Stack Developer"
                      className="w-full h-auto rounded-lg group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
