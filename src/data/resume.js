export const experiences = [
  {
    id: 'exp-1',
    company: 'NEXUS VIT',
    role: 'Management Lead (promoted)',
    location: 'Chennai',
    period: 'Sep 2025 – Present',
    tracks: ['developer', 'leadership'],
    impact: [
      { value: 'Frontend Developer → Management Lead', label: '' },
      { value: '3', label: 'events coordinated' }
    ],
    tech: ['Event management', 'Sponsorships', 'Frontend development', 'Team leadership'],
    bulletsByTrack: {
      developer: [
        'Joined as Frontend Developer and Event Coordinator, then promoted to Management Lead.',
        "Lead most of NEXUS's technical projects.",
        "Coordinated DECODEX and the Striver talk show, and handled the management side of V-Medithon 3.0, VIT Chennai's biggest biotechnology hackathon (September 2026)."
      ],
      leadership: [
        'Joined as Frontend Developer and Event Coordinator, then promoted to Management Lead.',
        "Lead most of NEXUS's technical projects.",
        "Coordinated DECODEX and the Striver talk show, and handled the management side of V-Medithon 3.0, VIT Chennai's biggest biotechnology hackathon (September 2026)."
      ]
    }
  },
  {
    id: 'exp-2',
    company: 'AWS Cloud Club VIT Chennai',
    role: 'Web Developer',
    location: 'Chennai',
    period: 'Mar 2026 – Present',
    tracks: ['developer'],
    impact: [],
    tech: ['Event planning', 'Event tech', 'Club projects'],
    bulletsByTrack: {
      developer: [
        "Help plan the club's events and handle the technical side of them.",
        "Help with the club's projects."
      ]
    }
  },
  {
    id: 'exp-3',
    company: 'AWS Student Builder',
    role: 'AWS Student Builder Campus Leader',
    location: 'Chennai',
    period: 'Aug 2026 – Present',
    tracks: ['developer', 'leadership'],
    impact: [
      { value: '300+', label: 'students signed up for AWS Builder Center' }
    ],
    tech: ['Campus outreach', 'AWS Builder Center', 'Community growth'],
    bulletsByTrack: {
      developer: [
        'Promote AWS Builder Center to students at VIT Chennai through campus events and social media.',
        '300+ students signed up through my link.'
      ],
      leadership: [
        'Promote AWS Builder Center to students at VIT Chennai through campus events and social media.',
        '300+ students signed up through my link.'
      ]
    }
  }
];

export const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering (AI & ML specialization)',
    institution: 'Vellore Institute of Technology (VIT), Chennai',
    period: 'Expected May 2029',
    honors: 'Second-year undergraduate',
    details: 'Coursework includes operating systems and database systems.'
  }
];

export const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    description: 'Core syntax, algorithms & computational problem solving',
    skills: [
      { name: 'Python' },
      { name: 'C / C++' },
      { name: 'Java' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'SQL' }
    ]
  },
  {
    id: 'aiml',
    title: 'AI / ML & Data Science',
    description: 'Deep learning, generative vision & predictive models',
    skills: [
      { name: 'Neural Networks' },
      { name: 'Generative Imaging' },
      { name: 'Prompt Engineering' },
      { name: 'NumPy' },
      { name: 'Pandas' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend & Web Development',
    description: 'Creating modern, responsive & accessible user interfaces',
    skills: [
      { name: 'React' },
      { name: 'JavaScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Tailwind CSS' },
      { name: 'Vite' }
    ]
  },
  {
    id: 'cloud_iot',
    title: 'Cloud, IoT & Hardware',
    description: 'Edge microcontroller systems & cloud-native tooling',
    skills: [
      { name: 'AWS' },
      { name: 'Firebase' },
      { name: 'ESP32' },
      { name: 'Arduino' },
      { name: 'Git' },
      { name: 'GitHub' }
    ]
  }
];

export const databaseTech = [
  'PostgreSQL',
  'Redis',
  'MySQL',
  'Firebase',
  'DBMS'
];

export const csFundamentals = [
  'Operating Systems',
  'Data Structures & Algorithms (DSA)',
  'Object-Oriented Programming (OOP)',
  'DBMS',
  'SQL'
];

export const additionalTech = [
  'Git',
  'GitHub',
  'Arduino',
  'ESP32',
  'NumPy',
  'Pandas',
  'Fastify',
  'PostgreSQL',
  'Redis'
];

export const areasOfInterest = [
  'AI / ML & Neural Networks',
  'Generative Imaging',
  'Prompt Engineering',
  'Full-Stack Web Development',
  'Embedded Systems & IoT',
  'Research & Patents'
];

export function getExperiencesForTrack(trackId) {
  return experiences
    .filter(exp => exp.tracks.includes(trackId))
    .map(exp => ({
      ...exp,
      bullets: exp.bulletsByTrack[trackId] || Object.values(exp.bulletsByTrack)[0]
    }));
}
