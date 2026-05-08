import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <ThemeProvider>
      <Helmet>
        <title>Aneek Kumar - Full Stack Developer</title>
        <meta name="description" content="Portfolio of Aneek Kumar, a passionate full-stack developer specializing in React, Node.js, and modern web technologies." />
        <meta name="keywords" content="React Developer, Full Stack Developer, Web Developer, JavaScript, Portfolio" />
        <meta name="author" content="Aneek Kumar" />
        <link rel="canonical" href="https://aneek-portfolio.com" />
      </Helmet>

      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {!loading && (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
          <ScrollProgress />
          <CustomCursor />
          <Navigation />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Journey />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
