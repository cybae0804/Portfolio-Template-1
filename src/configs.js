const colors = {
  primary: '#90CAF9',
  secondary: '#E0E0E0',
  background: '#FFFFFF',
};

const about = {
  firstName: 'Cy',
  lastName: 'Bae',
  shortDesc: `I'm a web developer located in Irvine, CA.`,
  longDesc: [
    'One of my biggest entertainments as I was growing up was video games, and in a sense, video games teach you a lot about problem solving and logical thinking. Eventually, it led me to studying statistics and computer science in college: two disciplines that requires analytical and logical mindset. While I was in school, I worked as a student tech support where I learned to communicate difficult technology effectively, but also exposed me to many different everyday technology.',
    `After my graduation, I began working on a personal backend project that really reminded me of how much I love development. My college curriculum didn't cover many web development technologies and as a result I decided that I would further my education before starting my career. I did my research and decided to immerse myself in LearningFuze coding bootcamp, because it provided me structured guidance and professional connections. During the course of the bootcamp, I spent over 12 hours a day solidifying my foundation in html, css, and javascript. Moreover, I’ve worked on my solo projects such as my state machine calculator, but also participated in hackathons.`,
    'Now that I have graduated, I am looking for opportunities where I can use what I’ve learned in both college and the bootcamp to solve interesting yet practical problems. I’m eager to continue learning through the work that I do and the new challenges I’ll face every day.'
  ],
  email: 'hello@cybae.me',
};

const projects = [
  {
    name: 'Calculator',
    desc: 'State Machine Calculator',
    path: '',
  },
  {
    name: '',
    desc: '',
    path: '',
  },
  {
    name: '',
    desc: '',
    path: '',
  },
];

const skills = [
  'HTML5', 'CSS3', 'Javascript', 'jQuery',
  'MySQL', 'Express', 'React', 'Node',
  'AWS', 'PHP', 'Bootstrap', 'Git',
]

export default {
  colors, about, projects, skills
}

export { colors, about, projects, skills };
