"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative py-24 md:py-32 text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/hero-bg.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 container flex flex-col items-center text-center space-y-6">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"
        >
          Hi, I&apos;m <span className="text-white">Alvina Abdullah</span>
          <br />
          Frontend Developer
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg text-muted-foreground max-w-md"
        >
          I build accessible, responsive, and performant web applications using modern technologies.
        </motion.p>

        {/* Animated Buttons */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button asChild className="transition duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-600">
            <Link href="#contact">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="bg-slate-300 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-600"
          >
            <Link href="#projects">View Projects</Link>
          </Button>
        </motion.div>

        {/* Animated Social Icons */}
        <motion.div
          className="flex gap-4 pt-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            { Icon: Github, href: "https://github.com", label: "GitHub" },
            { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
          ].map(({ Icon, href, label }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1 + index * 0.2 }}
            >
              <Link href={href} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-600">
                  <Icon className="h-5 w-5 text-purple-500" />
                  <span className="sr-only">{label}</span>
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
