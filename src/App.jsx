import React, { useState } from "react";
import {
  Briefcase,
  Code,
  Mail,
  ExternalLink,
  Menu,
  X,
  Monitor,
  ChevronRight,
} from "lucide-react";

// Workshop TODO:
// Replace "demo" with your own Cloudinary cloud name.
// You can find it in your Cloudinary dashboard.
const CLOUD_NAME = "dagd4g0bc";

function heroImage(publicId, width) {
  const transformations = [
    `c_fill,g_face,w_${width},ar_3:4`,
    `e_improve:50`,
    `e_vibrance:20`,
    `e_sharpen:30`,
    `r_80,bo_3px_solid_rgb:f43f5e`,
    `f_auto/q_auto`,
  ].join("/");
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformations}/${publicId}`;
}

function cloudinaryImage(publicId, transformations) {
  const t = transformations ? `${transformations}/` : ``;
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${t}${publicId}`;
}

function cloudinaryVideo(publicId, transformations) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${transformations}/${publicId}.mp4`;
}

function cloudinaryVideoPoster(publicId, offset, transformations) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/so_${offset}/${transformations}/${publicId}.jpg`;
}

const workExperience = [
  {
    id: "samples/cup-on-a-table",
    title: "Head of Operations",
    company: "Traced Systems",
  },
  {
    id: "samples/two-ladies",
    title: "Co-founder, Operations & Project Management",
    company: "Narin Co",
  },
  {
    id: "IMG_2860_k4fpfb",
    title: "Project Manager",
    company: "Millennial Consultant",
  },
  {
    id: "1750635534025_cpwj3o",
    title: "Communication Specialist",
    company: "Millennial Consultant",
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Memory Card Game",
      desc: "A memory game built with a focus on fun and challenge. Play online and test your memory skills.",
      link: "https://game-mind-hunters-project.onrender.com/",
      image:
        "https://res.cloudinary.com/dagd4g0bc/image/upload/v1716900000/game-memory-demo.png",
    },
    {
      title: "Event Startup",
      desc: "Built a secure Events backend API using Node.js, Express.js, PostgreSQL, and JWT authentication. Developed RESTful APIs with database integration.",
      link: "https://mid-backend-project.onrender.com/docs",
      image: cloudinaryImage(
        "samples/balloons",
        "c_fill,g_face,w_600,ar_16:9/e_improve:50/e_vibrance:20/e_sharpen:30/r_20,bo_2px_solid_rgb:f43f5e/f_auto/q_auto",
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-rose-100">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-rose-50 rounded-lg flex items-center justify-center font-bold text-rose-500 border border-rose-100">
              E
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-800">
              Ela Kazemzadeh
            </span>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-sm text-zinc-400 tracking-wide">
              <a href="#work" className="hover:text-zinc-900 transition-colors">
                Experience
              </a>
              <a
                href="#projects"
                className="hover:text-zinc-900 transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="hover:text-zinc-900 transition-colors"
              >
                Skills
              </a>
              <a
                href="#funzone"
                className="hover:text-zinc-900 transition-colors"
              >
                Fun Zone
              </a>
              <a
                href="#contact"
                className="hover:text-zinc-900 transition-colors"
              >
                Contact
              </a>
            </div>
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
            <a href="#work" onClick={() => setIsMenuOpen(false)}>
              Experience
            </a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)}>
              Skills
            </a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </div>
        )}
      </nav>

      <header className="min-h-screen flex items-center pt-20 px-6 bg-gradient-to-br from-amber-50/60 via-white to-rose-50/40">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-20">
          <div className="flex justify-center md:justify-end">
            <div className="w-72 sm:w-80 md:w-full md:max-w-sm lg:max-w-md">
              <img
                src={cloudinaryImage(
                  "61e51081-cde9-4021-b8df-99ed7afb1713",
                  "c_fill,g_face,w_600,ar_3:4/e_improve:50/e_vibrance:20/e_sharpen:30/r_80,bo_3px_solid_rgb:f43f5e/f_auto/q_auto",
                )}
                srcSet={`${heroImage("61e51081-cde9-4021-b8df-99ed7afb1713", 200)} 200w, 
                   ${heroImage("61e51081-cde9-4021-b8df-99ed7afb1713", 500)} 500w, 
                   ${heroImage("61e51081-cde9-4021-b8df-99ed7afb1713", 800)} 800w`}
                sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 448px"
                alt="Portfolio profile portrait"
                className="w-full"
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-rose-400 text-lg italic mb-3">
              Glad you're here — I'm
              <br />
              <br />
            </p>
            <h1 className="text-5xl md:text-8xl font-extralight tracking-tighter mb-6 leading-[0.9] uppercase text-zinc-900">
              Ela <br />
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-400">
                Kazemzadeh <br />
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-500 font-light leading-relaxed mb-10 max-w-lg">
              Operations-minded builder and lifelong learner. I enjoy turning
              ideas into structured execution while building hands-on experience
              with JavaScript, React, Node.js, APIs, and modern web development.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="px-10 py-4 bg-rose-400 text-white rounded-full font-semibold hover:bg-rose-500 transition-all hover:scale-105 flex items-center gap-2"
              >
                Get in Touch <ChevronRight size={18} />
              </a>
              <a
                href="#projects"
                className="px-10 py-4 border border-zinc-200 text-zinc-600 rounded-full font-light hover:border-rose-300 hover:text-rose-500 transition-all"
              >
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
              Every role teaches you something. Here are the experiences and
              people that have shaped me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {workExperience.map((job) => (
              <article
                key={`${job.company}-${job.title}`}
                className="group relative"
              >
                <div className="relative flex items-center justify-center overflow-hidden rounded-3xl bg-zinc-50 border border-zinc-100 transition-all duration-700 hover:shadow-2xl hover:shadow-rose-100 w-full aspect-[3/4] max-w-xs mx-auto">
                  <img
                    src={cloudinaryImage(
                      job.id,
                      "c_fill,g_face,w_320,h_420,ar_3:4/e_improve:50/e_vibrance:20/e_sharpen:30/r_40,bo_2px_solid_rgb:f43f5e/f_auto/q_auto",
                    )}
                    alt={`${job.title} at ${job.company}`}
                    loading="lazy"
                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <p className="text-white font-mono text-[10px] uppercase tracking-[0.3em] mb-2 font-bold bg-black px-3 py-1 rounded-md inline-block">
                      {job.company}
                    </p>
                    <h3 className="text-2xl font-light text-white">
                      {job.title}
                    </h3>
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
              <h2 className="text-5xl font-extralight tracking-tight text-zinc-900 uppercase">
                Selected Projects
              </h2>
              <p className="text-zinc-400 text-sm mt-1 italic">
                A selection of my recent work.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group space-y-8 rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-br from-rose-50 via-white to-amber-50 border border-rose-100 p-6 flex flex-col justify-between max-w-md mx-auto"
              >
                <div>
                  {/* Project image*/}
                  {project.title === "Memory Card Game" && (
                    <div className="relative flex items-center justify-center overflow-hidden rounded-3xl bg-zinc-50 border border-zinc-100 transition-all duration-700 hover:shadow-2xl hover:shadow-rose-100 w-full max-w-[12rem] mx-auto aspect-[3/4] mb-4">
                      <img
                        src={cloudinaryImage(
                          "memory-card-game-42-kartli-hafiza-ve-eslestirme-oyunu-su-alti-moritoys-788482_1500x_gazk53",
                          "c_fill,g_face,w_320,h_420,ar_3:4/e_improve:50/e_vibrance:20/e_sharpen:30/r_40,bo_2px_solid_rgb:f43f5e/f_auto/q_auto",
                        )}
                        alt="Memory Card Game preview"
                        className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity" />
                    </div>
                  )}
                  {project.title === "Event Startup" && (
                    <div className="relative flex items-center justify-center overflow-hidden rounded-3xl bg-zinc-50 border border-zinc-100 transition-all duration-700 hover:shadow-2xl hover:shadow-rose-100 w-full max-w-[12rem] mx-auto aspect-[3/4] mb-4">
                      <img
                        src={cloudinaryImage(
                          "samples/balloons",
                          "c_fill,g_face,w_320,h_420,ar_3:4/e_improve:50/e_vibrance:20/e_sharpen:30/r_40,bo_2px_solid_rgb:f43f5e/f_auto/q_auto",
                        )}
                        alt="Event Startup preview"
                        className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity" />
                    </div>
                  )}
                  <h3 className="text-2xl font-light mb-4 text-zinc-900 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 font-light leading-relaxed mb-8 text-lg">
                    {project.desc}
                  </p>
                </div>
                <a
                  href={project.link}
                  className="flex items-center gap-3 text-rose-500 font-semibold text-[10px] uppercase tracking-[0.3em] border-b border-rose-200 pb-2 hover:border-rose-500 transition-colors w-max"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title === "Event Startup"
                    ? "API Documentation"
                    : "Visit Project"}
                  <ExternalLink
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-amber-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-20">
            <div className="w-14 h-14 bg-white border border-rose-100 rounded-2xl flex items-center justify-center text-rose-400 shadow-sm">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zm0 13.5l-10-5V17l10 5 10-5v-6.5l-10 5z"
                  fill="#f43f5e"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-5xl font-extralight tracking-tight text-zinc-900 uppercase">
                Skills
              </h2>
              <p className="text-zinc-400 text-sm mt-1 italic">
                Technologies, tools & management strengths
              </p>
            </div>
          </div>

          {/* Managerial Skills Row */}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* Project Management */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow border border-rose-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-100 cursor-pointer">
              <span className="text-4xl">🗂️</span>
              <span className="mt-4 text-zinc-700 font-semibold">
                Project Management
              </span>
            </div>
            {/* Workflow Design */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow border border-rose-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-100 cursor-pointer">
              <span className="text-4xl">🔄</span>
              <span className="mt-4 text-zinc-700 font-semibold">
                Workflow Design
              </span>
            </div>
            {/* Agile Collaboration */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow border border-rose-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-100 cursor-pointer">
              <span className="text-4xl">🤝</span>
              <span className="mt-4 text-zinc-700 font-semibold">
                Agile Collaboration
              </span>
            </div>
            {/* Process Improvement */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow border border-rose-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-100 cursor-pointer">
              <span className="text-4xl">⚙️</span>
              <span className="mt-4 text-zinc-700 font-semibold">
                Process Improvement
              </span>
            </div>
            {/* HTML */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow border border-rose-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-100 cursor-pointer">
              <svg width="40" height="40" viewBox="0 0 128 128">
                <path
                  fill="#e44d26"
                  d="M19.5 114.7L8.1 0h111.8l-11.4 114.6L63.9 128"
                />
                <path fill="#f16529" d="M64 117.1l36.8-10.2 9.8-98.1H64" />
                <path
                  fill="#ebebeb"
                  d="M64 52.7H41.7l-1.2-13.7H64V25.7H27.2l.3 3.7 3.2 36.2H64v-12.9zm0 32.7l-.1.1-18.5-5-1.2-13.7H31.7l2.3 25.7 29.9 8.3.1-.1V85.4z"
                />
                <path
                  fill="#fff"
                  d="M63.9 52.7v13h19.2l-1.2 13.7-18 5v13.1l29.9-8.3.2-2.2 3.1-34.7.3-3.7H63.9zm0-27v13.3h21.6l1.2-13.3H63.9z"
                />
              </svg>
              <span className="mt-4 text-zinc-700 font-semibold">HTML</span>
            </div>
            {/* CSS */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow border border-rose-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-100 cursor-pointer">
              <svg width="40" height="40" viewBox="0 0 128 128">
                <path
                  fill="#1572b6"
                  d="M19.5 114.7L8.1 0h111.8l-11.4 114.6L63.9 128"
                />
                <path fill="#33a9dc" d="M64 117.1l36.8-10.2 9.8-98.1H64" />
                <path
                  fill="#fff"
                  d="M64 52.7H41.7l-1.2-13.7H64V25.7H27.2l.3 3.7 3.2 36.2H64v-12.9zm0 32.7l-.1.1-18.5-5-1.2-13.7H31.7l2.3 25.7 29.9 8.3.1-.1V85.4z"
                />
                <path
                  fill="#ebebeb"
                  d="M63.9 52.7v13h19.2l-1.2 13.7-18 5v13.1l29.9-8.3.2-2.2 3.1-34.7.3-3.7H63.9zm0-27v13.3h21.6l1.2-13.3H63.9z"
                />
              </svg>
              <span className="mt-4 text-zinc-700 font-semibold">CSS</span>
            </div>
            {/* JavaScript */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow border border-rose-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-100 cursor-pointer">
              <svg width="40" height="40" viewBox="0 0 128 128">
                <path fill="#f7df1e" d="M1.408 1.408h125.184v125.185H1.408z" />
                <path d="M116.042 116.042H11.958V11.958h104.084z" />
                <path d="M67.087 104.89c0 7.377-4.342 10.771-10.678 10.771-5.719 0-9.062-2.96-10.755-6.522l6.021-3.872c1.159 2.06 2.211 3.808 4.742 3.808 2.42 0 3.957-.949 3.957-4.646V66.13h7.713zm17.13 10.771c-6.654 0-10.963-3.176-13.04-7.344l6.021-3.822c1.587 2.6 3.655 4.542 7.31 4.542 3.073 0 5.04-1.537 5.04-3.655 0-2.54-2.01-3.44-5.396-4.927l-1.85-.793c-5.34-2.273-8.89-5.13-8.89-11.153 0-5.553 4.236-9.782 10.857-9.782 4.712 0 8.099 1.64 10.537 5.94l-5.779 3.707c-1.273-2.273-2.646-3.168-4.758-3.168-2.168 0-3.54 1.372-3.54 3.168 0 2.217 1.372 3.115 4.54 4.488l1.85.793c6.3 2.693 9.85 5.398 9.85 11.527 0 6.6-5.192 10.217-12.168 10.217z" />
              </svg>
              <span className="mt-4 text-zinc-700 font-semibold">
                JavaScript
              </span>
            </div>
            {/* Responsive Web Design */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow border border-rose-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-100 cursor-pointer">
              <span className="text-4xl">📱</span>
              <span className="mt-4 text-zinc-700 font-semibold">
                Responsive Web Design
              </span>
            </div>
            {/* Web Architecture */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow border border-rose-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-100 cursor-pointer">
              <span className="text-4xl">🏛️</span>
              <span className="mt-4 text-zinc-700 font-semibold">
                Web Architecture
              </span>
            </div>
            {/* Node.js & Express */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow border border-rose-50">
              <svg width="40" height="40" viewBox="0 0 128 128">
                <path fill="#8cc84b" d="M64 0l55.2 32v64L64 128 8.8 96V32z" />
                <path
                  fill="#fff"
                  d="M64 117.1l47.2-27.2V38.1L64 10.9 16.8 38.1v51.8z"
                />
                <path
                  fill="#333"
                  d="M64 20.7l38.4 22.3v44.1L64 107.3 25.6 87.1V42.9z"
                />
                <path
                  fill="#fff"
                  d="M64 97.1l31.2-18V49.1L64 31.1 32.8 49.1v30z"
                />
              </svg>
              <span className="mt-4 text-zinc-700 font-semibold">
                Node.js & Express
              </span>
            </div>
            {/* API Development & Authentication (JWT) */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow border border-rose-50">
              <span className="text-4xl">🔑</span>
              <span className="mt-4 text-zinc-700 font-semibold">
                API Development & JWT
              </span>
            </div>
            {/* SQL & PostgreSQL */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow border border-rose-50">
              <svg width="40" height="40" viewBox="0 0 128 128">
                <ellipse cx="64" cy="64" rx="56" ry="32" fill="#336791" />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dy=".3em"
                  fontSize="22"
                  fill="#fff"
                >
                  SQL
                </text>
              </svg>
              <span className="mt-4 text-zinc-700 font-semibold">
                SQL & PostgreSQL
              </span>
            </div>
            {/* Agile & Scrum */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow border border-rose-50">
              <span className="text-4xl">⚡</span>
              <span className="mt-4 text-zinc-700 font-semibold">
                Agile & Scrum
              </span>
            </div>
            {/* JIRA */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow border border-rose-50">
              <span className="text-4xl">📋</span>
              <span className="mt-4 text-zinc-700 font-semibold">JIRA</span>
            </div>
            {/* Git & GitHub */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow border border-rose-50">
              <svg width="40" height="40" viewBox="0 0 128 128">
                <path
                  fill="#181616"
                  d="M64 12C34.4 12 10 36.4 10 66c0 23.8 15.4 44 36.8 51.1 2.7.5 3.7-1.2 3.7-2.6v-9.2c-15 3.3-18.2-6.3-18.2-6.3-2.4-6-5.8-7.6-5.8-7.6-4.7-3.2.4-3.1.4-3.1 5.2.4 8 5.3 8 5.3 4.6 7.9 12.1 5.6 15.1 4.3.5-3.3 1.8-5.6 3.2-6.9-12-1.4-24.6-6-24.6-26.7 0-5.9 2.1-10.7 5.3-14.5-.5-1.3-2.3-6.7.5-14 0 0 4.5-1.4 14.7 5.5 4.3-1.2 8.9-1.8 13.5-1.8s9.2.6 13.5 1.8c10.2-6.9 14.7-5.5 14.7-5.5 2.8 7.3 1 12.7.5 14 3.3 3.8 5.3 8.6 5.3 14.5 0 20.8-12.6 25.3-24.6 26.7 1.8 1.6 3.4 4.7 3.4 9.5v14c0 1.4 1 3.1 3.7 2.6C102.6 110 118 89.8 118 66c0-29.6-24.4-54-54-54z"
                />
              </svg>
              <span className="mt-4 text-zinc-700 font-semibold">
                Git & GitHub
              </span>
            </div>
            {/* Trello */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow border border-rose-50">
              <span className="text-4xl">🗂️</span>
              <span className="mt-4 text-zinc-700 font-semibold">Trello</span>
            </div>
            {/* Basics of TypeScript */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow border border-rose-50">
              <svg width="40" height="40" viewBox="0 0 128 128">
                <rect width="128" height="128" rx="16" fill="#3178c6" />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dy=".3em"
                  fontSize="22"
                  fill="#fff"
                >
                  TS
                </text>
              </svg>
              <span className="mt-4 text-zinc-700 font-semibold">
                Basics of TypeScript
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Fun Zone / Hobbies Section */}
      <section className="py-32 px-6 bg-amber-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-20">
            <div className="w-14 h-14 bg-white border border-rose-100 rounded-2xl flex items-center justify-center text-rose-400 shadow-sm">
              <span className="text-3xl">🎲</span>
            </div>
            <div>
              <h2 className="text-5xl font-extralight tracking-tight text-zinc-900 uppercase">
                Fun Zone
              </h2>
              <p className="text-zinc-400 text-sm mt-1 italic">
                When I'm not building or managing, you can find me...
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-10 bg-white rounded-2xl shadow border border-rose-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-100 cursor-pointer">
              <span className="text-6xl mb-4">♟️</span>
              <span className="text-xl text-zinc-700 font-semibold mb-2">
                Playing Chess
              </span>
              <span className="text-zinc-400 text-base">
                Strategy, focus, and fun!
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-10 bg-white rounded-2xl shadow border border-rose-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-100 cursor-pointer">
              <span className="text-6xl mb-4">🧱</span>
              <span className="text-xl text-zinc-700 font-semibold mb-2">
                Building Lego
              </span>
              <span className="text-zinc-400 text-base">
                Creativity, patience, and color!
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-10 bg-white rounded-2xl shadow border border-rose-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-100 cursor-pointer">
              <span className="text-6xl mb-4">🏊‍♀️</span>
              <span className="text-xl text-zinc-700 font-semibold mb-2">
                Swimming
              </span>
              <span className="text-zinc-400 text-base">
                Energy, movement, and refreshment!
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="py-32 px-6 border-t border-rose-50 bg-gradient-to-b from-white to-amber-50/30"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-rose-50 border border-rose-100 rounded-[2.5rem] mb-12 flex items-center justify-center shadow-sm">
            <Mail size={32} className="text-rose-300" />
          </div>
          <h2 className="text-5xl md:text-7xl font-extralight tracking-tighter mb-8 text-zinc-900 uppercase">
            Let's Connect!
          </h2>
          <p className="text-zinc-400 max-w-lg mb-12 font-light text-lg leading-relaxed">
            I love meeting curious, creative people. Whether you want to
            collaborate, have a question, or just want to say hi — my inbox is
            always open.
          </p>
          <a
            href="mailto:ela.kazemzadeh@gmail.com"
            className="text-2xl md:text-5xl text-zinc-300 hover:text-rose-500 transition-colors border-b-2 border-zinc-100 hover:border-rose-300 pb-4 mb-20 inline-block font-thin tracking-tight"
          >
            Ela.Kazemzadeh@gmail.com
          </a>

          <div className="flex gap-8 mb-24 opacity-60 hover:opacity-100 transition-opacity">
            <a
              href="#"
              className="text-zinc-400 hover:text-rose-500 transition-colors"
              aria-label="Portfolio site"
            >
              <Monitor size={28} />
            </a>
          </div>

          <div className="w-full pt-16 border-t border-amber-50 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-300 text-[9px] font-mono tracking-[0.4em] uppercase">
            <p>© 2026 Ela Kazemzadeh</p>
            <div className="flex gap-12 text-zinc-400">
              <a
                href="https://www.linkedin.com/in/ela-kazemzadeh"
                className="hover:text-rose-500 transition-colors flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="/Ela%20Kazemzadeh_CV_HYF.pdf"
                className="hover:text-rose-500 transition-colors flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume (CV)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M12 16v-8m0 8l-3-3m3 3l3-3M5 20h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
                Resume
              </a>
              <a
                href="https://github.com/Elkaz"
                className="hover:text-rose-500 transition-colors flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
