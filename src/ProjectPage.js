// src/ProjectPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from './components/Layout'; // Import shared layout
import Footer from './components/Footer';


const projectData = [
  {
    name: "VisiAid",
    description: `An AI-powered real-time assistant for the visually impaired using Groq, OCR, and voice.
    
Key features:
- Scene description
- OCR-based reading
- Voice interaction
- Navigation support`,
    image: "Visiaid.jpg",
  },
  {
    name: " Real-Time Face Recognition System Using DeepFace and OpenCV",
    description: `A real-time face recognition system that leverages OpenCV for live webcam input and DeepFace’s ArcFace model for highly accurate face matching. This project detects faces from live video feed, compares them against a local dataset (LFW format), and highlights recognized faces with names in real-time. It also handles unknown faces gracefully and uses efficient error handling, dynamic confidence thresholds, and clean UI overlays.

Key Features:

Real-time face detection using Haar cascades.

Face recognition with DeepFace’s ArcFace model.

Dynamic name labeling and bounding box color codes (green for recognized, red for unknown).

Dataset-driven recognition (LFW-style folders).

Clean exit handling and logging for debugging.

Easily extendable with GPU support or embedding optimization.

Tech Stack:

Python, OpenCV, DeepFace, TensorFlow`,
    image: "faceRecognition.png",
  },

  {
    name: "Rock Paper Scissors – Interactive Browser Game",
    description: `A fun, interactive Rock Paper Scissors game built with HTML, CSS, and JavaScript. Players compete against a computer opponent in real-time with animated score tracking, visual feedback, and result messages. The game logic handles user input, random computer selection, game outcome comparison, and live scoreboard updates.

Features:

Classic Rock, Paper, Scissors game logic

Real-time score display (User, Computer, Draw)

Responsive image-based UI

Dynamic message display for user moves and results

Easy to extend or restyle

Tech Stack:

HTML5, CSS3, JavaScript (Vanilla)`,
    image: "rockpaper.png",
  },
  
  {
    name: "Tic Tac Toe – Smart & Responsive Game",
    description: `A classic Tic Tac Toe game built with HTML, CSS, and JavaScript. It features two modes: Player vs Player and Player vs Bot (AI) using the Minimax algorithm. Includes dark mode, sound effects, and is fully mobile responsive.

✅ Key Features:
🎮 Two gameplay modes: Friend or AI opponent

🌙 Dark mode toggle for better accessibility

🔊 Sound effect on win (customizable with your own MP3)

🤖 AI built using Minimax with Alpha-Beta pruning

📱 Fully responsive for mobile play.`,
    image: "TicTacToe.png",
  },

];

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectData[parseInt(id)];

  if (!project) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold">Project Not Found</h2>
          <Link to="/" className="text-blue-500 underline">Back to Home</Link>
        </div>
      </Layout>
    );
  }

  return (
    <><Layout>
      <div className="max-w-3xl mx-auto">
        <img src={`/projects/${project.image}`} alt={project.name} className="rounded mb-6 shadow-lg w-full max-h-[400px] object-cover" />
        <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 whitespace-pre-line">{project.description}</p>
        <Link to="/" className="inline-block mt-6 text-blue-600 underline">← Back to Home</Link>
      </div>
    </Layout><Footer /></>
  );
}
