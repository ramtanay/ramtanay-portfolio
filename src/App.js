import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const [blogs, setBlogs] = useState([]);
  const projects = [
    {
      name: "Drishti AI",
      desc: "AI assistant for the visually impaired",
      image: "visiaid.jpg",
    },
    {
      name: " Real-Time Face Recognition System",
      desc: "A real-time face recognition system for highly accurate face matching.",
      image: "faceRecognition.png",
    },

        {
      name: " Rock Paper Scissors Game",
      desc: "A fun, interactive Rock Paper Scissors game.",
      image: "rockpaper.png",
    },
        {
      name: "Tic Tac Toe Game",
      desc: "A classic Tic Tac Toe game .",
      image: "TicTacToe.png",
    },
  ];

  useEffect(() => {
    setBlogs([
      {
        title: "Building VisiAid: My Hackathon Journey",
        summary: "In one of my most exciting hackathons, I created 'VisiAid' — an AI-powered assistant for the visually impaired...",
      },
      {
        title: "Learning Web Dev from Scratch",
        summary: "I started web development like most people — with a blank HTML file and a dream....",
      },
      {
        title: "How I’m Using AI to Solve Real Problems",
        summary: "AI isn’t just a buzzword to me — it’s a toolbox. In my projects, I use it to 'describe scenes for blind users'...",
      },
      {
        title: "Why I’m Obsessed with Real-Time Projects",
        summary: "Whether it's a 'face recognition system' , a smart Arduino car, or a voice-controlled app, I love working with 'real-time tech'...",
      },
    ]);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen font-sans transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow z-50 transition-colors duration-300">
        <h1 className="text-xl font-bold cursor-pointer" onClick={() => scrollTo('home')}>Ramtanay</h1>
        <div className="space-x-4 text-sm font-medium">
          {['home', 'projects', 'blog', 'contact'].map((id) => (
            <button key={id} onClick={() => scrollTo(id)} className="hover:text-blue-500 capitalize">
              {id}
            </button>
          ))}
          <a href="/resume.pdf" download className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Resume</a>
          <button onClick={() => setDarkMode(!darkMode)} className="ml-2 text-xl">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="pt-24 text-center px-4">
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-extrabold mb-2">Ramtanay Chakraborty</h1>
          <h2 className="text-xl text-blue-400 dark:text-blue-300">
            <Typewriter words={['Web Developer', 'ML Engineer', 'AI Enthusiast' ]} loop cursor cursorStyle="|" typeSpeed={60} deleteSpeed={40} delaySpeed={1500} />
          </h2>
          <img src="/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto mt-6 border-4 border-blue-500" />
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="mt-20 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 transition-colors duration-300">
              <img src={`/projects/${proj.image}`} alt={proj.name} className="rounded mb-3" />
              <h3 className="text-xl font-bold text-blue-600">{proj.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">{proj.desc}</p>
              <Link to={`/project/${i}`} className="text-blue-400 underline mt-2 inline-block">View Project</Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="mt-20 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">Blog</h2>
        <div className="space-y-4">
          {blogs.map((blog, i) => (
            <div key={i} className="p-4 bg-white dark:bg-gray-800 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold">{blog.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{blog.summary}</p>
              <Link to={`/blog/${i}`} className="text-blue-500 underline mt-1 inline-block">Read More</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-20 max-w-5xl mx-auto mb-20 px-4">
        <h2 className="text-3xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">Contact</h2>
        <form name="contact" method="POST" data-netlify="true" className="space-y-4">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 rounded border dark:bg-gray-800" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 rounded border dark:bg-gray-800" />
          <textarea name="message" placeholder="Your Message" required className="w-full p-2 rounded border dark:bg-gray-800" />
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Send</button>
        </form>
      </section>
      <Footer />
    </main>
  );
}
