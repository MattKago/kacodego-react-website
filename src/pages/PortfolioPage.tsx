import React, { useState } from 'react';
import { ExternalLink, ChevronDown, UsersIcon, Share2Icon, FileTextIcon, CheckCircleIcon, MessageSquare } from 'lucide-react';

type PortfolioItem = {
  name: string;
  url: string;
  logoUrl: string;
  description: string;
  category: 'Websites' | 'Web Applications' | 'Mobile Apps';
  subtitle: string;
};

const portfolioData: PortfolioItem[] = [
  {
    name: 'Documerise',
    url: 'documerise.com',
    logoUrl: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
    description: 'A powerful web application designed to bridge the gap between physical documents and digital insights. Documerise automates the conversion of bulk images into structured, categorized CSV files, eliminating manual data entry and accelerating digital transformation for businesses.',
    category: 'Web Applications',
    subtitle: 'Intelligent OCR & Data Extraction',
  },
];

const automationsData = [
  {
    name: 'Tumamzigo',
    title: 'Tumamzigo',
    subtitle: 'AI-Driven Client Onboarding Agent',
    description: 'Developed and deployed an intelligent chatbot for Facebook and Instagram to automate shipment inquiries and lead capture. By providing instant, 24/7 responses to complex tracking queries, the agent streamlined the onboarding process and ensured high-quality data collection for the sales pipeline.',
    category: 'Client Management',
    logoUrl: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
    siteLink: 'https://tumamizigo.com/'
  },
];

export const PortfolioPage = () => {
  const [mainTab, setMainTab] = useState('applications');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleItemClick = (name: string) => {
    setExpandedItem(expandedItem === name ? null : name);
  };

  const appsByCategory = portfolioData.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<string, typeof portfolioData>);

  const categoryOrder: ('Websites' | 'Web Applications' | 'Mobile Apps')[] = ['Websites', 'Web Applications', 'Mobile Apps'];

  return (
    <section id="portfolio" className="py-20 relative pt-32 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our{' '}
            <span className="text-5xl font-caveat font-semibold bg-gradient-to-r from-blue-200 to-purple-300 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A selection of our projects, showcasing our expertise in creating value.
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="bg-white/5 border border-gray-700 rounded-full p-1 flex space-x-1">
              <button
                onClick={() => setMainTab('applications')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  mainTab === 'applications' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:bg-white/10'
                }`}
              >
                Applications
              </button>
              <button
                onClick={() => setMainTab('automations')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  mainTab === 'automations' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:bg-white/10'
                }`}
              >
                AI Automations
              </button>
            </div>
          </div>
        </div>

        {mainTab === 'applications' && (
          <div key="applications" className="fade-in space-y-16">
            {categoryOrder.map(category => {
              const items = appsByCategory[category];
              
              return (
                <div key={category}>
                  <h3 className="text-2xl font-semibold mb-8 text-center tracking-wider text-purple-300 border-b border-purple-500/20 pb-2">{category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items && items.length > 0 ? (
                      items.map((item) => (
                        <div 
                          key={item.name} 
                          className="backdrop-blur-lg bg-white/5 border border-gray-700 rounded-xl transition-all duration-300 h-full flex flex-col cursor-pointer hover:border-purple-500/50"
                          onClick={() => handleItemClick(item.name)}
                        >
                          <div className="p-6 flex-grow">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <img src={item.logoUrl} alt={`${item.name} logo`} className="w-10 h-10 mr-4 rounded-md bg-white p-1"/>
                                <div>
                                  <h3 className="text-xl font-semibold">{item.name}</h3>
                                  <p className="text-sm text-gray-400">{item.subtitle}</p>
                                </div>
                              </div>
                              <ChevronDown className={`transform transition-transform duration-300 text-gray-400 ${expandedItem === item.name ? 'rotate-180' : ''}`} />
                            </div>
                            {expandedItem === item.name && (
                              <div className="mt-4 pl-14 fade-in">
                                <p className="text-gray-400 mb-4 text-sm">{item.description}</p>
                                <a href={`https://${item.url}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-semibold group">
                                  Visit Website 
                                  <ExternalLink size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center col-span-full text-gray-500">
                        Coming soon...
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {mainTab === 'automations' && (
          <div key="automations" className="fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationsData.map((project, index) => (
                <div 
                  key={index} 
                  className="backdrop-blur-lg bg-white/5 border border-gray-700 rounded-xl transition-all duration-300 h-full flex flex-col cursor-pointer hover:border-purple-500/50"
                  onClick={() => handleItemClick(project.name)}
                >
                  <div className="p-6 flex-grow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {project.logoUrl && <img src={project.logoUrl} alt={`${project.title} logo`} className="w-10 h-10 mr-4 rounded-md bg-white p-1"/>}
                        <div>
                          <h3 className="text-xl font-semibold">{project.title}</h3>
                          <p className="text-sm text-gray-400">{project.subtitle}</p>
                        </div>
                      </div>
                      <ChevronDown className={`transform transition-transform duration-300 text-gray-400 ${expandedItem === project.name ? 'rotate-180' : ''}`} />
                    </div>
                    {expandedItem === project.name && (
                      <div className="mt-4 pl-14 fade-in">
                        <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                        {project.siteLink && (
                          <a href={project.siteLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-semibold group">
                            Visit Website 
                            <ExternalLink size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};