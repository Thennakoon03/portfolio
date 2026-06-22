import { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import githubIcon from '../assets/github.png';
import gmailIcon from '../assets/gmail.png';
import leftIcon from '../assets/left.png';
import linkedinIcon from '../assets/linkedin.png';
import projectImage from '../assets/project.png';
import rightIcon from '../assets/right.png';
import skillsImage from '../assets/skills.png';
import resumeFile from '../assets/ASENI THENNAKOON.pdf';
import nodeLogo from '../assets/logos/Nodejs.png';
import reactLogo from '../assets/react.svg';
import springLogo from '../assets/logos/spring-boot-logo.png';
import expressLogo from '../assets/logos/Expressjs.png';
import mongoLogo from '../assets/logos/mongo2.png';
import firebaseLogo from '../assets/logos/Firebase.png';
import dockerLogo from '../assets/logos/docker.svg';
import kubernetesLogo from '../assets/logos/Kubernetes.svg';
import githubLogo from '../assets/logos/githubLogo.png';
import htmlLogo from '../assets/logos/html.png';
import cssLogo from '../assets/logos/css.png';
import jsLogo from '../assets/logos/js1.png';
import deanListy1s1 from '../assets/files/year1 s1 dean list.jpeg';
import deanListy1s2 from '../assets/files/y1 s2 dean list.jpeg';
import mongoCert from '../assets/files/mongodb java path.pdf';
import frontendCert from '../assets/files/Microsoft frontend certificate.pdf';
import emergingTech from '../assets/files/Emerging Technologies.pdf';


const projects = [
  {
    name: 'Mediconnect',
    description:
      'Full-stack healthcare management platform with appointment booking, telemedicine, and secure payments using Microservices architecture.',
    link: 'https://github.com/ShewonGun/DS-GROUP.git',
    tech: [
      'React',
      'Node.js',
      'Express',
      'Docker',
      'Kubernetes',
      'Agora SDK',
      'Tailwind CSS'
    ],
    contribution:
      'Developed the Doctor Service and Telemedicine Service for doctor management and virtual consultations.',
  },
  {
    name: 'AgroFund',
    description:
      'Full-stack agriculture platform with course learning, loan management, support tickets, and admin planning with weather integration.',
    link: 'https://github.com/ShewonGun/FarmerApp.git',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB'],
    contribution:
      'Contributed to the loan management system by supporting loan applications, repayments, and loan status tracking.',
  },
  {
    name: 'EcoWaste',
    description:
      'Sustainable waste management platform with role-based access, smart-bin scanning, route visibility, and community-focused workflows.',
    link: 'https://github.com/DasunShanaka01/EcoWaste-Solutions.git',
    tech: ['Spring Boot', 'React', 'MongoDB', 'Vitest'],
    contribution:
      'Developed the special waste management module with dynamic pricing, QR verification, GPS pickup selection, and collector maps.',
  },
  {
    name: 'RebuildHub',
    description:
      'Emergency response mobile app with offline-aware reporting, map interactions, and faster visibility into disaster recovery activity.',
    link: 'https://github.com/DasunShanaka01/RebuildHub.git',
    tech: ['React Native', 'Firebase', 'AsyncStorage'],
    contribution:
      'Developed interactive disaster maps with clustered markers, severity-based indicators, real-time updates, and emergency zone visualization.',
  },
  {
    name: 'FixItNow',
    description:
      'Repair marketplace connecting users with verified technicians through service flows designed for reliability and urgency.',
    link: 'https://github.com/DasunShanaka01/FixItNow.git',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    contribution:
      'Developed product inventory management and multi-method payment processing with order updates and email confirmations.',
  },
  {
    name: 'StreetBites',
    description:
      'Mobile food ordering experience with polished category browsing, dish discovery, and task-focused navigation.',
    link: 'https://github.com/Thennakoon03/StreetBites-Mobile-App.git',
    tech: ['Kotlin', 'Android Studio', 'XML'],
  },

];

const skills = {
  'Languages': ['Java', 'JavaScript', 'Python', 'C', 'C++', 'Kotlin'],
  'Frontend & Mobile': ['React.js', 'React Native', 'HTML', 'CSS', 'Tailwind CSS'],
  'Backend & DBs': ['Node.js', 'Spring Boot', 'REST APIs', 'MongoDB', 'MySQL', 'Firebase'],
  'DevOps & Core': ['Docker', 'Kubernetes', 'Git', 'OOP', 'Data Structures', 'Agile'],
};

const techStacks = [
  { name: 'React', logo: reactLogo },
  { name: 'Node.js', logo: nodeLogo },
  { name: 'Express', logo: expressLogo },
  { name: 'MongoDB', logo: mongoLogo },
  { name: 'Spring Boot', logo: springLogo },
  { name: 'Firebase', logo: firebaseLogo },
  { name: 'Git', logo: githubLogo },
  { name: 'Docker', logo: dockerLogo },
  { name: 'Kubernetes', logo: kubernetesLogo },
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'JavaScript', logo: jsLogo },
];

const awards = [
  {
    title: "Dean's List Award",
    year: '2023-July',
    description:
      'Recognized for outstanding academic performance and semester excellence.',
    icon: '🏆',
    file: deanListy1s1,
  },
  {
    title: "Dean's List Award",
    year: '2024-January',
    description:
      'Awarded for maintaining high academic achievement and consistent results.',
    icon: '⭐',
    file: deanListy1s2,
  },
];

const certificates = [
  {
    title: 'Foundations of Coding Front-End',
    issuer: 'Microsoft',
    year: '2026',
    file: frontendCert,
    icon: '💻',
  },
  {
    title: 'MongoDB Java Developer Path',
    issuer: 'MongoDB',
    year: '2025',
    file: mongoCert,
    icon: '🍃',
  },
  {
    title: 'Exploring Emerging Technologies for Lifelong Learning and Success',
    issuer: 'Coursera & The State University of New York',
    year: '2023',
    file: emergingTech,
    icon: '🎓',
  },
];

const highlights = [
  'Full-stack product development across web and mobile',
  'Strong interest in modern interface design and motion',
  'Experience with academic projects solving practical problems',
  'Comfortable moving between frontend, backend, and mobile work',
];

function useTypewriter(text, speed = 90) {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const isComplete = typedText === text;
    const isEmpty = typedText === '';

    const delay = isComplete
      ? 1200
      : isDeleting && !isEmpty
        ? 55
        : !isDeleting
          ? speed
          : 250;

    const timer = window.setTimeout(() => {
      if (!isDeleting && !isComplete) {
        setTypedText(text.slice(0, typedText.length + 1));
        return;
      }

      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && !isEmpty) {
        setTypedText(text.slice(0, typedText.length - 1));
        return;
      }

      setIsDeleting(false);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isDeleting, speed, text, typedText]);

  return typedText;
}

function ThemeToggle({ isDark, onToggle }) {
  return (
    <button type="button" onClick={onToggle} className="theme-toggle" aria-label="Toggle theme">
      <span className="theme-toggle__icon" aria-hidden="true">
        {isDark ? (
          <svg viewBox="0 0 24 24">
            <path
              d="M12 3.5v2.2m0 12.6v2.2M3.5 12h2.2m12.6 0h2.2m-3.98-5.52 1.56-1.56M5.92 18.08l1.56-1.56m0-10.04L5.92 4.92m12.16 12.16-1.56-1.56M15.6 12A3.6 3.6 0 1 1 8.4 12a3.6 3.6 0 0 1 7.2 0Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24">
            <path
              d="M20.2 14.1A8.2 8.2 0 0 1 9.9 3.8a8.2 8.2 0 1 0 10.3 10.3Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
          </svg>
        )}
      </span>
      <span className="theme-toggle__label">{isDark ? 'Light mode' : 'Dark mode'}</span>
    </button>
  );
}

function ProjectCard({ project, isDark }) {
  const ref = useRef(null);

  const handleMove = (event) => {
    const card = ref.current;
    if (!card) {
      return;
    }

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 12;

    card.style.setProperty('--spot-x', `${x}px`);
    card.style.setProperty('--spot-y', `${y}px`);
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handleLeave = () => {
    const card = ref.current;
    if (!card) {
      return;
    }

    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
  };

  return (
    <div
      ref={ref}
      className={`project-card ${isDark ? 'project-card--dark' : 'project-card--light'}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="project-card__glow" />
      <div className="project-card__content">
        <div className="project-card__heading">
          <span className="project-card__dot" />
          <h3>{project.name}</h3>
        </div>
        <p>{project.description}</p>
        {project.contribution && (
          <div className="mt-2 mb-2">
            <p className={`text-xs leading-relaxed m-0 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              <strong className={`font-bold uppercase tracking-widest text-[0.65rem] mr-1.5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                My Contribution:
              </strong>
              {project.contribution}
            </p>
          </div>
        )}
        <div className="project-card__tags">
          {project.tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="project-card__link"
        >
          <span>View project</span>
          <span className="project-card__link-arrow" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </div>
  );
}

function SkillGroup({ title, values, isDark }) {
  return (
    <div className={`skill-card ${isDark ? 'skill-card--dark' : 'skill-card--light'}`}>
      <h3>{title}</h3>
      <ul>
        {values.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

function AchievementCard({ item, isDark }) {
  const glowMap = {
    yellow: 'from-yellow-400/10',
    amber: 'from-amber-400/10',
    sky: 'from-sky-400/10',
    cyan: 'from-cyan-400/10',
    purple: 'from-purple-400/10',
  };

  const textMap = {
    yellow: 'text-yellow-400',
    amber: 'text-amber-400',
    sky: 'text-sky-400',
    cyan: 'text-cyan-400',
    purple: 'text-purple-400',
  };

  const bgMap = {
    yellow: 'bg-yellow-400/15',
    amber: 'bg-amber-400/15',
    sky: 'bg-sky-400/15',
    cyan: 'bg-cyan-400/15',
    purple: 'bg-purple-400/15',
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border p-6 transition duration-500 hover:-translate-y-1 hover:scale-[1.02]
      ${isDark
          ? 'border-white/10 bg-white/5'
          : 'border-black/10 bg-white/70'
        }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${glowMap[item.color]} via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100`}
      />

      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-3">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl text-2xl ${bgMap[item.color]}`}
          >
            {item.icon}
          </div>

          <div>
            <p
              className={`text-sm uppercase tracking-[0.2em] ${textMap[item.color]}`}
            >
              {item.type}
            </p>

            <h3 className="text-xl font-semibold">{item.title}</h3>
          </div>
        </div>

        <p
          className={`leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'
            }`}
        >
          {item.subtitle}
        </p>

        <div className="mt-5">
          <span
            className={`rounded-full px-3 py-1 text-sm ${bgMap[item.color]} ${textMap[item.color]}`}
          >
            {item.year}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [isPreloading, setIsPreloading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorActive, setCursorActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [projectPage, setProjectPage] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [activeMedia, setActiveMedia] = useState(null);
  const splineRef = useRef(null);
  const typedName = useTypewriter('Aseni Thennakoon');
  const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (activeMedia) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeMedia]);

  useEffect(() => {
    const container = splineRef.current;
    if (!container) return;
    container.innerHTML = '';
    const viewer = document.createElement('spline-viewer');
    viewer.setAttribute('url', 'https://prod.spline.design/LZpCxc4bCXUJ1uMC/scene.splinecode');
    viewer.style.cssText = 'width:100%;height:100%;display:block;';
    
    // Once Spline finishes loading its assets, fade out the preloader
    viewer.addEventListener('load', () => {
      setTimeout(() => setIsPreloading(false), 500);
    });

    container.appendChild(viewer);

    // Hide the "Built with Spline" logo inside the shadow DOM
    // The logo often loads later, so we inject a <style> tag that permanently hides it
    let attempts = 0;
    const hideLogo = () => {
      if (viewer.shadowRoot) {
        const style = document.createElement('style');
        style.textContent = '#logo, a[href*="spline.design"] { display: none !important; opacity: 0 !important; visibility: hidden !important; }';
        viewer.shadowRoot.appendChild(style);
        return true;
      }
      return false;
    };

    // Poll for up to 10 seconds (100 * 100ms) to ensure it catches the shadowRoot
    const intervalId = setInterval(() => {
      if (hideLogo() || attempts > 100) {
        clearInterval(intervalId);
      }
      attempts++;
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const handleViewMedia = (event, file, title) => {
    event.preventDefault();
    const isPdf = typeof file === 'string' && (file.toLowerCase().endsWith('.pdf') || file.includes('.pdf?'));
    setActiveMedia({
      file,
      title,
      type: isPdf ? 'pdf' : 'image',
    });
  };

  // Fallback: If Spline takes too long or fails, force remove preloader after 4.5 seconds
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      setIsPreloading(false);
    }, 4500);
    return () => clearTimeout(fallbackTimer);
  }, []);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(storedTheme ? storedTheme === 'dark' : prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    window.localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const handlePointerMove = (event) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.18 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interactiveElements = document.querySelectorAll('a, button, input, textarea');

    const handleEnter = () => setCursorActive(true);
    const handleLeave = () => setCursorActive(false);

    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleEnter);
      element.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleEnter);
        element.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  const stats = [
    { value: '6+', label: 'featured builds' },
    { value: 'Web + Mobile', label: 'project range' },
    { value: 'UI + Code', label: 'balanced focus' },
  ];
  const projectPages = [];
  for (let i = 0; i < projects.length; i += 3) {
    projectPages.push(projects.slice(i, i + 3));
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      setFormStatus({
        type: 'error',
        message: 'Email service is not configured yet. Add your EmailJS keys to enable sending.',
      });
      return;
    }

    try {
      setIsSending(true);
      setFormStatus({ type: '', message: '' });

      await emailjs.send(
        emailServiceId,
        emailTemplateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          email: formData.email,
          reply_to: formData.email,
          message: formData.message,
        },
        emailPublicKey
      );

      setFormStatus({
        type: 'success',
        message: 'Message sent successfully. I will get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS send failed:', error);

      const detail =
        error?.text ||
        error?.message ||
        (typeof error?.status === 'number' ? `Request failed with status ${error.status}.` : '');

      setFormStatus({
        type: 'error',
        message: detail
          ? `Message could not be sent. ${detail}`
          : 'Message could not be sent. Check your EmailJS template settings and try again.',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* --- Preloader Overlay --- */}
      <div 
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020617] transition-all duration-[800ms] ease-in-out ${
          isPreloading ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="relative flex items-center justify-center scale-150">
          {/* Soft Glowing Ripples */}
          <div className="absolute w-[2.4rem] h-[2.4rem] rounded-[0.85rem] ripple-anim ripple-1" />
          <div className="absolute w-[2.4rem] h-[2.4rem] rounded-[0.85rem] ripple-anim ripple-2" />
          
          {/* Logo */}
          <div className="brand__mark relative z-10 shadow-[0_0_40px_rgba(34,211,238,0.5)]">
            AT
          </div>
        </div>
        
        <p className="mt-14 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-slate-500 animate-pulse">
          Loading
        </p>
      </div>

      <div
        className={`portfolio-shell ${isDark ? 'theme-dark' : 'theme-light'}`}
        style={{
          '--mouse-x': `${mousePosition.x}%`,
          '--mouse-y': `${mousePosition.y}%`,
        }}
      >
      <div
        className={`cursor-trail ${cursorActive ? 'cursor-trail--active' : ''}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      >
        <span className="cursor-trail__ring" />
      </div>
      <div className="background-mesh" />
      <div className="background-blob background-blob--one" />
      <div className="background-blob background-blob--two" />
      <div className="background-blob background-blob--three" />

      <nav className={`top-nav ${scrolled ? 'top-nav--scrolled' : ''}`}>
        <div className="top-nav__inner">
          <a href="#home" className="brand">
            <span className="brand__mark">AT</span>
            <span className="brand__text">
              <strong>Aseni Thennakoon</strong>
              <small>Software Engineering Undergraduate</small>
            </span>
          </a>

          <div className="top-nav__links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>

          <ThemeToggle isDark={isDark} onToggle={() => setIsDark((current) => !current)} />
        </div>
      </nav>

      <section id="home" className="hero hero--split">
        <div className="hero__content" data-reveal="left">
          <span className="hero__eyebrow">Software Engineering Undergraduate</span>
          <h1>
            <span className="hero__title-main">{typedName}</span>
            <span className="hero__cursor" />
          </h1>
          <p className="hero__subtitle">
            Building modern digital products with strong engineering foundations, thoughtful UI, and a
            little more motion than a basic portfolio usually dares to have.
          </p>
          <div className="mt-8 flex items-center hero-cv-btn-wrap gap-4 w-full">
            <a href={resumeFile} download className="button button--primary flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download CV</span>
            </a>
          </div>
        </div>

        <div className="relative w-full">
          <div ref={splineRef} className="hero__spline" aria-hidden="true" />

          {stats.map((item, i) => (
            <div key={item.label} className={`stat-card absolute z-10 floating-stat-${i + 1} shadow-xl backdrop-blur-md`}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="content-section" data-reveal="right">
        <div className="section-heading">
          <span>About Me</span>
          <h2>Same visual vibe, but more refined and more alive.</h2>
        </div>

        <div className="about-grid">
          <div className="glass-card">
            <p>
              I am a software engineering student who enjoys turning ideas into clean, usable products.
              My projects usually sit somewhere between practical problem solving and visually polished
              interface work.
            </p>
            <p>
              I like building full-stack applications, exploring mobile experiences, and improving the
              way software feels, not just the way it functions.
            </p>
          </div>

          <div className="glass-card">
            <h3>Highlights</h3>
            <ul className="highlight-list">
              {highlights.map((item) => (
                <li key={item}>
                  <span className="highlight-list__bullet" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="content-section" data-reveal="left">
        <div className="section-heading">
          <span>Projects</span>
          <h2>Work that shows range across web, backend, and mobile.</h2>
        </div>

        <div className="projects-showcase">
          <div className="projects-showcase__art" aria-hidden="true">
            <img src={projectImage} alt="" />
          </div>

          <div className="projects-nav">
            <button
              type="button"
              className="projects-nav__button"
              onClick={() => setProjectPage((current) => Math.max(0, current - 1))}
              disabled={projectPage === 0}
              aria-label="Previous projects"
            >
              <img src={leftIcon} alt="" />
            </button>
            <div className="projects-nav__pages" aria-label="Project pages">
              {projectPages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`projects-nav__page ${projectPage === index ? 'projects-nav__page--active' : ''}`}
                  onClick={() => setProjectPage(index)}
                  aria-label={`Show project page ${index + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              className="projects-nav__button"
              onClick={() => setProjectPage((current) => Math.min(projectPages.length - 1, current + 1))}
              disabled={projectPage === projectPages.length - 1}
              aria-label="Next projects"
            >
              <img src={rightIcon} alt="" />
            </button>
          </div>

          <div key={projectPage} className="projects-grid">
            {projectPages[projectPage].map((project, idx) => (
              <ProjectCard key={`${projectPage}-${idx}`} project={project} isDark={isDark} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="https://github.com/Thennakoon03"
              target="_blank"
              rel="noreferrer"
              className="button button--secondary flex items-center gap-2 group"
            >
              <span>View All Projects on GitHub</span>
              <svg
                className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="content-section" data-reveal="right">
        <div className="section-heading">
          <span>Skills</span>
          <h2>Technical strengths presented with a bit more structure.</h2>
        </div>

        <div className="skills-showcase">
          <div className="skills-showcase__art" aria-hidden="true">
            <img src={skillsImage} alt="" />
          </div>

          <div className="skills-grid">
            {Object.entries(skills).map(([title, values]) => (
              <SkillGroup key={title} title={title} values={values} isDark={isDark} />
            ))}
          </div>
        </div>

        {/* Tech Stack Marquee — fixed looping + constrained width */}
        <style>{`
          @keyframes techLoop {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
        <div
          className="relative overflow-hidden my-10 py-2"
          style={{
            width: '100%',
            background: 'transparent',
            border: 'none',
            boxShadow: 'none',
          }}
        >
          {/* fade edges */}
          <div
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10"
            style={{
              background: isDark
                ? 'linear-gradient(to right, rgba(88,28,135,0.22), transparent)'
                : 'linear-gradient(to right, rgba(248,250,252,0.12), transparent)'
            }}
          />

          <div
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10"
            style={{
              background: isDark
                ? 'linear-gradient(to left, rgba(88,28,135,0.22), transparent)'
                : 'linear-gradient(to left, rgba(248,250,252,0.12), transparent)'
            }}
          />

          <div
            className="flex w-max gap-12 will-change-transform"
            style={{ animation: 'techLoop 20s linear infinite' }}
          >
            {[...techStacks, ...techStacks].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex flex-shrink-0 items-center justify-center hover:scale-110 transition"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  title={tech.name}
                  className="h-24 w-24 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="content-section" data-reveal="right">
        <div className="section-heading">
          <span>Achievements</span>
          <h2>Recognition, awards, and certifications earned along the journey.</h2>
        </div>

        {/* ================= AWARDS ================= */}
        <div className="mt-14">
          <h3 className="mb-6 text-xl font-semibold text-fuchsia-400">
            Awards & Recognition
          </h3>

          <div className="grid gap-8 md:grid-cols-2">
            {awards.map((award, index) => (
              <a
                key={index}
                href={award.file}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => handleViewMedia(e, award.file, award.title)}
                className={`group relative block overflow-hidden rounded-3xl border p-8 transition duration-500 hover:-translate-y-2 hover:scale-[1.02]
                ${isDark
                    ? 'border-white/10 bg-white/5'
                    : 'border-black/10 bg-white/70'
                  }`}
              >
                {/* glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
                        Award
                      </p>
                      <h3 className="text-xl font-semibold">{award.title}</h3>
                    </div>

                    <span className="rounded-full bg-yellow-400/10 px-4 py-2 text-sm text-yellow-400">
                      {award.year}
                    </span>
                  </div>

                  <p className={isDark ? 'text-white/70' : 'text-slate-600'}>
                    {award.description}
                  </p>

                  <p className="mt-4 text-sm text-yellow-400">
                    Click to view certificate →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ================= CERTIFICATES ================= */}
        <div className="mt-20">
          <h3 className="mb-6 text-xl font-semibold text-sky-400">
            Certifications
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {certificates.map((certificate, index) => (
              <a
                key={index}
                href={certificate.file}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => handleViewMedia(e, certificate.file, certificate.title)}
                className={`group relative block overflow-hidden rounded-3xl border p-6 transition duration-500 hover:-translate-y-2 hover:scale-[1.03]
                ${isDark
                    ? 'border-white/10 bg-white/5'
                    : 'border-black/10 bg-white/70'
                  }`}
              >
                {/* glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">

                  <h4 className="text-lg font-semibold">
                    {certificate.title}
                  </h4>

                  <p
                    className={`mt-1 text-sm ${isDark ? 'text-white/60' : 'text-slate-500'
                      }`}
                  >
                    {certificate.issuer}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="rounded-full bg-sky-400/10 px-3 py-1 text-xs text-sky-400">
                      {certificate.year}
                    </span>

                    <span className="text-sm text-sky-400">
                      View →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>



      <section id="contact" className="content-section" data-reveal="left">
        <div className="section-heading">
          <span>Contact</span>
          <h2>Let&apos;s build something useful and visually sharp.</h2>
        </div>

        <div className="contact-form-wrap">
          <form onSubmit={handleSubmit} className="glass-card contact-form">
            <label>
              <span>Name</span>
              <input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
              />
            </label>
            <label>
              <span>Message</span>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
              />
            </label>
            {formStatus.message ? (
              <p className={`form-status form-status--${formStatus.type}`}>{formStatus.message}</p>
            ) : null}
            <button type="submit" className="button button--primary button--full" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__brand">
            <p className="site-footer__name">Aseni Thennakoon</p>
            <p className="site-footer__role">Software Engineering Undergraduate</p>
            <p className="site-footer__copy">
              Building clean, modern software experiences with strong engineering foundations.
            </p>
          </div>

          <div className="site-footer__contact">
            <a href="mailto:asenithennakoon31@gmail.com" aria-label="Gmail">
              <img src={gmailIcon} alt="" />
              <span>Gmail</span>
            </a>
            <a href="https://github.com/Thennakoon03" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="" />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/aseni-thennakoon-929571356/" target="_blank" rel="noreferrer">
              <img src={linkedinIcon} alt="" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="site-footer__bottom">
            <span>2026 Portfolio</span>
            <span>Designed and developed by Aseni Thennakoon</span>
          </div>
        </div>
      </footer>

      {activeMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/75 backdrop-blur-md animate-[fadeIn_250ms_ease-out_forwards]"
          onClick={() => setActiveMedia(null)}
        >
          <div
            className={`w-full max-w-5xl h-auto max-h-[95vh] md:max-h-[90vh] flex flex-col rounded-2xl md:rounded-[2rem] border border-[var(--border)] shadow-2xl overflow-hidden animate-[scaleIn_250ms_cubic-bezier(0.34,1.56,0.64,1)_forwards] ${isDark ? 'bg-slate-900/95 border-white/10' : 'bg-white/98 border-slate-500/20'
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 md:px-7 md:py-5 border-b border-[var(--border)]">
              <h3 className="m-0 font-['Outfit','Manrope',sans-serif] text-lg md:text-xl font-bold text-[var(--heading)] truncate max-w-[80%]">
                {activeMedia.title}
              </h3>
              <button
                type="button"
                className={`flex items-center justify-center w-9 h-9 bg-transparent border-0 text-3xl leading-none cursor-pointer transition-all duration-200 rounded-full text-[var(--muted)] hover:text-[var(--pink)] hover:scale-110 ${isDark ? 'hover:bg-white/8' : 'hover:bg-slate-900/5'
                  }`}
                onClick={() => setActiveMedia(null)}
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>
            <div className="flex-1 overflow-y-auto flex items-center justify-center p-3 md:p-6 min-h-[250px] md:min-h-[350px] max-h-[calc(95vh-120px)] md:max-h-[calc(90vh-140px)]">
              {activeMedia.type === 'pdf' ? (
                <iframe
                  src={activeMedia.file}
                  title={activeMedia.title}
                  className="w-full h-[55vh] md:h-[70vh] border-0 rounded-xl bg-white"
                />
              ) : (
                <img
                  src={activeMedia.file}
                  alt={activeMedia.title}
                  className="max-w-full h-auto max-h-[55vh] md:max-h-[70vh] object-contain rounded-xl shadow-md"
                />
              )}
            </div>
            <div className="flex justify-end p-3 md:px-7 md:py-4 border-t border-[var(--border)] gap-4">
              <a
                href={activeMedia.file}
                download={activeMedia.title}
                target="_blank"
                rel="noreferrer"
                className="button button--secondary"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
