import React from 'react';
import { Code2, Database, Wrench } from 'lucide-react';

const Skill = () => {
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
  <div
   className='w-full py-20 px-6'
   id='Skill'>
   <h1 className='font-bold text-4xl text-center text-white mb-10 relative z-10'>
    Skills
   </h1>
   <div className='flex flex-wrap justify-center gap-8 max-w-5xl mx-auto'>
    {skills.map((category, index) => (
     <div
      key={index}
      className='bg-white bg-opacity-10 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden hover:bg-opacity-20 transition-all duration-300'>
      <div className='p-6'>
       <div className='text-center text-white mb-4'>
        <category.icon
         size={48}
         className='mx-auto'
        />
       </div>
       <h2 className='font-bold text-xl text-white mb-4 text-center'>
        {category.title}
       </h2>
       <div className='flex flex-wrap justify-center gap-2'>
        {category.items.map((skill, skillIndex) => (
         <span
          key={skillIndex}
          className='bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-semibold hover:bg-opacity-30 transition-all duration-300'>
          {skill}
         </span>
        ))}
       </div>
      </div>
     </div>
    ))}
   </div>
  </div>
 );
};

export default Skill;
