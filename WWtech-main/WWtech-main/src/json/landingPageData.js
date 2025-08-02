/* eslint-disable import/extensions */

// Services Img Imports
import Web from '../assets/images/Services/Web.png';
import Mobile from '../assets/images/Services/Mobile.png';
import UIUX from '../assets/images/Services/Design.png';

// Portfolio Img Imports
import Recruiting from '../assets/images/Portfolio/Recruiting.png';
import Freelance from '../assets/images/Portfolio/Freelance.png';
import Aura from '../assets/images/Portfolio/Aura.png';

// Advantages
import Communicative from '../assets/images/Advantages/Communicative.png';
import Collaborative from '../assets/images/Advantages/Collaborative.png';
import Management from '../assets/images/Advantages/Management.png';
import Favorite from '../assets/images/Advantages/Favorite.png';

// Testimonials
import Sasha from '../assets/images/Testimonials/Sasha.jpg';
import Reiner from '../assets/images/Testimonials/Reiner.jpg';
import Kruger from '../assets/images/Testimonials/Kruger.jpg';

// TeamMembers
import CEO from '../assets/images/TeamMembers/CEO.jpg';
import ProjectManager from '../assets/images/TeamMembers/Project-manager.jpg';
import Frontend1 from '../assets/images/TeamMembers/Frontend1.jpg';
import Frontend2 from '../assets/images/TeamMembers/Frontend2.jpg';
import Backend1 from '../assets/images/TeamMembers/Backend1.jpg';
import Backend2 from '../assets/images/TeamMembers/Backend2.jpg';
import Mobile1 from '../assets/images/TeamMembers/Mobile1.jpg';
import UIUX2 from '../assets/images/TeamMembers/UIUX2.jpg';

// Constants for repeated responsibilities
const webDev = ['Web Development', 'UI/UX Design'];
const mobileDev = ['Mobile Development', 'UI/UX Design'];

export const Services = [
  {
    title: 'Web Development',
    imageUrl: Web,        // Make sure Web is imported
    animation: 'left',
  },
  {
    title: 'Mobile Development',
    imageUrl: Mobile,     // Make sure Mobile is imported
    animation: 'up',
  },
  {
    title: 'UI/UX Design',
    imageUrl: UIUX,       // Make sure UIUX is imported
    animation: 'right',
  },
];

export const Portfolios = [
  {
    id: 'portfolio_01',
    title: 'Doctor App',
    type: 'Mobile App',
    imageUrl: Recruiting,
    description: 'An AI-powered doctor consultation app to help users find nearby professionals, schedule appointments, and receive real-time medical support through chat and video.',
    responsibility: mobileDev,
    credit: 'https://dribbble.com/shots/15164950-Recruiting-app',
  },
  {
    id: 'portfolio_02',
    title: 'Wecure Wellness',
    type: 'Website',
    imageUrl: Aura,
    description: 'A wellness platform combining AI and certified experts to offer holistic support for Gen-Z—covering mental, emotional, and spiritual wellness.',
    responsibility: webDev,
    credit: 'https://dribbble.com/shots/15176338-Aura-Website-Main-Page',
  },
  {
    id: 'portfolio_03',
    title: 'Freelance',
    type: 'Mobile App',
    imageUrl: Freelance,
    responsibility: mobileDev,
    credit: 'https://dribbble.com/shots/15223131-Freelance-Mobile-App-Concept',
  },
 
];

export const Advantages = [
  [{
    title: 'Communicative',
    description: 'We communicate our project ideas and progress to make it clear.',
    imageUrl: Communicative,
  },
  {
    title: 'Management',
    description: 'We manage our project properly to make our project done well.',
    imageUrl: Management,
  }],
  [{
    title: 'Collaborative​',
    description: 'Our team are very collaborative to make our project done well.',
    imageUrl: Collaborative,
  },
  {
    title: 'Favorite',
    description: "We've did so many project and all of our client love it.",
    imageUrl: Favorite,
  }],
];
export const Testimonials = [
  {
    id: 1,
    name: 'Vivek',
    company: 'Owner, wecure wellness',
    testimoni: 'Thanks for WWTECH, you guys are the best! Keep up the great work!',
    imageUrl: Sasha,
  },
  {
    id: 2,
    name: 'Kruger Khan',
    company: 'Director, Shultan Oil',
    testimoni: 'I just wanted to let you know that it’s been great working with WWTECH.',
    imageUrl: Kruger,
  },
  {
    id: 3,
    name: 'Reiner John',
    company: 'CEO, Marley CO',
    testimoni: 'WWTECH is so great. Thank you so much for a job well done.',
    imageUrl: Reiner,
  },
];

export const TeamMembers = [
  {
    name: 'Kabir Lal',
    position: 'CEO',
    imageUrl: CEO,
  },
  {
    name: 'Sagar Saini',
    position: 'Project Manager',
    imageUrl: ProjectManager,
  },
  {
    name: 'Amit Kumar',
    position: 'Front-end Developer',
    imageUrl: Frontend1,
  },
  {
    name: 'Sagar Saini',
    position: 'Front-end Developer',
    imageUrl: Frontend2,
  },
  {
    name: 'Kabir Lal',
    position: 'Back-end Developer',
    imageUrl: Backend1,
  },
  {
    name: 'Don Bizaro',
    position: 'Back-end Developer',
    imageUrl: Backend2,
  },
  {
    name: 'Bill Markinson',
    position: 'Mobile Developer',
    imageUrl: Mobile1,
  },

  {
    name: 'Freddie Curl',
    position: 'UI/UX Designer',
    imageUrl: UIUX2,
  },

];
