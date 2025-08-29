"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import icpcImg from "@/assets/extra/1699213254520.jpeg"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

export function ExtraCurricular() {
  const activities = [
    {
      title: "ICPC Asia Dhaka Regional Contestant 2023",
      description:
        "Hosted by BUBT. Served as Volunteer Committee Lead, working closely with the organizing committee to ensure a smooth contest experience. Led the volunteer team in managing contest rooms, providing technical and logistical support, and assisting participants and officials.",
      image: icpcImg,
    },
    {
      title: "ICPC Asia Dhaka Regional Preliminary Contest 2021",
      description:
        "Participated in the preliminary round of ICPC Asia Dhaka Regional Contest 2021, solving algorithmic and problem-solving challenges as part of a competitive programming team.",
      image: "https://images.unsplash.com/photo-1743090661056-e51700546169",
    },
    {
      title: "Workshop on Machine Learning",
      description:
        "Participated in a hands-on workshop on Machine Learning, gaining practical experience with core ML concepts and applications.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    },
  ]

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
  }

  // Component for card content with "Read More"
  function CardDescription({ text }: { text: string }) {
    const [expanded, setExpanded] = useState(false)
    const maxLength = 150 // max characters before showing "Read More"

    const isLong = text.length > maxLength
    const displayText = expanded || !isLong ? text : text.slice(0, maxLength) + "..."

    return (
      <p className="text-muted-foreground leading-relaxed">
        {displayText}
        {isLong && (
          <button
            className="text-primary ml-1 underline hover:text-emerald-500"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
      </p>
    )
  }

  return (
    <section id="extra-curricular" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold bg-gradient-to-r from-primary via-emerald-500 to-primary bg-clip-text text-transparent"
          >
            Leadership & Participation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg mt-3"
          >
            A showcase of my competitive programming journey, workshops, and volunteer leadership
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              whileHover={{
                scale: 1.03,
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                {/* Image */}
                <div className="relative w-full h-48">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    unoptimized={typeof activity.image === "string"}
                    className="object-cover"
                  />
                </div>

                {/* Header */}
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{activity.title}</CardTitle>
                </CardHeader>

                {/* Content with fixed height */}
                <CardContent className="flex-1">
                  <CardDescription text={activity.description} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
