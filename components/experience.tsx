"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

const experiences = [
  {
    title: "Junior Frontend Developer",
    company: "SM Technology",
    period: "Apr 2025 – Present",
    description:
      "Building and deploying scalable web applications using React.js, Next.js, TypeScript, Redux, and Node.js. Managing server environments on Linux-based VPS and integrating MongoDB for data persistence. Collaborating with teams to deliver high-performance, responsive applications while reviewing code and mentoring juniors.",
    technologies: [
      "JavaScript",
      "React.js",
      "Node.js",
      "Next.js",
      "Redux",
      "MongoDB",
      "TypeScript",
      "VPS",
      "Linux",
    ],
    achievements: [
      "Implemented CI/CD pipelines, reducing deployment time by 60%",
      "Improved application performance by 45% through optimization",
      "Designed and deployed microservices architecture serving 100k+ users",
    ],
  },

  {
    title: "Full Stack Developer (Remote)",
    company: "Trodev",
    period: "Feb 2024 – Jun 2024",
    description:
      "Developed and maintained full-stack applications using PHP, JavaScript, HTML, and CSS with MongoDB for database management. Utilized GitHub for version control and collaboration. Worked closely with designers to ensure responsive, user-friendly interfaces and delivered client projects within scope and deadlines.",
    technologies: ["HTML", "CSS", "PHP", "JavaScript", "MongoDB", "GitHub"],
    achievements: [
      "Reduced API response times by 50% through backend optimization",
      "Delivered 5+ client projects successfully within deadlines",
      "Collaborated effectively in a fully remote environment",
    ],
  },

  {
    title: "Software Quality Testing (Internship)",
    company: "Bangladesh Computer Council (BCC)",
    period: "Mar 2024 – Apr 2024",
    description:
      "Performed manual and automated software testing using industry-standard testing tools. Created and maintained detailed test documentation, ensuring adherence to QA standards. Collaborated with developers to identify and resolve defects, improving system stability and usability.",
    technologies: [
      "Manual Testing",
      "Automation Tools",
      "Test Documentation",
    ],
    achievements: [
      "Identified and reported critical bugs improving system reliability",
      "Created detailed test cases and documentation for QA processes",
      "Collaborated with developers to enhance software usability",
    ],
  },
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

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
  };

  return (
    <section
      id="experience"
      className="py-20 px-4 bg-gradient-to-br from-muted/20 via-background to-muted/10"
    >
      <div className="container mx-auto" ref={ref}>
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
            A journey of growth, innovation, and impactful contributions across
            diverse tech environments
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
                          <p className="text-lg font-semibold text-foreground">
                            {exp.company}
                          </p>
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
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {exp.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
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
  );
}
