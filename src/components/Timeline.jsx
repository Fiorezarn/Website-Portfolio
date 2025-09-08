import { Building, CalendarDays, MapPin } from 'lucide-react';

export const CustomTimeline = () => {
 const experiences = [
  {
   id: 1,
   period: 'Dec 2024 – Present',
   company: 'PT Yellow Fit Group Indonesia',
   location: 'North Jakarta, DKI Jakarta',
   position: 'Fullstack Developer',
   description:
    'Developed a Payment Instruction Website managing daily transactions up to IDR 1 billion. Built Secretlink system for secure daily meal plan modifications. Created Backoffice Website for internal staff and implemented complete Inventory Management System.',
   current: true,
  },
  {
   id: 2,
   period: 'Feb 2024 – Aug 2024',
   company: 'PT Phincon',
   location: 'Central Jakarta, DKI Jakarta',
   position: 'Back End Developer Intern',
   description:
    'Developed QA feature for admin performance evaluation, time management module for employee shifts, calling list management features, and recording list module for interaction data display.',
   current: false,
  },
  {
   id: 3,
   period: 'Aug 2023 – Dec 2023',
   company: 'PT Trans Retail Indonesia',
   location: 'Central Jakarta, DKI Jakarta',
   position: 'IT Application Officer (Software Developer) Intern',
   description:
    'Created customer data website for membership records, employee incentive website, and cycle count website for stock calculation using Laravel framework.',
   current: false,
  },
  {
   id: 4,
   period: 'Feb 2022 - Jul 2024',
   company: 'Integrated Laboratory (iLab) Gunadarma University',
   location: 'Depok, East Java',
   position: 'Laboratory Assistant',
   description:
    'Created instructional videos, modules, and questions for online courses. Developed programs using COBOL and BASIC languages. Monitored practicum and responded to forum questions.',
   current: false,
  },
 ];

 return (
  <div className='space-y-6'>
   <h2 className='text-2xl font-bold text-white mb-8'>Work Experience</h2>
   <div className='relative'>
    <div className='absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-400 via-purple-500 to-transparent'></div>

    <div className='space-y-8'>
     {experiences.map((exp, index) => (
      <div
       key={exp.id}
       className='relative flex items-start group'>
       <div className='relative'>
        <div
         className={`absolute left-6 w-4 h-4 rounded-full border-2 z-10 transition-all duration-300 ${
          exp.current
           ? 'bg-purple-500 border-white shadow-lg shadow-purple-500/50 animate-pulse'
           : 'bg-gray-800 border-gray-500 group-hover:border-purple-400 group-hover:bg-purple-500'
         }`}>
         {exp.current && (
          <div className='absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-60'></div>
         )}
        </div>
       </div>

       <div className='ml-16 bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 group w-full'>
        <div className='flex items-start justify-between mb-4 flex-wrap gap-2'>
         <div className='flex items-center gap-2 text-purple-400 text-sm font-medium'>
          <CalendarDays className='w-4 h-4' />
          {exp.period}
         </div>
         {exp.current && (
          <span className='px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full font-medium animate-pulse'>
           Current Position
          </span>
         )}
        </div>

        <div className='mb-4'>
         <h3 className='text-xl font-bold text-white mb-2 flex items-start gap-2 group-hover:text-purple-300 transition-colors duration-300'>
          <Building className='w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0' />
          <span className='leading-tight'>{exp.company}</span>
         </h3>
         <p className='text-purple-400 font-semibold mb-2 ml-7'>
          {exp.position}
         </p>
         <div className='flex items-center gap-2 text-gray-400 text-sm ml-7'>
          <MapPin className='w-3 h-3' />
          {exp.location}
         </div>
        </div>

        <p className='text-gray-300 text-sm leading-relaxed ml-7'>
         {exp.description}
        </p>
       </div>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
};
