import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
  {
    number: "01",
    title: "Programming Languages",
    tech: ["C", "Java", "Python", "JavaScript"],
  },

  {
    number: "02",
    title: "Frontend Development",
    tech: [
      "HTML",
      "CSS",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },

  {
    number: "03",
    title: "Backend Development",
    tech: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "Socket.IO",
    ],
  },

  {
    number: "04",
    title: "Artificial Intelligence",
    tech: [
      "Machine Learning",
      "Deep Learning",
    ],
  },

  {
    number: "05",
    title: "Databases",
    tech: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
    ],
  },

  {
    number: "06",
    title: "Libraries",
    tech: [
      "NumPy",
      "Pandas",
      "Matplotlib",
    ],
  },

  {
    number: "07",
    title: "Tools & Platforms",
    tech: [
      "Git",
      "GitHub",
      "AWS",
      "Docker",
      "Postman",
      "VS Code",
    ],
  },

  {
    number: "08",
    title: "Coursework",
    tech: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
      "Computer Architecture",
    ],
  },
];

export const Skills = () => {
  return (
    <section
  id="skills"
  className="py-32 relative overflow-hidden"
>

<div className="text-center mx-auto max-w-3xl mb-16">
  <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
    My Skills
  </span>

  <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
    Technologies I
    <span className="font-serif italic font-normal text-white">
      {" "}Work With.
    </span>
  </h2>

  <p className="text-muted-foreground">
    A collection of technologies, tools, and concepts I use
    to build scalable and modern applications.
  </p>
</div>

      <div className="max-w-6xl mx-auto">
  <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="skill-line"></div>
            <div className="skill-number">
  {skill.number}
</div>

<h3>{skill.title}</h3>

<div className="tech-list">
  {skill.tech.map((item) => (
    <span>{item}</span>
  ))}
</div>

            <p>{skill.description}</p>
          </motion.div>
        ))}
        </div>
</div>

    </section>
  );
};