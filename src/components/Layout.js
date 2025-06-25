// src/components/Layout.js
import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  // Apply dark mode class to <html>
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) html.classList.add('dark');
    else html.classList.remove('dark');
  }, [darkMode]);

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className={`${darkMode ? 'dark' : ''} bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen font-sans`}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow z-50">
        <Link to="/" className="text-xl font-bold cursor-pointer">Ramtanay</Link>
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

      {/* Page Content Wrapper */}
      <div className="pt-24 px-4">{children}</div>
    </main>
  );
}
