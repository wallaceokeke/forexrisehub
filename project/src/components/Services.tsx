import React from 'react';
import { Bot, ShoppingBag, Cog, Lightbulb, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const services = [
  {
    id: 1,
    title: 'AI Agent Development',
    description: 'Custom AI solutions tailored to your business needs. We build intelligent agents that can automate tasks, analyze data, and provide valuable insights.',
    icon: Bot,
    color: 'from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500',
    delay: 0,
  },
  {
    id: 2,
    title: 'POS & Inventory Systems',
    description: 'Streamlined point-of-sale and inventory management solutions to help businesses track sales, manage stock, and optimize operations.',
    icon: ShoppingBag,
    color: 'from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500',
    delay: 150,
  },
  {
    id: 3,
    title: 'Business Automation Tools',
    description: 'Automate repetitive tasks and workflows to increase efficiency, reduce errors, and free up your team to focus on high-value activities.',
    icon: Cog,
    color: 'from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500',
    delay: 300,
  },
  {
    id: 4,
    title: 'Software & Technical Consulting',
    description: 'Expert guidance on technology strategy, software architecture, and implementation to ensure your business leverages the right technologies.',
    icon: Lightbulb,
    color: 'from-amber-600 to-orange-600 dark:from-amber-500 dark:to-orange-500',
    delay: 450,
  },
];

const Services: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 tech-pattern opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 gradient-blur"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 gradient-blur"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-500/20 backdrop-blur-sm mb-6">
            <Cog size={16} className="text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-blue-700 dark:text-blue-300 font-medium">Our Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Future-Ready Solutions
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Empowering African businesses with cutting-edge technology and innovative solutions.
          </p>
        </div>
        
        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <div 
              key={service.id}
              className={`group relative glass-effect rounded-2xl p-6 transition-all duration-500 ease-out transform hover:-translate-y-2 hover:shadow-2xl ${
                inView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${service.delay}ms` }}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 text-white mb-5 relative`}>
                <service.icon size={24} />
                <div className="absolute inset-0 rounded-xl animate-pulse-ring"></div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {service.description}
              </p>
              
              <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform">
                <span className="font-medium mr-2">Learn More</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;