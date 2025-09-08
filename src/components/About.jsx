import React from 'react';
import {
 CalendarDays,
 MapPin,
 Building,
 Code2,
 Database,
 Wrench,
 MessageCircle,
} from 'lucide-react';
import { CustomTimeline } from './Timeline';

const Skills = () => {
 const skills = [
  {
   title: 'Languages & Frameworks',
   icon: Code2,
   items: [
    'C',
    'C++',
    'HTML',
    'CSS',
    'PHP',
    'JavaScript',
    'TypeScript',
    'Laravel',
    'React.js',
    'Node.js',
    'Express.js',
    'Nest.js',
   ],
  },
  {
   title: 'Databases',
   icon: Database,
   items: ['MySQL', 'PostgreSQL'],
  },
  {
   title: 'Tools & Technologies',
   icon: Wrench,
   items: [
    'Bootstrap',
    'Tailwind CSS',
    'Vanilla.js',
    'Webpack',
    'Git',
    'Sequelize',
    'Redux Toolkit',
    'Redux Saga',
    'Cobol',
   ],
  },
 ];

 return (
  <div className='space-y-6'>
   <h2 className='text-2xl font-bold text-white mb-8'>Skills & Technologies</h2>
   <div className='space-y-6'>
    {skills.map((category, index) => (
     <div
      key={index}
      className='bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 group'>
      <div className='flex items-center gap-3 mb-4'>
       <div className='text-purple-400 flex-shrink-0 p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors duration-300'>
        <category.icon size={20} />
       </div>
       <h3 className='font-semibold text-lg text-white group-hover:text-purple-300 transition-colors duration-300'>
        {category.title}
       </h3>
      </div>

      <div className='flex flex-wrap gap-2'>
       {category.items.map((skill, skillIndex) => (
        <span
         key={skillIndex}
         className='bg-purple-500/20 text-white px-3 py-1.5 rounded-full text-sm font-medium hover:bg-purple-500/30 hover:scale-105 transition-all duration-200 cursor-default border border-purple-500/20'>
         {skill}
        </span>
       ))}
      </div>
     </div>
    ))}
   </div>
  </div>
 );
};

const About = () => {
 return (
  <section
   className='min-h-screen py-20 px-4'
   id='about'
   style={{ backgroundColor: 'transparent' }}>
   <div className='max-w-7xl mx-auto'>
    <div className='text-center mb-16'>
     <h1 className='text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent'>
      About Me
     </h1>
     <div className='w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-8'></div>
    </div>

    <div className='max-w-4xl mx-auto mb-16'>
     <div className='bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300'>
      <p className='text-lg text-gray-300 leading-relaxed text-center'>
       My name is{' '}
       <span className='text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-bold text-xl'>
        Fioreza Radhin Naufal
       </span>
       , I am a Fullstack Developer with over 2 years of experience building
       scalable web applications across various sectors including healthy food
       services, retail, and internal enterprise systems. I have developed a
       strong foundation in creating responsive interfaces, managing databases,
       and integrating APIs. I possess strong abilities in problem-solving,
       critical thinking, and time management.
      </p>
     </div>
    </div>

    <div className='grid lg:grid-cols-2 gap-12 mb-16'>
     <div>
      <Skills />
     </div>

     <div>
      <CustomTimeline />
     </div>
    </div>

    <div className='text-center'>
     <a
      href='https://wa.me/6285282810339'
      target='_blank'
      rel='noopener noreferrer'
      className='inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 group'>
      <MessageCircle className='w-5 h-5 group-hover:scale-110 transition-transform duration-300' />
      Let's Connect!
     </a>
    </div>
   </div>
  </section>
 );
};

export default About;
