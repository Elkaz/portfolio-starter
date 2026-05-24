import React, { useState } from 'react';
import {
  Briefcase,
  Code,
  Mail,
  ExternalLink,
  Menu,
  X,
  Monitor,
  ChevronRight,
} from 'lucide-react';

// Workshop TODO:
// Replace "demo" with your own Cloudinary cloud name.
// You can find it in your Cloudinary dashboard.
const CLOUD_NAME = 'demo';

function heroImage(publicId) {

 return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${publicId}`;
}

function cloudinaryImage(publicId) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${publicId}`;
}

function cloudinaryVideo(publicId) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${publicId}.mp4`;
}

function cloudinaryVideoPoster(publicId) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${publicId}.jpg`;
}

const workExperience = [
  { id: 'samples/landscapes/nature-mountains', title: 'Senior Designer', company: 'Horizon Studio' },
  { id: 'samples/two-ladies', title: 'Product Lead', company: 'Layers' },
  { id: 'samples/ecommerce/leather-bag-gray', title: 'Full Stack Developer', company: 'Archetype' },
  { id: 'samples/animals/reindeer', title: 'Creative Director', company: 'Monograph' },
  { id: 'samples/food/dessert', title: 'UX Researcher', company: 'Fieldwork' },
  { id: 'samples/landscapes/beach-boat', title: 'Visual Engineer', company: 'Construct' },
];

const videoProjects = [
  {
    id: 'samples/elephants',
    title: 'Global Retail Redesign',
    desc: 'End-to-end redesign of a global retail experience, from visual direction to component architecture.',
    offset: 5,
  },
  {
    id: 'samples/sea-turtle',
    title: 'Mobile Banking App',
    desc: 'A mobile-first product prototype focused on accessibility, clarity, and trust.',
    offset: 10,
  },
  {
    id: 'samples/cld-sample-video',
    title: 'Internal Analytics Platform',
    desc: 'A data visualization project that reduced manual reporting work through reusable dashboards.',
    offset: 15,
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-rose-100">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-rose-50 rounded-lg flex items-center justify-center font-bold text-rose-500 border border-rose-100">
              S
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-800">Your Name</span>
          </div>

          <div className="hidden md:flex gap-8 text-sm text-zinc-400 tracking-wide">
            <a href="#work" className="hover:text-zinc-900 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-zinc-900 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-rose-500 transition-colors font-medium text-zinc-600">Contact</a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-zinc-600 bg-white border-b border-zinc-100">
            <a href="#work" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      <header className="min-h-screen flex items-center pt-20 px-6 bg-gradient-to-br from-amber-50/60 via-white to-rose-50/40">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-20">
          <div className="flex justify-center md:justify-end">
            <div className="w-72 sm:w-80 md:w-full md:max-w-sm lg:max-w-md">
              <img
               src={heroImage('samples/people/bicycle')}
               alt="Portfolio profile portrait"
               className="w-full"
             />
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-rose-400 text-lg italic mb-3">Glad you're here — I'm</p>
            <h1 className="text-5xl md:text-8xl font-extralight tracking-tighter mb-6 leading-[0.9] uppercase text-zinc-900">
              Your <br />
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-400">
                Name
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-500 font-light leading-relaxed mb-10 max-w-lg">
              Maker, storyteller, and lifelong learner. I love building things that help people — and I'm always up for a good collaboration.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#contact" className="px-10 py-4 bg-rose-400 text-white rounded-full font-semibold hover:bg-rose-500 transition-all hover:scale-105 flex items-center gap-2">
                Get in Touch <ChevronRight size={18} />
              </a>
              <a href="#projects" className="px-10 py-4 border border-zinc-200 text-zinc-600 rounded-full font-light hover:border-rose-300 hover:text-rose-500 transition-all">
                Explore My Work
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="work" className="py-32 px-6 relative bg-amber-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
            <div>
              <div className="flex items-center gap-2 text-amber-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-4">
                <Briefcase size={14} /> My Journey
              </div>
              <h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-zinc-900 uppercase">
                Work Experience
              </h2>
            </div>
            <p className="text-zinc-400 max-w-sm text-lg font-light leading-snug">
              Every role teaches you something. Here are the experiences and people that have shaped me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {workExperience.map((job) => (
              <article key={`${job.company}-${job.title}`} className="group relative">
                <div className="relative overflow-hidden rounded-[3rem] bg-zinc-50 border border-zinc-100 transition-all duration-700 hover:shadow-2xl hover:shadow-rose-100">
                  <img
                    src={cloudinaryImage(job.id)}
                    alt={`${job.title} at ${job.company}`}
                    loading="lazy"
                    className="w-full h-full transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-0 left-0 p-12 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <p className="text-amber-300 font-mono text-[10px] uppercase tracking-[0.3em] mb-2">{job.company}</p>
                    <h3 className="text-3xl font-light text-white">{job.title}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 px-6 bg-rose-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-20">
            <div className="w-14 h-14 bg-white border border-rose-100 rounded-2xl flex items-center justify-center text-rose-400 shadow-sm">
              <Code size={28} />
            </div>
            <div>
              <h2 className="text-5xl font-extralight tracking-tight text-zinc-900 uppercase">Selected Projects</h2>
              <p className="text-zinc-400 text-sm mt-1 italic">Short project videos that show the work in motion.</p>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-16">
            {videoProjects.map((project) => (
              <article key={project.title} className="group space-y-8">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-zinc-200">
                  <video
                    controls
                    preload="metadata"
                    poster={cloudinaryVideoPoster(project.id)}
                    className="w-full"
                  >
                    <source src={cloudinaryVideo(project.id)} type="video/mp4" />
                    Your browser doesn't support the video tag.
                  </video>
                </div>
                <div className="px-6">
                  <h3 className="text-2xl font-light mb-4 text-zinc-900 tracking-tight">{project.title}</h3>
                  <p className="text-zinc-500 font-light leading-relaxed mb-8 text-lg">{project.desc}</p>
                  <button className="flex items-center gap-3 text-rose-500 font-semibold text-[10px] uppercase tracking-[0.3em] border-b border-rose-200 pb-2 hover:border-rose-500 transition-colors">
                    View Case Study <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="py-32 px-6 border-t border-rose-50 bg-gradient-to-b from-white to-amber-50/30">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-rose-50 border border-rose-100 rounded-[2.5rem] mb-12 flex items-center justify-center shadow-sm">
            <Mail size={32} className="text-rose-300" />
          </div>
          <h2 className="text-5xl md:text-7xl font-extralight tracking-tighter mb-8 text-zinc-900 uppercase">Let's Connect!</h2>
          <p className="text-zinc-400 max-w-lg mb-12 font-light text-lg leading-relaxed">
            I love meeting curious, creative people. Whether you want to collaborate, have a question, or just want to say hi — my inbox is always open.
          </p>
          <a href="mailto:hello@example.com" className="text-2xl md:text-5xl text-zinc-300 hover:text-rose-500 transition-colors border-b-2 border-zinc-100 hover:border-rose-300 pb-4 mb-20 inline-block font-thin tracking-tight">
            hello@example.com
          </a>

          <div className="flex gap-8 mb-24 opacity-60 hover:opacity-100 transition-opacity">
            <a href="#" className="text-zinc-400 hover:text-rose-500 transition-colors" aria-label="Portfolio site">
              <Monitor size={28} />
            </a>
          </div>

          <div className="w-full pt-16 border-t border-amber-50 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-300 text-[9px] font-mono tracking-[0.4em] uppercase">
            <p>© 2026 Your Name</p>
            <div className="flex gap-12 text-zinc-400">
              <a href="#" className="hover:text-rose-500 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-rose-500 transition-colors">Resume</a>
              <a href="#" className="hover:text-rose-500 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
