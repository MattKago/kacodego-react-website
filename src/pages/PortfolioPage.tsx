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
    logoUrl: 'https://b4195786c5bd43c1c3cf7d88e7011f91.cdn.bubble.io/f1767721625878x722035453275205600/Untitled_design__6_-removebg-preview-removebg-preview.png',
    description: 'A powerful web application designed to bridge the gap between physical documents and digital insights. Documerise automates the conversion of bulk images into structured, categorized CSV files, eliminating manual data entry and accelerating digital transformation for businesses.',
    category: 'Web Applications',
    subtitle: 'Intelligent OCR & Data Extraction',
  },
  {
    name: 'Wenze',
    url: 'https://play.google.com/store/apps/details?id=com.wenzecongo.app&pcampaignid=web_share',
    logoUrl: 'https://07493a8703375c33e60c7d9c5284c4c6.cdn.bubble.io/f1755635233333x157032157000075900/Untitled%20design%20%2836%29.png',
    description: 'A seamless mobile marketplace designed to modernize commerce in the Democratic Republic of Congo. Wenze facilitates secure transactions by connecting buyers and sellers through a verified, native interface. It streamlines the trading process with instant listings across 16+ categories, real-time in-app messaging, and premium ad boosting, empowering users to sell faster and trade with confidence.',
    category: 'Mobile Apps',
    subtitle: 'Native Mobile Marketplace for the DRC',
  },
  {
    name: 'Wenze Web',
    url: 'https://wenzecd.com/version-test?debug_mode=true',
    logoUrl: 'https://07493a8703375c33e60c7d9c5284c4c6.cdn.bubble.io/f1755635233333x157032157000075900/Untitled%20design%20%2836%29.png',
    description: 'A community-driven digital marketplace specifically designed for the Democratic Republic of Congo to address trust and transparency challenges in local commerce. Built on the Cardano blockchain, Wenze features a mobile-native interface with integrated escrow smart contracts to protect payments and reduce fraud. It streamlines trading with instant listings across 16+ categories, real-time in-app messaging for price negotiation, and premium ad boosting to empower local sellers.',
    category: 'Web Applications',
    subtitle: 'Marketplace for the DRC',
  },
  {
    name: 'PI Finance',
    url: 'https://pifinance.bubbleapps.io/version-test/index/Analytics',
    logoUrl: 'https://b4195786c5bd43c1c3cf7d88e7011f91.cdn.bubble.io/f1767722535219x371216178766744700/facebook-react-native.jpg',
    description: 'An advanced financial intelligence platform that leverages AI and RAG (Retrieval-Augmented Generation) to transform raw data into actionable insights. PI Finance features a sophisticated analytics dashboard with real-time visualization of order performance, sales distribution, and customer conversions. Its integrated AI chatbot allows users to query their own databases in natural language, making complex financial auditing and forecasting accessible and instantaneous.',
    category: 'Web Applications',
    subtitle: 'AI-Powered Financial Analytics Dashboard',
  },
  {
    name: 'Weather Checker',
    url: 'https://travelweather-77630.bubbleapps.io/version-test',
    logoUrl: 'https://b4195786c5bd43c1c3cf7d88e7011f91.cdn.bubble.io/f1767722535219x371216178766744700/facebook-react-native.jpg',
    description: 'A dynamic weather tracking application powered by the OpenWeather API to provide users with precise, real-time meteorological data. The app features a sleek dashboard displaying critical metrics including temperature, humidity, wind speed, and pressure. Built with a focus on speed and utility, it allows for bulk saving of forecasts, ensuring users stay ahead of changing conditions anywhere in the world.',
    category: 'Websites',
    subtitle: 'Real-Time Global Weather Insights',
  },
  {
    name: 'Exotic Travel Centre',
    url: 'https://exotictravelnet.com/',
    logoUrl: 'https://exotictravelnet.com/logo.png',
    description: 'A premium travel platform dedicated to showcasing the beauty of East Africa through bespoke tour packages. Exotic Travel Centre bridges the gap between travelers and unforgettable adventures, offering specialized itineraries for both residents and international visitors. From luxury safari stays to custom outbound packages, the application provides a high-end interface for users to craft and book their dream African getaway.',
    category: 'Websites',
    subtitle: 'Tailored Safari & Adventure Experiences',
  },
  {
    name: 'Kenmark Realtors',
    url: 'kenmarkrealtors.com',
    logoUrl: 'https://b4195786c5bd43c1c3cf7d88e7011f91.cdn.bubble.io/f1767722535219x371216178766744700/facebook-react-native.jpg',
    description: 'A comprehensive real estate portal designed to simplify the search for prime land and luxury housing. Kenmark Realtors provides a high-trust platform where users can validate listings and explore all-inclusive deals with ease. Featuring integrated security details, aerial cabling information, and solar lighting specs for properties, the application serves as a one-stop-shop for modern property acquisition and investment.',
    category: 'Websites',
    subtitle: 'Dynamic Real Estate Solutions',
  },
  {
    name: 'Zuwenatronics',
    url: 'zuwenatronics.com',
    logoUrl: 'https://b4195786c5bd43c1c3cf7d88e7011f91.cdn.bubble.io/f1767722535219x371216178766744700/facebook-react-native.jpg',
    description: 'A robust e-commerce ecosystem built to streamline the retail experience for high-end electronics and home appliances. Zuwenatronics features a highly organized product categorization system—ranging from smart TVs to power solutions—allowing users to filter and find tech essentials effortlessly. The platform focuses on high-conversion UI and seamless navigation to drive a frictionless digital shopping experience.',
    category: 'Websites',
    subtitle: 'Next-Gen Electronics E-commerce',
  },
  {
    name: 'Bluemark Travel Consultancy',
    url: 'https://bluemarktravel.com/',
    logoUrl: 'https://bluemarktravel.com/wp-content/uploads/2025/10/cropped-Untitled-design-7-Photoroom-1.png',
    description: 'A specialized consultancy platform designed to navigate the complexities of international immigration processes. Bluemark Travel provides professional guidance for Study Abroad and Working Abroad applications, offering a reliable bridge for users seeking global opportunities. The application centralizes visa expertise and immigration services into a user-friendly digital hub, ensuring a proficient and trustworthy application journey.',
    category: 'Websites',
    subtitle: 'Expert Immigration & Global Mobility',
  },
  {
    name: 'Madan Travel & Tours',
    url: 'https://madantours.com/',
    logoUrl: 'https://madantours.com/wp-content/uploads/2025/06/Untitled_design__2_-removebg-preview.png',
    description: 'A comprehensive tour and travel application designed to deliver unforgettable journeys across iconic destinations like Kenya, Tanzania, and Uganda. Madan Travel & Tours offers a diverse portfolio of services, from thrilling safaris to luxurious beach escapes. The platform emphasizes "anytime, anywhere" accessibility, providing a seamless booking interface that connects travelers with extraordinary cultural and wilderness experiences.',
    category: 'Websites',
    subtitle: 'Seamless Global Travel Orchestration',
  },
];

const automationsData = [
  {
    name: 'Tumamzigo',
    title: 'Tumamzigo',
    subtitle: 'AI-Driven Client Onboarding Agent',
    description: 'Developed and deployed an intelligent chatbot for Facebook and Instagram to automate shipment inquiries and lead capture. By providing instant, 24/7 responses to complex tracking queries, the agent streamlined the onboarding process and ensured high-quality data collection for the sales pipeline.',
    category: 'Client Management',
    logoUrl: 'https://b4195786c5bd43c1c3cf7d88e7011f91.cdn.bubble.io/f1767721781335x625330009100991600/logo-0f2e7217bb3bcf2913f1f0e339f5d3b80af69654a74af4be8b3d87c9eae63d84.png',
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
                                <a href={item.url.startsWith('http') ? item.url : `https://${item.url}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-semibold group">
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