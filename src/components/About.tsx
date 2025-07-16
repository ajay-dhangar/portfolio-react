import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = aboutRef.current?.querySelectorAll('.animate-on-scroll');
    
    elements?.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Animate skill bars
    const skillBars = aboutRef.current?.querySelectorAll('.skill-bar');
    skillBars?.forEach((bar) => {
      const width = bar.getAttribute('data-width');
      gsap.fromTo(
        bar,
        { width: '0%' },
        {
          width: width,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const skills = [
    { name: 'React & Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js & Express', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Python & Django', level: 75 },
    { name: 'AWS & DevOps', level: 70 },
  ];

  return (
    <section
      id="about"
      ref={aboutRef}
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-on-scroll text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              About Me
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Get to know more about my journey and expertise
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <div className="animate-on-scroll">
              <div className={`relative max-w-md mx-auto lg:max-w-none ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              } rounded-2xl p-8 shadow-2xl`}>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 p-1">
                  <div className={`w-full h-full rounded-2xl ${
                    darkMode ? 'bg-gray-700' : 'bg-white'
                  } flex items-center justify-center`}>
                    <div className="w-48 h-48 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                      AD
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="animate-on-scroll">
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-2xl p-8 shadow-2xl`}>
                <h3 className={`text-2xl font-bold mb-6 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Passionate Developer & Designer
                </h3>
                <p className={`text-lg mb-6 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  With over 5 years of experience in web development, I specialize in creating 
                  modern, responsive applications using cutting-edge technologies. I'm passionate 
                  about clean code, user experience, and continuous learning.
                </p>
                <p className={`text-lg mb-8 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  I enjoy working on challenging projects that push the boundaries of what's 
                  possible on the web, always striving to deliver exceptional user experiences.
                </p>

                {/* Skills */}
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className={`flex justify-between mb-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        <span className="font-medium">{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className={`w-full h-2 rounded-full ${
                        darkMode ? 'bg-gray-600' : 'bg-gray-200'
                      }`}>
                        <div
                          className="skill-bar h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                          data-width={`${skill.level}%`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;