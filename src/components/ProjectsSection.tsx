import React, { useState } from 'react';
import { CheckCircleIcon, BotIcon, MailIcon, DatabaseIcon, UsersIcon, Share2Icon, FileTextIcon, PanelTop, Server, Smartphone, GitMerge } from 'lucide-react';
import { ScribbleElement } from './ScribbleElement';

export const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const projects = [
    {
      title: '24/7 Intelligent Customer Support',
      description: 'Deploy AI agents that understand your business context, answer customer questions instantly, and handle support tickets autonomously. Your chatbot learns from your documentation, FAQs, and past conversations to provide accurate, personalized responses.',
      benefits: [
        'Reduce response time from hours to seconds',
        'Handle unlimited conversations simultaneously',
        'Decrease support costs by up to 70%',
        'Capture leads even while you sleep',
      ],
      icon: <BotIcon className="text-blue-400" />,
      category: 'AI Customer Support Agent'
    },
    {
      title: 'Smart Email Management & Scheduling',
      description: 'AI agents that read, categorize, and respond to emails based on your preferences. Automatically schedule meetings, send follow-ups, and manage your calendar without manual intervention.',
      benefits: [
        'Save 10+ hours per week on email management',
        'Never miss important follow-ups',
        'Intelligent meeting scheduling with conflict resolution',
        'Auto-generated meeting summaries and action items',
      ],
      icon: <MailIcon className="text-purple-400" />,
      category: 'Email & Calendar Automation'
    },
    {
      title: 'Automated Data Processing',
      description: 'Eliminate manual data entry with AI agents that extract information from documents, emails, and forms, then populate your CRM or databases automatically with 99% accuracy.',
      benefits: [
        'Reduce data entry errors to near zero',
        'Process 100x faster than manual entry',
        'Auto-sync across multiple platforms',
        'Real-time data validation and enrichment',
      ],
      icon: <DatabaseIcon className="text-green-400" />,
      category: 'Data Entry & CRM Automation'
    },
    {
      title: 'Intelligent Lead Management',
      description: "AI agents that engage with leads, qualify them based on your criteria, and nurture them through personalized follow-up sequences until they\'re ready to buy.",
      benefits: [
        'Qualify leads 24/7 automatically',
        'Personalized outreach at scale',
        'Increase conversion rates by 40%',
        'Focus your team on hot prospects only',
      ],
      icon: <UsersIcon className="text-yellow-400" />,
      category: 'Lead Qualification & Nurturing'
    },
    {
      title: 'Automated Social Presence',
      description: 'AI agents that schedule posts, respond to comments and DMs, monitor brand mentions, and engage with your audience across all platforms while maintaining your brand voice.',
      benefits: [
        'Maintain consistent posting schedule',
        'Instant responses to customer inquiries',
        'Monitor brand sentiment in real-time',
        'Grow engagement without full-time staff',
      ],
      icon: <Share2Icon className="text-red-400" />,
      category: 'Social Media Management'
    },
    {
      title: 'Smart Document Automation',
      description: 'AI agents that read invoices, contracts, and forms, extract key information, route documents for approval, and trigger workflows automatically based on content.',
      benefits: [
        'Process documents 50x faster',
        'Eliminate manual document sorting',
        'Auto-generate reports and summaries',
        'Ensure compliance with automated checks',
      ],
      icon: <FileTextIcon className="text-cyan-400" />,
      category: 'Document Processing & Workflows'
    },
  ];

  const websitesContent = [
    {
      title: 'High-Performance Web Development',
      description: 'We deliver high-speed static websites and professional WordPress solutions designed to serve as a robust digital foundation for your brand. Our development process prioritizes SEO optimization, clean architecture, and responsive design to ensure your business maintains a premium online presence across all devices.',
      benefits: [
        'Optimized for superior search engine rankings (SEO)',
        'Industry-leading page load speeds for better conversion',
        'Intuitive content management systems (CMS) for easy updates',
        'Fully responsive layouts tailored for mobile and desktop users',
      ],
      icon: <PanelTop className="text-blue-400" />,
      category: 'Static & WordPress Solutions'
    },
    {
      title: 'SaaS & Custom Web Applications',
      description: 'Transform your business logic into a scalable digital product. We specialize in building complex, database-driven web applications and SaaS platforms using a hybrid approach of custom code and advanced low-code tools like WeWeb. Our solutions are engineered for security, scalability, and seamless user experiences.',
      benefits: [
        'Scalable cloud architecture ready for enterprise growth',
        'Secure user authentication and data encryption',
        'Custom dashboards and internal management systems',
        'Seamless integration with your existing business APIs',
      ],
      icon: <Server className="text-purple-400" />,
      category: 'Web Application Development'
    },
    {
      title: 'Mobile Application Development',
      description: 'Accelerate your mobile strategy with feature-rich applications for iOS and Android. Utilizing Bubble.io, we develop and deploy complex, native-feel mobile experiences—including marketplaces and service platforms—in a fraction of the time required by traditional development cycles.',
      benefits: [
        'Rapid MVP deployment for faster market entry',
        'Single-codebase efficiency for both iOS and Android',
        'Complex database logic and real-time user management',
        'Continuous deployment for seamless application updates',
      ],
      icon: <Smartphone className="text-green-400" />,
      category: 'Mobile-Native Solutions'
    },
    {
      title: 'Full-Stack Digital Ecosystems',
      description: 'Beyond standalone applications, we specialize in creating integrated ecosystems where your website, mobile app, and automation workflows operate in total synchronization. This holistic approach ensures that every digital touchpoint contributes to a unified data stream and an efficient operational flow.',
      benefits: [
        'Centralized data management across all platforms',
        'Automated synchronization between web and mobile apps',
        'Reduced technical debt through unified architecture',
        'Future-proofed infrastructure built for long-term stability',
      ],
      icon: <GitMerge className="text-yellow-400" />,
      category: 'Integrated Digital Strategy'
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our{' '}
            <span className="text-5xl font-caveat font-semibold bg-gradient-to-r from-blue-200 to-purple-300 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <ScribbleElement type="arrow" position="top-left" color="#60A5FA" rotation={-15} />
          <ScribbleElement type="note" text="see our capabilities!" position="bottom-right" color="#60A5FA" />
          <p className="text-gray-400 max-w-xl mx-auto">
            Explore how our AI-powered automation can revolutionize your business operations.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="bg-white/5 border border-gray-700 rounded-full p-1 flex space-x-1">
              <button
                onClick={() => setActiveTab('ai')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'ai' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:bg-white/10'
                }`}
              >
                AI Solutions
              </button>
              <button
                onClick={() => setActiveTab('websites')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'websites' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:bg-white/10'
                }`}
              >
                Websites
              </button>
            </div>
          </div>
        </div>
        <div 
          key={activeTab}
          className={`grid grid-cols-1 md:grid-cols-2 ${activeTab === 'ai' ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-8 fade-in`}
        >
          {(activeTab === 'ai' ? projects : websitesContent).map((project, index) => (
            <div key={index} className="backdrop-blur-lg bg-white/5 border border-gray-700 rounded-xl overflow-hidden transition-all duration-500 ease-in-out hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] h-full flex flex-col">
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4 p-3 inline-block backdrop-blur-md bg-white/5 border border-gray-700 rounded-lg group-hover:bg-white/10 group-hover:border-purple-500/30 transition-all self-start">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm flex-grow">{project.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">
                    Key Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {project.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircleIcon size={16} className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <span className="px-3 py-1 text-xs backdrop-blur-md bg-black/30 border border-gray-700 rounded-full">
                        {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl parallax-bg"></div>
    </section>
  );
};
