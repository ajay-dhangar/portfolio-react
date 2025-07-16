import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Download, ChevronDown, Code, Palette, Zap } from "lucide-react";

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial entrance animations
      tl.from(".hero-bg", {
        scale: 1.05,
        duration: 1.5,
        ease: "power2.out",
      })
        .from(
          ".floating-element",
          {
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          "-=1"
        )
        .from(
          ".hero-title-word",
          {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .from(
          ".hero-subtitle",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .from(
          ".hero-description",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-button",
          {
            y: 20,
            opacity: 0.8,
            scale: 0.95,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        )
        .from(
          ".hero-scroll",
          {
            y: 10,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2"
        );

      // Floating loops
      gsap.to(".floating-element-1", {
        y: -20,
        x: 10,
        rotation: 5,
        duration: 4,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(".floating-element-2", {
        y: 15,
        x: -15,
        rotation: -3,
        duration: 5,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(".floating-element-3", {
        y: -10,
        x: 20,
        rotation: 8,
        duration: 6,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Bouncing scroll
      gsap.to(".hero-scroll", {
        y: 10,
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Particle animation
      const particles = particlesRef.current?.querySelectorAll(".particle");
      particles?.forEach((particle, index) => {
        gsap.to(particle, {
          y: -100 - Math.random() * 200,
          x: (Math.random() - 0.5) * 200,
          opacity: 0,
          duration: 3 + Math.random() * 2,
          delay: index * 0.1,
          repeat: -1,
          ease: "power2.out",
        });
      });

      // Shimmer text effect
      // gsap.to(".shimmer", {
      //   backgroundPosition: "200% center",
      //   duration: 2,
      //   ease: "none",
      //   repeat: 1,
      // });
    }, heroRef);

    return () => ctx.revert(); // clean up on unmount
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const titleWords = ["Hi,", "I'm", "Ajay", "Dhangar"];

  return (
    <section
    id="home"
      ref={heroRef}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Background & Particles */}
      <div className="hero-bg absolute inset-0 z-0">
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-indigo-900/30"
              : "bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"
          }`}
        />

        {/* Floating geometric shapes */}
        <div className="floating-element floating-element-1 absolute top-32 right-32 w-16 h-16 opacity-20">
          <div
            className={`w-full h-full rounded-lg ${
              darkMode ? "bg-purple-400" : "bg-purple-500"
            } transform rotate-45`}
          />
        </div>
        <div className="floating-element floating-element-2 absolute bottom-40 left-20 w-12 h-12 opacity-25">
          <div
            className={`w-full h-full rounded-full ${
              darkMode ? "bg-blue-400" : "bg-blue-500"
            }`}
          />
        </div>
        <div className="floating-element floating-element-3 absolute top-1/2 right-20 w-8 h-8 opacity-30">
          <div
            className={`w-full h-full ${
              darkMode ? "bg-indigo-400" : "bg-indigo-500"
            } transform rotate-12`}
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          />
        </div>

        {/* Particle System */}
        <div
          ref={particlesRef}
          className="absolute inset-0 pointer-events-none"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className={`particle absolute w-1 h-1 rounded-full ${
                darkMode ? "bg-white/30" : "bg-gray-400/40"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                willChange: "transform, opacity",
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div className="overflow-hidden mb-6 pt-4">
            <h1
              className={`text-3xl md:text-8xl font-bold leading-tight ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {titleWords.map((word, i) => (
                <span key={i} className="hero-title-word inline-block mr-4">
                  {word === "Ajay" || word === "Dhangar" ? (
                    <span
                      className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-[length:200%_100%] bg-clip-text text-transparent inline-block"
                      style={{ willChange: "background-position" }}
                    >
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </h1>
          </div>

          {/* Subtitle */}
          <div className="hero-subtitle flex items-center justify-center gap-4 text-xl md:text-3xl mb-6 flex-wrap">
            <div
              className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              } flex items-center gap-2`}
            >
              <Code className="text-purple-500" size={28} />
              <span>Full Stack Developer</span>
            </div>
            <span
              className={`hidden md:inline ${
                darkMode ? "text-gray-500" : "text-gray-400"
              }`}
            >
              •
            </span>
            <div
              className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              } flex items-center gap-2`}
            >
              <Palette className="text-blue-500" size={28} />
              <span>UI/UX Designer</span>
            </div>
          </div>

          {/* Description */}
          <p
            className={`hero-description text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            I craft{" "}
            <span className="text-purple-500 font-semibold">beautiful</span>,
            <span className="text-blue-500 font-semibold"> functional</span>,
            and
            <span className="text-indigo-500 font-semibold">
              {" "}
              user-centered
            </span>{" "}
            digital experiences that solve real-world problems with clean code
            and innovative design.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hero-button group relative bg-gradient-to-r from-purple-500 to-blue-500 text-white px-10 py-4 rounded-full font-semibold shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Zap size={20} />
                Let's Create Something Amazing
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <a
              href="/ajay-dhangar-resume.pdf"
              download
              className={`hero-button group flex items-center gap-3 px-10 py-4 rounded-full font-semibold border-2 transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/10"
                  : "border-gray-300 text-gray-700 hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              <Download size={20} className="group-hover:animate-bounce" />
              Download Resume
            </a>
          </div>

          {/* Skill badges */}
          <div className="hero-description flex flex-wrap justify-center gap-3 mb-16">
            {["React", "TypeScript", "Node.js", "Python", "AWS", "Design"].map(
              (skill, index) => (
                <span
                  key={skill}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 ${
                    darkMode
                      ? "bg-gray-800/50 text-gray-300 border border-gray-700"
                      : "bg-white/50 text-gray-700 border border-gray-200"
                  } backdrop-blur-sm`}
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-scroll absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        onClick={scrollToNext}
      >
        <div
          className={`flex flex-col items-center gap-3 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          } group-hover:text-purple-500 transition-colors duration-300`}
        >
          <span className="text-sm font-medium">Discover More</span>
          <div className="relative">
            <ChevronDown size={24} className="animate-bounce" />
            <div
              className={`absolute inset-0 rounded-full ${
                darkMode ? "bg-purple-500/20" : "bg-purple-500/10"
              } scale-0 group-hover:scale-150 transition-transform duration-300`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
