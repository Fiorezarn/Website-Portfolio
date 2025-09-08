import React, { useState } from 'react';
import {
 ExternalLink,
 Github,
 Lock,
 ChevronDown,
 ChevronUp,
} from 'lucide-react';
import MilenialStuff from '../assets/milenalstuff.jpg';
import Moneta from '../assets/moneta.png';
import Nextflix from '../assets/nextflix.png';
import Batary from '../assets/Batary.png';
import Incentive from '../assets/incentive.png';
import Portofolio from '../assets/portofolio.png';
import Lecafe from '../assets/website lecafe.png';
import Backoffice from '../assets/backoffice.png';
import Secretlink from '../assets/secretlink.png';
import Payment from '../assets/payment.jpeg';
import Trackorder from '../assets/trackorder.jpeg';
import Cashback from '../assets/trackorder.jpeg';
import Warehouse from '../assets/warehouse.png';

// ProjectCard Component
function ProjectCard({
 title,
 description,
 image,
 isPublic,
 demoLink,
 sourceLink,
}) {
 return (
  <div className='group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col'>
   {/* Image Container dengan tinggi tetap */}
   <div className='relative h-48 overflow-hidden bg-gray-900/50'>
    <img
     src={image}
     alt={title}
     className='w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300'
     loading='lazy'
    />
    <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
   </div>

   {/* Content Container */}
   <div className='p-6 flex-1 flex flex-col'>
    <h3 className='text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors'>
     {title}
    </h3>

    <p className='text-gray-300 text-sm leading-relaxed mb-6 flex-1'>
     {description}
    </p>

    {/* Action Buttons */}
    <div className='flex gap-3 mt-auto'>
     {isPublic && demoLink ? (
      <a
       href={demoLink}
       target='_blank'
       rel='noopener noreferrer'
       className='flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-purple-600/80 hover:bg-purple-600 text-white rounded-lg transition-colors text-sm font-medium'>
       <ExternalLink className='w-4 h-4' />
       Live Demo
      </a>
     ) : (
      <div className='flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-600/50 text-gray-400 rounded-lg cursor-not-allowed text-sm font-medium'>
       <Lock className='w-4 h-4' />
       Private
      </div>
     )}

     {isPublic && sourceLink ? (
      <a
       href={sourceLink}
       target='_blank'
       rel='noopener noreferrer'
       className='flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-700/80 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm font-medium'>
       <Github className='w-4 h-4' />
       Source
      </a>
     ) : !isPublic ? (
      <div className='flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-600/50 text-gray-400 rounded-lg cursor-not-allowed text-sm font-medium'>
       <Github className='w-4 h-4' />
       Private
      </div>
     ) : null}
    </div>
   </div>
  </div>
 );
}

const projects = [
 {
  title: 'Backoffice Yellow Fit',
  description:
   'Comprehensive backoffice system for Yellow Fit Group Indonesia. Features include user management, order processing, inventory tracking, and reporting dashboards. Built with React.js and Node.js for optimal performance.',
  image: Backoffice,
  isPublic: false,
  demoLink: '',
  sourceLink: '',
 },
 {
  title: 'SecretLink - Customer Order Request',
  description:
   'Secure system for handling customer meal plan modifications and special requests. Features secure link generation, request validation, and integration with kitchen management systems.',
  image: Secretlink,
  isPublic: false,
  demoLink: '',
  sourceLink: '',
 },
 {
  title: 'Payment Instructions System',
  description:
   'Payment processing system handling transactions up to IDR 1 billion daily. Includes payment verification, transaction history, reconciliation reports, and integration with multiple payment gateways.',
  image: Payment,
  isPublic: false,
  demoLink: '',
  sourceLink: '',
 },
 {
  title: 'Order Tracking System',
  description:
   'Real-time order tracking system for customers and internal staff. Features order status updates, delivery tracking, notification system, and customer communication tools.',
  image: Trackorder,
  isPublic: false,
  demoLink: '',
  sourceLink: '',
 },
 {
  title: 'Cashback Management System',
  description:
   'Loyalty and cashback program management system. Includes points calculation, redemption processing, customer tier management, and promotional campaign tools.',
  image: Cashback,
  isPublic: false,
  demoLink: '',
  sourceLink: '',
 },
 {
  title: 'Warehouse Management System',
  description:
   'Complete inventory management system for Yellow Fit operations. Features include stock tracking, supplier management, expiration date monitoring, and automated reordering systems.',
  image: Warehouse,
  isPublic: false,
  demoLink: '',
  sourceLink: '',
 },
 {
  title: 'Milenial Stuff Website',
  description:
   'An online store selling items, created using Laravel framework version 8. Features include product listings, shopping cart, and user authentication.',
  image: MilenialStuff,
  isPublic: true,
  demoLink: 'http://milenialstuff.my.id/',
  sourceLink: 'https://github.com/Fiorezarn/MilenialStuff.id',
 },
 {
  title: 'Moneta Website',
  description:
   'A financial records website built with ReactJS and Golang, ensuring a streamlined and responsive user interface. Includes features for expense tracking and financial reporting.',
  image: Moneta,
  isPublic: true,
  demoLink: 'https://moneta.mikroskil.com/',
  sourceLink: 'https://github.com/c23-m4001',
 },
 {
  title: 'Nextflix Website',
  description:
   'A website displaying a list of movies from a public API, created using webpack. Features include movie search, filtering, and detailed movie information pages.',
  image: Nextflix,
  isPublic: true,
  demoLink: 'https://nextflixweb.netlify.app/',
  sourceLink: 'https://github.com/Fiorezarn/Nextflix-webpack',
 },
 {
  title: 'Batary Apps',
  description:
   'A website displaying a list of restaurants from a public API, created using webpack. Includes features such as restaurant search, filtering by cuisine, and user reviews.',
  image: Batary,
  isPublic: true,
  demoLink: 'https://bataryapps.netlify.app/',
  sourceLink: 'https://github.com/Fiorezarn/Batary-Apps',
 },
 {
  title: 'Incentive Website',
  description:
   'A website for managing and calculating employee incentives, created using Laravel. Features include performance tracking, incentive calculation, and reporting tools.',
  image: Incentive,
  isPublic: false,
  demoLink: '',
  sourceLink: '',
 },
 {
  title: 'Website Portfolio',
  description:
   'A portfolio website built with React and Vite, showcasing projects and expertise. Includes sections for about me, skills, projects, and contact information.',
  image: Portofolio,
  isPublic: true,
  demoLink: 'https://fiorezarn.vercel.app/',
  sourceLink: 'https://github.com/Fiorezarn/Website-Portfolio',
 },
 {
  title: 'Le Cafe',
  description:
   'A cafe website showcasing menu items, location, and online ordering capabilities. Built with modern web technologies for a smooth user experience.',
  image: Lecafe,
  isPublic: true,
  demoLink: 'https://lecafe-fe.vercel.app/',
  sourceLink: 'https://github.com/Fiorezarn/lecafe-fe',
 },
];

export default function ProjectShowcase() {
 const [showAll, setShowAll] = useState(false);

 // Tampilkan hanya 4 proyek pertama secara default
 const displayedProjects = showAll ? projects : projects.slice(0, 4);

 return (
  <div className='w-full min-h-screen bg-transparent py-16 px-4'>
   <div className='max-w-6xl mx-auto'>
    <div className='text-center mb-12'>
     <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
      My Projects
     </h2>
     <div className='w-20 h-1 bg-purple-500 mx-auto rounded-full'></div>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12'>
     {displayedProjects.map((project, index) => (
      <div
       key={index}
       className='h-full'>
       <ProjectCard {...project} />
      </div>
     ))}
    </div>

    {projects.length > 4 && (
     <div className='text-center'>
      <button
       onClick={() => setShowAll(!showAll)}
       className='flex items-center gap-2 px-6 py-3 bg-purple-600/30 text-white rounded-lg border border-purple-500/30 hover:bg-purple-600/50 transition-colors mx-auto'>
       {showAll ? (
        <>
         <ChevronUp className='w-5 h-5' />
         Show Less
        </>
       ) : (
        <>
         <ChevronDown className='w-5 h-5' />
         Show More
        </>
       )}
      </button>
     </div>
    )}
   </div>
  </div>
 );
}
