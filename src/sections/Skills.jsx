import { motion } from "framer-motion";
import {
  Code2,
  Monitor,
  Server,
  BrainCircuit,
  Database,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    icon: Code2,
    title: "Languages",
    
    technologies: ["C","Java", "Python" ]
  },

  {
    number: "02",
    icon: Monitor,
    title: "Frontend Development",
   
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "Shadcn/ui",
    ],
  },

  {
    number: "03",
    icon: Server,
    title: "Backend Development",
    
    technologies: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "REST APIs",
      "Socket.IO",
      "JWT",
    ],
  },

  {
    number: "04",
    icon: BrainCircuit,
    title: "AI ",
   
    technologies: [
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
    ],
  },

  {
    number: "05",
    icon: Database,
    title: "Data & Databases",
    
    technologies: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Firebase",
      "Prisma",
    ],
  },

  {
    number: "06",
    icon: Wrench,
    title: "Development Tools",
   
    technologies: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "VS Code",
      "Vercel",
      "Render",
      "clerk",
      "Better Auth",
      "Inngest",
      "Polar",
      "Razorpay",
      "AWS",
    ],
  },
];

const fundamentals = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
  "System Design",
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-28 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">

          {/* <div className="flex items-center gap-4 mb-5">
            <span className="text-xs uppercase tracking-[0.25em] text-primary">
              Technical Profile
            </span>

            <div className="h-px w-16 bg-primary/40" />
          </div> */}

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Technologies and
            <br />
            <span className="font-serif italic font-normal text-white">
              foundations I work with.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            A focused overview of the technologies I use to build
            applications, along with the computer science fundamentals
            that shape how I approach engineering problems.
          </p>

        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">

          {skillGroups.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.article
                key={skill.number}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  group
                  relative
                  p-7
                  rounded-2xl
                  border border-white/[0.08]
                  bg-white/[0.02]
                  hover:bg-white/[0.035]
                  hover:border-primary/25
                  transition-all
                  duration-300
                "
              >

                {/* Top Row */}
                <div className="flex items-start justify-between">

                  <div className="
                    flex
                    items-center
                    justify-center
                    w-11
                    h-11
                    rounded-xl
                    bg-primary/[0.08]
                    border border-primary/[0.12]
                    group-hover:bg-primary/[0.12]
                    transition-colors
                    duration-300
                  ">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <span className="
                    font-mono
                    text-xs
                    text-muted-foreground/30
                    tracking-wider
                  ">
                    {skill.number}
                  </span>

                </div>

                {/* Content */}
                <div className="mt-7">

                  <h3 className="
                    text-xl
                    font-semibold
                    text-white
                    tracking-tight
                  ">
                    {skill.title}
                  </h3>

                  <p className="
                    mt-2
                    text-sm
                    text-muted-foreground
                    leading-relaxed
                    max-w-lg
                  ">
                    {skill.description}
                  </p>

                </div>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">

                  {skill.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        px-3
                        py-1.5
                        rounded-md
                        text-xs
                        font-medium
                        text-muted-foreground
                        bg-white/[0.035]
                        border border-white/[0.06]
                        group-hover:text-white
                        group-hover:border-white/[0.1]
                        transition-all
                        duration-200
                      "
                    >
                      {technology}
                    </span>
                  ))}

                </div>

              </motion.article>
            );
          })}

        </div>

        {/* Core Foundations */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="
            mt-6
            rounded-2xl
            border border-white/[0.08]
            bg-white/[0.02]
            p-7
          "
        >

          <div className="
            flex
            flex-col
            md:flex-row
            md:items-center
            gap-6
          ">

            <div className="md:w-1/3">

              <p className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-primary
              ">
                Core Foundations
              </p>

              <h3 className="
                mt-2
                text-xl
                font-semibold
                text-white
              ">
                Computer Science
              </h3>

              <p className="
                mt-2
                text-sm
                text-muted-foreground
                leading-relaxed
              ">
                Fundamental concepts that support my approach
                to software engineering and problem solving.
              </p>

            </div>

            <div className="
              flex-1
              flex
              flex-wrap
              gap-3
            ">

              {fundamentals.map((item) => (
                <span
                  key={item}
                  className="
                    px-4
                    py-2.5
                    rounded-lg
                    text-sm
                    text-muted-foreground
                    border border-white/[0.08]
                    bg-white/[0.025]
                    hover:text-white
                    hover:border-primary/25
                    transition-all
                    duration-200
                  "
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};