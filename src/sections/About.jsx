import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,

    title: "Full Stack Development",

    description:
      "Building scalable and modern web applications using React.js, Node.js, Express.js, and MongoDB.",
  },

  {
    icon: Rocket,

    title: "Performance & Scalability",

    description:
      "Creating responsive, optimized, and high-performance applications with smooth user experiences.",
  },

  {
    icon: Users,

    title: "Real-World Solutions",

    description:
      "Developing practical systems including ecommerce platforms, booking systems, and real-time applications.",
  },

  {
    icon: Lightbulb,

    title: "Continuous Learning",

    description:
      "Exploring modern technologies, AI concepts, and best development practices to improve every day.",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">

            {/* Small Heading */}
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Turning ideas into
              <span className="font-serif italic font-normal text-white">
                {" "}
                impactful digital products.
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-5 text-muted-foreground leading-relaxed animate-fade-in animation-delay-200">

              <p>
                Hi, I'm{" "}
                <span className="text-white font-semibold">
                  Jaswanth Medisetti
                </span>
                , a Computer Science undergraduate at IIIT Sri City
                with a strong passion for full-stack web development
                and modern software engineering.
              </p>

              <p>
                I specialize in building scalable web applications
                using technologies like React.js, Node.js,
                Express.js, MongoDB, and JavaScript. My focus is on
                creating responsive, user-friendly interfaces combined
                with robust backend systems and real-world functionality.
              </p>

              <p>
                I have developed several projects including a
                Fashion Ecommerce Platform, Real-Time Chat Application,
                and Hotel Room Booking System with features like
                authentication, payment integration, analytics,
                inventory management, and real-time communication.
              </p>

              <p>
                Apart from development, I am deeply interested in
                Data Structures & Algorithms, Operating Systems,
                DBMS, Computer Networks, and Artificial Intelligence.
                I continuously explore new technologies and improve
                my problem-solving and development skills.
              </p>
            </div>

            {/* Quote Box */}
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">

              <p className="text-lg font-medium italic text-foreground leading-relaxed">
                "I believe technology should not only solve problems
                but also create meaningful and seamless experiences
                for users through clean design and efficient systems."
              </p>
            </div>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="grid sm:grid-cols-2 gap-6">

            {highlights.map((item, idx) => (

              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in hover:border-primary/30 transition-all duration-300"
                style={{
                  animationDelay: `${(idx + 1) * 100}ms`,
                }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-all duration-300">

                  <item.icon className="w-6 h-6 text-primary" />

                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};