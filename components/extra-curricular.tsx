"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import icpcImg from "@/assets/extra/1699213254520.jpeg"
import Image from "next/image"

export function ExtraCurricular() {
  const activities = [
    {
      title: "ICPC Asia Dhaka Regional Contestant 2023",
      description:
        "Hosted by BUBT. Served as Volunteer Committee Lead, working closely with the organizing committee to ensure a smooth contest experience. Led the volunteer team in managing contest rooms, providing technical and logistical support, and assisting participants and officials.",
      image: icpcImg, // ✅ Local image
    },
    {
      title: "ICPC Asia Dhaka Regional Preliminary Contest 2021",
      description:
        "Participated in the preliminary round of ICPC Asia Dhaka Regional Contest 2021, solving algorithmic and problem-solving challenges as part of a competitive programming team.",
      image: "https://images.unsplash.com/photo-1743090661056-e51700546169", // ✅ Remote image
    },
    {
      title: "Workshop on Machine Learning",
      description:
        "Participated in a hands-on workshop on Machine Learning, gaining practical experience with core ML concepts and applications.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995", // ✅ Remote image
    },
  ]

  return (
    <section id="extra-curricular" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Participation & Activities
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video overflow-hidden relative">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  unoptimized={typeof activity.image === "string"} // ✅ Needed for Unsplash
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  {activity.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
