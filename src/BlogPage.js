// src/BlogPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Footer from './components/Footer';



const blogData =
[
  {
    title: "Building VisiAid: My Hackathon Journey",
    content: `# Building VisiAid: My Hackathon Journey

In one of my most exciting hackathons, I created **VisiAid** — an AI-powered assistant for the visually impaired. It combined real-time **scene description**, **OCR-based text recognition**, and **voice feedback** using the Groq Vision API.

I used a Flask backend, React Native frontend, and carefully engineered voice commands like "describe" or "read". The result? A modular, accessible tool that made a real impact.

This project showed me how AI can directly help people, and it inspired me to keep building tech with purpose.`,
  },
  {
    title: "Learning Web Dev from Scratch",
    content: `# Learning Web Dev from Scratch

I started web development like most people — with a blank HTML file and a dream.

At first, it was just about getting buttons and sections on a page. But as I learned React, Tailwind CSS, and routing, everything clicked. I started building interactive apps with smooth navigation, responsive design, and even auto-scrolling blogs.

Now, web dev is my creative space. It's where I turn ideas into real, beautiful interfaces.`,
  }
,
  {
    title: "How I’m Using AI to Solve Real Problems",
    content: `# How I’m Using AI to Solve Real Problems

AI isn’t just a buzzword to me — it’s a toolbox. In my projects, I use it to **describe scenes for blind users**, **recognize faces in real time**, or **answer questions with TTS**.

I’ve worked with APIs like **Groq Vision**, **OCR.Space**, and implemented **Minimax AI** in games. And every time I do, I’m reminded of one thing:

AI is most powerful when it’s practical. When it helps people. When it works in real time.`,
  }
  ,
  {
    title: "Why I’m Obsessed with Real-Time Projects",
    content: `# Why I’m Obsessed with Real-Time Projects

Whether it's a **face recognition system**, a smart Arduino car, or a voice-controlled app, I love working with **real-time tech**.

There's something thrilling about building systems that see, hear, and respond instantly. These projects push me to work with sensors, APIs, databases, and performance tuning — all while thinking about user experience.

They also teach me something more important: how to build software that interacts with the world.`,
  }
];

export default function BlogPage() {
  const { id } = useParams();
  const blog = blogData[parseInt(id)];

  return (
    <><Layout>
      {!blog ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Blog Not Found</h2>
          <Link to="/" className="text-blue-500 underline">Back to Home</Link>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 whitespace-pre-line">{blog.content}</p>
          <Link to="/" className="inline-block mt-6 text-blue-600 underline">← Back to Home</Link>
        </div>
      )}
    </Layout><Footer /></>
    
  );
}
