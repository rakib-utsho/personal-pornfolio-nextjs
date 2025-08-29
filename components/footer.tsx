"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, ArrowUp, Heart, Code2 } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/rakib-utsho", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/md-rakibutsho-cse", label: "LinkedIn" },
    // { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:rakibutsho1920@gmail.com", label: "Email" },
  ]

  return (
    <footer className="relative bg-slate-950/50 border-t border-slate-800/50 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-emerald-600/5" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          {/* Brand and Social Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Full Stack Developer</h3>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 bg-slate-800/50 hover:bg-gradient-to-r hover:from-blue-500 hover:to-emerald-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Copyright and Back to Top */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>© {currentYear} Made with</span>
              <Heart className="w-4 h-4 text-emerald-500 animate-pulse" />
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 group"
            >
              <span className="text-sm">Back to top</span>
              <div className="w-8 h-8 bg-slate-800/50 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-emerald-500 rounded-full flex items-center justify-center transition-all duration-300">
                <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
