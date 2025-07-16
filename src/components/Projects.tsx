import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration',
      longDescription: 'A comprehensive e-commerce platform built with modern technologies. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and admin dashboard. The application uses React for the frontend, Node.js with Express for the backend, and MongoDB for data storage.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
      githubUrl: 'https://github.com/ajay-dhangar/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.vercel.app',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates and team features',
      longDescription: 'A modern task management application designed for teams. Features include real-time collaboration, drag-and-drop task organization, team member management, due date tracking, file attachments, and project analytics. Built with React, TypeScript, and Firebase for real-time data synchronization.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      githubUrl: 'https://github.com/ajay-dhangar/task-manager',
      liveUrl: 'https://task-manager-demo.vercel.app',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with location-based forecasts and interactive maps',
      longDescription: 'An elegant weather dashboard providing comprehensive weather information. Features include current weather conditions, 7-day forecasts, hourly predictions, interactive weather maps, location search, and weather alerts. The app uses OpenWeatherMap API and includes beautiful weather animations and responsive design.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'OpenWeather API', 'Maps', 'PWA'],
      githubUrl: 'https://github.com/ajay-dhangar/weather-dashboard',
      liveUrl: 'https://weather-dashboard-demo.vercel.app',
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Data visualization dashboard for social media metrics and insights',
      longDescription: 'A comprehensive analytics dashboard for social media managers and marketers. Features include multi-platform data integration, custom report generation, audience insights, engagement metrics, competitor analysis, and scheduled reporting. Built with React, D3.js for visualizations, and includes export functionality.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'D3.js', 'Chart.js', 'Analytics'],
      githubUrl: 'https://github.com/ajay-dhangar/social-analytics',
      liveUrl: 'https://social-analytics-demo.vercel.app',
    },
    {
      id: 5,
      title: 'Learning Management System',
      description: 'Educational platform with courses, quizzes, and progress tracking',
      longDescription: 'A complete learning management system for educational institutions and online courses. Features include course creation and management, student enrollment, quiz and assignment systems, progress tracking, discussion forums, and certificate generation. Built with React, Node.js, and PostgreSQL.',
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Education'],
      githubUrl: 'https://github.com/ajay-dhangar/lms-platform',
      liveUrl: 'https://lms-demo.vercel.app',
    },
    {
      id: 6,
      title: 'Cryptocurrency Tracker',
      description: 'Real-time crypto price tracking with portfolio management features',
      longDescription: 'A sophisticated cryptocurrency tracking application with portfolio management capabilities. Features include real-time price updates, portfolio tracking, price alerts, market news integration, technical analysis charts, and watchlist management. Built with React, TypeScript, and integrates with multiple crypto APIs.',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'TypeScript', 'Crypto API', 'Charts'],
      githubUrl: 'https://github.com/ajay-dhangar/crypto-tracker',
      liveUrl: 'https://crypto-tracker-demo.vercel.app',
    },
  ];

  useEffect(() => {
    const elements = projectsRef.current?.querySelectorAll('.animate-on-scroll');
    
    elements?.forEach((element, index) => {
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
          delay: index * 0.1,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section
      id="projects"
      ref={projectsRef}
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-on-scroll text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Featured Projects
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Some of my recent work that I'm proud of
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`animate-on-scroll group cursor-pointer ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                onClick={() => openProjectModal(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          darkMode 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Github size={16} />
                      Code
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank');
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                    >
                      <ExternalLink size={16} />
                      Live
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } rounded-2xl shadow-2xl`}>
            <button
              onClick={closeProjectModal}
              className={`absolute top-4 right-4 p-2 rounded-full transition-colors duration-200 ${
                darkMode 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <X size={24} />
            </button>
            
            <div className="p-8">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              
              <h3 className={`text-3xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {selectedProject.title}
              </h3>
              
              <p className={`text-lg mb-6 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {selectedProject.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      darkMode 
                        ? 'bg-gray-700 text-gray-300' 
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors duration-200 ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Github size={20} />
                  View Code
                </button>
                <button
                  onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;