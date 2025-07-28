import React, { useState } from 'react';
import './App.css';
import homepageImg from './homepage.jpg';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

function Home() {
  const courseCards = [
    { title: 'Beginner JavaScript', desc: 'Start your coding journey with interactive JS lessons.' },
    { title: 'React Essentials', desc: 'Build modern UIs with React and hooks.' },
    { title: 'Python for All', desc: 'Learn Python from scratch with hands-on projects.' },
  ];
  const practiceCards = [
    { title: 'Daily Challenge', desc: 'Solve a new coding problem every day.' },
    { title: 'Code Playground', desc: 'Experiment and test your code in-browser.' },
    { title: 'Leaderboard', desc: 'Compete and climb the ranks!' },
  ];
  const communityCards = [
    { title: 'Discussion Forums', desc: 'Ask questions and help others.' },
    { title: 'Events & Webinars', desc: 'Join live sessions and workshops.' },
    { title: 'Peer Reviews', desc: 'Get feedback on your code.' },
  ];

  const navigate = useNavigate();

  return (
    <>
      <header className="App-header">
        <img
          src="/logo.png"
          alt="ByteWise Logo"
          style={{ width: '110px', height: '110px', objectFit: 'contain', marginBottom: '1rem', boxShadow: '0 4px 24px 0 rgba(26,35,126,0.12)', borderRadius: '18px' }}
        />
        <h1>ByteWise EdTech Platform</h1>
        <p>Learn to code, practice your skills, and join a vibrant community!</p>
        <button className="cta-btn">Get Started</button>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem', padding: 0 }}>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/practice">Practice</Link></li>
            <li><Link to="/community">Community</Link></li>
          </ul>
        </nav>
      </header>

      <div className="hero-section fade-in">
        <h1 className="hero-title">Welcome to ByteWise</h1>
        <p className="hero-subtitle">Empowering your coding journey with interactive courses, real-world practice, and a vibrant community.</p>
        <button className="cta-btn hero-cta" onClick={() => navigate('/courses')}>Start Learning</button>
      </div>

      <main className="main-flex">
        <div className="homepage-img-wrapper side-img">
          <img src={homepageImg} alt="Homepage Visual" className="homepage-img" />
        </div>
        <div className="main-sections">
          <section id="courses">
            <h2 className="fade-in">📚 Courses</h2>
            <div className="card-row">
              {courseCards.map((card, i) => (
                <div className="card fade-in" style={{ animationDelay: `${i * 0.15 + 0.1}s` }} key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="practice">
            <h2 className="fade-in">💻 Practice</h2>
            <div className="card-row">
              {practiceCards.map((card, i) => (
                <div className="card fade-in" style={{ animationDelay: `${i * 0.15 + 0.1}s` }} key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="community">
            <h2 className="fade-in">🤝 Community</h2>
            <div className="card-row">
              {communityCards.map((card, i) => (
                <div className="card fade-in" style={{ animationDelay: `${i * 0.15 + 0.1}s` }} key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

function Courses() {
  return (
    <div className="page-attract">
      <div className="page-illustration">
        <img src={process.env.PUBLIC_URL + '/homepage.jpg'} alt="Courses Illustration" />
      </div>
      <h2 className="page-title">Explore Our Coding Courses</h2>
      <p className="page-desc">From beginner to advanced, our interactive courses help you master programming step by step. Start your journey today!</p>
      <ul className="page-list">
        <li>JavaScript Essentials</li>
        <li>React for Beginners</li>
        <li>Python Bootcamp</li>
        <li>Data Structures & Algorithms</li>
      </ul>
    </div>
  );
}

function Practice() {
  return (
    <div className="page-attract">
      <div className="page-illustration">
        <img src={process.env.PUBLIC_URL + '/practice.png'} alt="Practice Illustration" />
      </div>
      <h2 className="page-title">Sharpen Your Skills</h2>
      <p className="page-desc">Solve coding challenges, participate in contests, and practice with real-world problems. Track your progress and climb the leaderboard!</p>
      <ul className="page-list">
        <li>Daily Coding Challenges</li>
        <li>Code Playground</li>
        <li>Leaderboard & Achievements</li>
      </ul>
    </div>
  );
}

function Community() {
  return (
    <div className="page-attract">
      <div className="page-illustration">
        <img src={process.env.PUBLIC_URL + '/community.png'} alt="Community Illustration" />
      </div>
      <h2 className="page-title">Join Our Community</h2>
      <p className="page-desc">Connect with fellow learners, join discussions, attend live events, and get feedback on your code. Grow together!</p>
      <ul className="page-list">
        <li>Discussion Forums</li>
        <li>Events & Webinars</li>
        <li>Peer Code Reviews</li>
      </ul>
    </div>
  );
}

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-card fade-in">
        <h2>Sign In to ByteWise</h2>
        <form className="auth-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="cta-btn">Sign In</button>
        </form>
        <p className="auth-switch">Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
}

function Signup() {
  return (
    <div className="auth-page">
      <div className="auth-card fade-in">
        <h2>Create Your ByteWise Account</h2>
        <form className="auth-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="cta-btn">Sign Up</button>
        </form>
        <p className="auth-switch">Already have an account? <Link to="/login">Sign In</Link></p>
      </div>
    </div>
  );
}

type ThemeType = 'light' | 'dark' | 'mono';

function App() {
  const [theme, setTheme] = useState<ThemeType>('light');
  const themeOrder: ThemeType[] = ['light', 'dark', 'mono'];
  const themeIcons: Record<ThemeType, React.ReactNode> = {
    light: <span>🌞</span>,
    dark: <span>🌙</span>,
    mono: <span>🌓</span>,
  };

  const handleThemeToggle = () => {
    const idx = themeOrder.indexOf(theme);
    setTheme(themeOrder[(idx + 1) % themeOrder.length]);
  };

  return (
    <div className={`App theme-${theme}`}>
      <Router>
        <div style={{ position: 'absolute', top: 18, right: 32, zIndex: 10, display: 'flex', gap: '1rem' }}>
          <Link to="/login" className="auth-btn">Sign In</Link>
          <Link to="/signup" className="auth-btn auth-btn-signup">Sign Up</Link>
        </div>
        <button
          className="theme-icon-toggle"
          onClick={handleThemeToggle}
          aria-label="Toggle theme"
          style={{ position: 'absolute', top: 18, left: 32, zIndex: 10, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          {themeIcons[theme]}
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/community" element={<Community />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
