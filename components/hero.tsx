"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Eye } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.4, ease: "easeOut" },
    },
  };

  const arrowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, delay: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="text-center container mx-auto relative z-10">
        {/* Name with Bangladesh Flag */}
        <motion.div
          variants={textVariants}
          className="pb-3"
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance flex items-center justify-center gap-3">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary via-emerald-500 to-primary bg-clip-text text-transparent animate-pulse">
              Md. Rakibul Islam
            </span>
          </h1>
          <h3 className="text-2xl md:text-3xl text-muted-foreground mb-4 text-balance flex items-center justify-center gap-3">
            I am a Full Stack Developer from Bangladesh{" "}
            <span className="inline-block animate-bounce">
              {" "}
              <Image
                src="https://flagcdn.com/w40/bd.png"
                alt="Bangladesh Flag"
                width={40}
                height={30}
                className="rounded shadow-md"
              />
            </span>
          </h3>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Full Stack Developer passionate about creating{" "}
            <span className="text-primary font-semibold">
              innovative web solutions
            </span>{" "}
            with modern technologies and clean, efficient code.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 bg-transparent border-2 hover:bg-primary/10 hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Download Resume
          </Button>
        </motion.div>

        {/* Scroll Down Arrow */}
        <motion.div
          variants={arrowVariants}
          initial="hidden"
          animate="visible"
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="inline-flex flex-col items-center gap-2 cursor-pointer group"
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                aboutSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          >
            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
              Scroll to explore
            </span>
            <ArrowDown className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}