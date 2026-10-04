import { useState } from "react";
import { Button } from "@/components/Button";
import { TypeAnimation } from "react-type-animation";

import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
} from "lucide-react";

import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Java",
  "JavaScript",
  "Next.js",
  "TypeScript",
  "Socket.IO",
  "REST APIs",
  "MySQL",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Docker",
  "AWS",
];

export const Hero = () => {
  const [particles] = useState(() =>
    Array.from({ length: 25 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
    }))
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-aurora" />

        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/70 to-background" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full opacity-50"
            style={{
              backgroundColor: "#ef4444",
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: `slow-drift ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-8">

            {/* Intro Label */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 text-sm text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Computer Science Undergraduate
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-5">

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-in animation-delay-100">
                Hi, I'm{" "}
                <span className="text-primary glow-text">
                  Jaswanth.
                </span>

                <br />

                <span className="font-serif italic font-normal text-white">
                  I create, solve, and keep improving.
                </span>
              </h1>

              {/* Role Animation */}
              <div className="text-xl md:text-2xl font-medium text-muted-foreground animate-fade-in animation-delay-200">
                <TypeAnimation
                  sequence={[
                    "Aspiring Software Engineer",
                    2000,
                    "Full Stack Developer",
                    2000,
                    "Problem Solver",
                    2000,
                    "Computer Science Student",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>

              {/* Description */}
              <p className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-in animation-delay-300">
                I'm a Computer Science undergraduate at{" "}
                <span className="text-white font-medium">
                  IIIT Sri City
                </span>
                , passionate about software development,
                problem-solving, and building practical solutions
                to real-world problems.
              </p>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">

              <a href="#projects">
                <Button size="lg">
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>

              <a href="/The Resume.pdf" download>
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download Resume
                </AnimatedBorderButton>
              </a>

            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 animate-fade-in animation-delay-500">

              <span className="text-sm text-muted-foreground">
                Find me on
              </span>

              <a
                href="https://github.com/Jaswanth-m25"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full glass hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/jaswanth-medisetti-830478318/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full glass hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

            </div>

          </div>

          {/* RIGHT - IMAGE */}
          <div className="relative animate-fade-in animation-delay-300">

            <div className="relative max-w-sm mx-auto">

              {/* Glow */}
              <div
                className="
                  absolute inset-0
                  rounded-3xl
                  bg-primary/20
                  blur-3xl
                  scale-90
                "
              />

              {/* Image */}
              <div className="relative glass rounded-3xl p-2 glow-border">

                <img
                  src="/my-img.jpeg"
                  alt="Jaswanth Medisetti"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Availability */}
                <div className="absolute -bottom-5 -right-5 glass rounded-xl px-4 py-3">

                  <div className="flex items-center gap-3">

                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />

                    <div>
                      <p className="text-xs text-muted-foreground">
                        Currently
                      </p>

                      <p className="text-sm font-medium text-white">
                        Open to Opportunities
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Technologies */}
        <div className="mt-24 animate-fade-in animation-delay-600">

          <div className="flex items-center gap-4 mb-6">

            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
              Technologies
            </span>

            <div className="h-px bg-border/50 flex-1" />

          </div>

          <div className="relative overflow-hidden">

            {/* Left Fade */}
            <div
              className="
                absolute left-0 top-0 bottom-0
                w-24
                bg-gradient-to-r
                from-background
                to-transparent
                z-10
              "
            />

            {/* Right Fade */}
            <div
              className="
                absolute right-0 top-0 bottom-0
                w-24
                bg-gradient-to-l
                from-background
                to-transparent
                z-10
              "
            />

            <div className="flex animate-marquee">

              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-6"
                >
                  <span className="text-sm font-medium text-muted-foreground/60 hover:text-primary transition-colors">
                    {skill}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* Scroll */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2">

        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">
            Scroll
          </span>

          <ChevronDown className="w-5 h-5 animate-bounce" />

        </a>

      </div>

    </section>
  );
};