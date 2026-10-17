export const tracks = [
  {
    id: "developer",
    slug: "developer",
    label: "Developer",
    badge: "Web & Mobile Tools",
    headline: "Frontend developer building web and mobile tools",
    summary: "I build interfaces with React, Vite and JavaScript/TypeScript, and package them as mobile apps with Capacitor.js. My main project, DhobiTrack, is an admin dashboard and companion app built for my campus.",
    skills: ["JavaScript", "TypeScript", "React", "HTML & CSS", "Vite", "Capacitor.js", "Tailwind"],
    facts: [
      { value: "15,000+", label: "students on the campus DhobiTrack is built for" },
      { value: "3", label: "web projects built" },
      { value: "2", label: "campus tech roles" },
    ],
  },
  {
    id: "ai-research",
    slug: "ai-research",
    label: "AI/ML & Research",
    badge: "AI/ML & Research",
    headline: "AI/ML student working toward research and patents",
    summary: "I'm a CSE student specializing in AI & ML. I'm a co-inventor on a patent that moved to industry, I'm writing a research paper on how AI hallucinations enable economic fraud, and I build applied AI projects on embedded devices and on-device vision.",
    skills: ["Python", "Edge Impulse", "Embeddings & semantic search", "LaTeX"],
    facts: [
      { value: "1", label: "patent, filed and transferred to industry" },
      { value: "1", label: "research paper in preparation" },
      { value: "3", label: "AI/ML projects" },
    ],
  },
  {
    id: "leadership",
    slug: "leadership",
    label: "Leadership",
    badge: "Campus Programs & Events",
    headline: "Student leader running campus programs and events",
    summary: "I'm Management Lead at NEXUS VIT and an AWS Student Builder Campus Leader at VIT Chennai. I coordinate events, handle the technical side of them, and lead most of NEXUS's tech projects.",
    skills: ["Event management", "Sponsorships", "Team leadership", "Campus outreach"],
    facts: [
      { value: "300+", label: "students signed up for AWS Builder Center" },
      { value: "3", label: "events: DECODEX, Striver talk show, V-Medithon 3.0" },
      { value: "2", label: "leadership roles" },
    ],
  },
];

export const defaultTrackId = 'developer';

export function getTrackById(id) {
  return tracks.find(t => t.slug === id || t.id === id) || tracks[0];
}
