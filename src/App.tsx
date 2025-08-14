import React, { useState } from "react";
import "./app.css";


const experiences = [
  {
    role: "Software Engineer",
    company: "Entim Labs",
    duration: "Jan 2024 - Present",
    description: "Build Spotify Bots and Dashboard for tracking Spotify artists revenue by demographics",
  },
  {
    role: "MERN STACK Developer",
    company: "Upwork",
    duration: "Jan 2023 - Dec 2023",
    description: "Worked on backend APIs and cloud deployments.",
  },
  {
    role: "Junior Software Developer",
    company: "PMG Marketing",
    duration: "May 2022 - Dec 2022",
    description: "Worked on backend APIs and cloud deployments.",
  },
];

const projects = [
  {
    title: "SnapScore",
    description: "An adb bot to improve Snapscore Automatically",
    github: "https://github.com/h4ssan/portfolio",
    live: "https://h4ssan.dev",
    responsive: true,
  },
  {
    title: "Task Manager",
    description: "A productivity app for managing tasks.",
    github: "https://github.com/h4ssan/task-manager",
    live: "https://taskmanager.h4ssan.dev",
    responsive: true,
  },
  {
    title: "Blog Platform",
    description: "A simple blog platform with markdown support.",
    github: "https://github.com/h4ssan/blog-platform",
    live: "https://blog.h4ssan.dev",
    responsive: true,
  },
];

const socials = [
  {
    icon: (
      <svg width="24" height="24" fill="currentColor">
        <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 12 9.5c0 .34.04.67.1.99A12.13 12.13 0 0 1 3.15 4.6a4.28 4.28 0 0 0 1.32 5.71c-.7-.02-1.36-.21-1.93-.53v.05a4.28 4.28 0 0 0 3.43 4.19c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.29 4.29 0 0 0 4 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.38-.02-.57A8.72 8.72 0 0 0 24 4.59a8.59 8.59 0 0 1-2.54.7z"/>
      </svg>
    ),
    link: "https://twitter.com/h4ssan",
    label: "Twitter",
  },
  {
    icon: (
      <svg width="24" height="24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12c0-5.52-4.48-10-10-10z"/>
      </svg>
    ),
    link: "https://facebook.com/h4ssan",
    label: "Facebook",
  },
  {
    icon: (
      <svg width="24" height="24" fill="currentColor">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.07-.93-2-2-2s-2 .93-2 2v4.5h-3v-9h3v1.22c.41-.63 1.2-1.22 2.08-1.22 1.66 0 3.02 1.36 3.02 3.03v5.97z"/>
      </svg>
    ),
    link: "https://linkedin.com/in/h4ssan",
    label: "LinkedIn",
  },
  {
    icon: (
      <svg width="24" height="24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
    link: "https://github.com/h4ssan",
    label: "GitHub",
  },
];

const resumeUrl = "/resume.pdf"; // Replace with actual resume link

const App: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div style={{ fontFamily: "Mozilla Text, sans-serif", background: "#f8f9fa", minHeight: "100vh", color: "#252525" }}>
      {/* Navbar */}
      <nav
        style={{
          width: "100%",
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem",
          }}
        >
          <span style={{ fontWeight: 900, fontSize: "1.5rem", letterSpacing: "1px" }}>HS</span>
          <div className="nav-menu" style={{ display: "flex", gap: "2rem" }}>
            <div className="nav-links" style={{ display: navOpen ? "flex" : "none", flexDirection: "column", position: "absolute", top: 64, right: 16, background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", borderRadius: 8, padding: "1rem", zIndex: 20, minWidth: 180 }}>
              <a href="#experience" style={navLinkStyle}>Experience</a>
              <a href="#projects" style={navLinkStyle}>Projects</a>
              <a href={resumeUrl} style={navLinkStyle} download>Resume</a>
            </div>
            <div className="nav-links-desktop" style={{ display: "flex", gap: "2rem" }}>
              <a href="#experience" style={navLinkStyleDesktop}>Experience</a>
              <a href="#projects" style={navLinkStyleDesktop}>Projects</a>
              <a href={resumeUrl} style={navLinkStyleDesktop} download>Resume</a>
            </div>
            <button
              aria-label="Open navigation"
              onClick={() => setNavOpen((v) => !v)}
              style={{
                background: "none",
                border: "none",
                display: "none",
                cursor: "pointer",
                padding: 0,
                marginLeft: "1rem",
              }}
              className="hamburger-btn"
            >
              <svg width="32" height="32" viewBox="0 0 32 32">
                <rect y="7" width="32" height="3" rx="1.5" fill="#222" />
                <rect y="15" width="32" height="3" rx="1.5" fill="#222" />
                <rect y="23" width="32" height="3" rx="1.5" fill="#222" />
              </svg>
            </button>
          </div>
        </div>
        {/* Responsive styles */}
        <style>
          {`
            @media (max-width: 700px) {
              .nav-links-desktop {
                display: none !important;
              }
              .hamburger-btn {
                display: block !important;
              }
              .nav-links {
                display: ${navOpen ? "flex" : "none"} !important;
              }
            }
            @media (min-width: 701px) {
              .nav-links {
                display: none !important;
              }
              .hamburger-btn {
                display: none !important;
              }
              .nav-links-desktop {
                display: flex !important;
              }
            }
          `}
        </style>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "3rem 1rem 2rem 1rem",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem", letterSpacing: "2px" }}>
          Muhammad Hassan
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "2rem" }}>
          Software Engineer | Building modern web experiences
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <a href="mailto:hassan@example.com" style={ctaBtnStyle}>
            Hire Me
          </a>
          <a href={resumeUrl} style={ctaBtnStyle} download>
            Resume <i class="fa-solid fa-download"></i>
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        <h2 style={{ textAlign: "center", fontWeight: 700, fontSize: "2rem", marginBottom: "2rem" }}>Experience</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              style={{
                background: "#fff",
                borderRadius: 8,
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>{exp.role}</div>
              <div style={{ color: "#888", marginBottom: "0.5rem" }}>{exp.company} &middot; {exp.duration}</div>
              <div style={{ color: "#555" }}>{exp.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        <h2 style={{ textAlign: "center", fontWeight: 700, fontSize: "2rem", marginBottom: "2rem" }}>Projects</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
          }}
        >
          {projects.map((proj, idx) => (
            <div
              key={idx}
              style={{
                background: "#fff",
                borderRadius: 10,
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                padding: "1.5rem",
                transition: "transform 0.2s, box-shadow 0.2s",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                cursor: "pointer",
              }}
              className="project-card"
            >
              <h3 style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.5rem" }}>{proj.title}</h3>
              <p style={{ color: "#555", marginBottom: "1rem" }}>{proj.description}</p>
              <div style={{ display: "flex", gap: "1rem" }}>
                <a href={proj.github} target="_blank" rel="noopener noreferrer" style={projectBtnStyle}>
                  GitHub
                </a>
                <a href={proj.live} target="_blank" rel="noopener noreferrer" style={projectBtnStyle}>
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
        <style>
          {`
            .project-card:hover {
              transform: translateY(-6px) scale(1.03);
              box-shadow: 0 6px 24px rgba(0,0,0,0.10);
            }
          `}
        </style>
      </section>

      {/* CTA Section */}
      <section style={{ textAlign: "center", padding: "2rem 1rem" }}>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <a href="mailto:hassan@example.com" style={ctaBtnStyle}>
            Hire Me
          </a>
          <a href={resumeUrl} style={ctaBtnStyle} download>
             Resume <i class="fa-solid fa-download"></i>
          </a>
        </div>
      </section>

      {/* Socials */}
      <footer style={{ textAlign: "center", padding: "2rem 1rem 1rem 1rem" }}>
        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", marginBottom: "1rem" }}>
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              style={{
                color: "#222",
                transition: "color 0.2s",
                fontSize: "1.5rem",
                display: "inline-flex",
                alignItems: "center",
              }}
              onMouseOver={e => (e.currentTarget.style.color = "#007bff")}
              onMouseOut={e => (e.currentTarget.style.color = "#222")}
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div style={{ color: "#888", fontSize: "0.95rem", marginTop: "1rem" }}>
          &copy; 2025 Muhammad Hassan
        </div>
      </footer>
    </div>
  );
};

// Styles
// Styles for navigation links (mobile)
const navLinkStyle: React.CSSProperties = {
  color: "#222",
  textDecoration: "none",
  fontWeight: 500,
  padding: "0.5rem 0",
  fontSize: "1rem",
  borderRadius: 6,
  transition: "background 0.2s",
  marginBottom: "0.5rem",
};

// Styles for navigation links (desktop)
const navLinkStyleDesktop: React.CSSProperties = {
  ...navLinkStyle,
  marginBottom: 0,
  padding: "0.5rem 1rem",
};

// Styles for call-to-action buttons (e.g., "Hire Me", "Download Resume")
const ctaBtnStyle: React.CSSProperties = {
  background: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  padding: "0.75rem 1.5rem",
  fontWeight: 600,
  fontSize: "1rem",
  textDecoration: "none",
  transition: "background 0.2s",
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
};

// Styles for project action buttons (e.g., "GitHub", "Live")
const projectBtnStyle: React.CSSProperties = {
  background: "#f1f3f5",
  color: "#007bff",
  border: "none",
  borderRadius: 6,
  padding: "0.5rem 1rem",
  fontWeight: 500,
  fontSize: "0.95rem",
  textDecoration: "none",
  transition: "background 0.2s, color 0.2s",
  cursor: "pointer",
};

export default App;