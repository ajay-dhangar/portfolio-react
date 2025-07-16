import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Building } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ExperienceProps {
  darkMode: boolean;
}

interface ExperienceItem {
  id: number;
  position: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experienceRef = useRef<HTMLDivElement>(null);

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      position: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: [
        'Led development of enterprise-scale web applications serving 100K+ users',
        'Architected microservices infrastructure reducing response time by 40%',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines and automated testing strategies',
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL'],
    },
    {
      id: 2,
      position: 'Frontend Developer',
      company: 'Digital Creative Agency',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: [
        'Developed responsive web applications using modern frontend frameworks',
        'Collaborated with designers to implement pixel-perfect UI components',
        'Optimized application performance achieving 95+ Lighthouse scores',
        'Integrated RESTful APIs and GraphQL endpoints',
      ],
      technologies: ['React', 'Vue.js', 'SASS', 'GraphQL', 'Jest', 'Webpack'],
    },
    {
      id: 3,
      position: 'Web Developer',
      company: 'StartUp Hub',
      location: 'Austin, TX',
      period: '2019 - 2020',
      description: [
        'Built MVP applications for multiple startup clients',
        'Implemented user authentication and authorization systems',
        'Designed and developed RESTful APIs using Node.js and Express',
        'Maintained and optimized existing codebases',
      ],
      technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'HTML5', 'CSS3'],
    },
    {
      id: 4,
      position: 'Junior Developer',
      company: 'WebCraft Studios',
      location: 'Remote',
      period: '2018 - 2019',
      description: [
        'Developed custom WordPress themes and plugins',
        'Created responsive websites for small businesses',
        'Collaborated with cross-functional teams using Agile methodology',
        'Participated in client meetings and technical requirement gathering',
      ],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'jQuery', 'Bootstrap', 'MySQL'],
    },
  ];

  useEffect(() => {
    const elements = experienceRef.current?.querySelectorAll('.animate-on-scroll');
    
    elements?.forEach((element, index) => {
      gsap.fromTo(
        element,
        { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
        {
          x: 0,
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

    // Animate timeline line
    const timelineLine = experienceRef.current?.querySelector('.timeline-line');
    if (timelineLine) {
      gsap.fromTo(
        timelineLine,
        { height: '0%' },
        {
          height: '100%',
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timelineLine,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="experience"
      ref={experienceRef}
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-on-scroll text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Experience
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              My professional journey and career highlights
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 ${
              darkMode ? 'bg-gray-600' : 'bg-gray-300'
            } h-full`}>
              <div className="timeline-line w-full bg-gradient-to-b from-purple-500 to-blue-500 h-0" />
            </div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className={`animate-on-scroll relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 ${
                    darkMode 
                      ? 'bg-gray-800 border-purple-500' 
                      : 'bg-white border-purple-500'
                  } z-10`} />

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  } md:w-1/2`}>
                    <div className={`${
                      darkMode ? 'bg-gray-700' : 'bg-white'
                    } rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300`}>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className={`text-xl font-bold mb-2 ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {experience.position}
                          </h3>
                          <div className={`flex items-center gap-2 mb-2 ${
                            darkMode ? 'text-purple-400' : 'text-purple-600'
                          }`}>
                            <Building size={16} />
                            <span className="font-medium">{experience.company}</span>
                          </div>
                          <div className={`flex items-center gap-4 text-sm ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{experience.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <ul className={`mb-6 space-y-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {experience.description.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-purple-500 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              darkMode 
                                ? 'bg-gray-600 text-gray-300' 
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;