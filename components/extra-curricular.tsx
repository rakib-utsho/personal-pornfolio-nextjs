import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ExtraCurricular() {
  const activities = [
    {
      title: "Open Source Contributor",
      description:
        "Active contributor to popular React and Node.js libraries. Maintained several packages with 10k+ downloads.",
      image: "/open-source-code-contribution-github.png",
    },
    {
      title: "Tech Meetup Speaker",
      description:
        "Regular speaker at local tech meetups and conferences, sharing knowledge about modern web development.",
      image: "/tech-conference-speaker-presentation.png",
    },
    {
      title: "Coding Bootcamp Mentor",
      description: "Volunteer mentor helping aspiring developers learn programming fundamentals and best practices.",
      image: "/coding-mentorship-teaching-programming.png",
    },
  ]

  return (
    <section id="extra-curricular" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16">Extra Curricular Activities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-primary">{activity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
