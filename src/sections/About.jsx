export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Section Heading */}
        <div className="mb-14">
          {/* <span className="text-sm uppercase tracking-[0.2em] text-primary">
            About Me
          </span> */}

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            About
            <span className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground text-white">
              {" "}
              Me
            </span>
          </h2>
        </div>

        {/* Introduction */}
        <div className="max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-lg">
            I’m{" "}
            <span className="text-white font-semibold">
              Jaswanth Medisetti
            </span>
            , a Computer Science undergraduate at{" "}
            <span className="text-white font-medium">
              IIIT Sri City
            </span>
            , with a strong interest in software development and
            problem solving.
          </p>

          <p>
            I enjoy building practical applications, understanding
            how software systems work, and continuously improving
            my technical and problem-solving abilities. I am
            particularly interested in software engineering,
            artificial intelligence, and developing solutions to
            real-world problems.
          </p>

          <p>
            My goal is to begin my career as a software engineer
            where I can apply what I have learned, work on
            meaningful projects, and continue growing as a
            developer.
          </p>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white mb-8">
            Education
          </h3>

          <div className="space-y-8">

            {/* Degree */}
            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    Indian Institute of Information Technology,
                    Sri City
                    
                  </h4>

                  <p className="mt-1 text-muted-foreground">
                   B.Tech in Computer Science and Engineering
                  </p>
                </div>

                <span className="text-sm text-muted-foreground">
                  CGPA: 7.7/10
                </span>
              </div>
            </div>

            {/* Intermediate */}
            <div className="border-l-2 border-primary/40 pl-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    Lakshya International School
                  </h4>

                  <p className="mt-1 text-muted-foreground">
                     Intermediate
                  </p>
                </div>

                <span className="text-sm text-muted-foreground">
                  Percentage: 78%
                </span>
              </div>
            </div>

            {/* School */}
            <div className="border-l-2 border-primary/20 pl-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    Aditya Talent School
                    Secondary Education
                  </h4>

                  <p className="mt-1 text-muted-foreground">
                    Class 10
                  </p>
                </div>

                <span className="text-sm text-muted-foreground">
                  Percentage: 94%
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};