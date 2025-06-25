// src/index.js
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import BlogPage from './BlogPage';
import ProjectPage from './ProjectPage';
import './index.css'; // TailwindCSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog/:id" element={<BlogPage />} />
      <Route path="/project/:id" element={<ProjectPage />} />
    </Routes>
  </Router>
);
