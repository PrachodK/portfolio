"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./experience.module.css";

type ExperienceItem = {
  company: string;
  title: string;
  location: string;
  period: string;
  summary: string;
  highlight: string;
  description: string[];
  tags: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: "IBM",
    title: "Software Development Engineer Intern",
    location: "San Jose, California",
    period: "Aug 2026 – Dec 2026",
    summary: "Modernizing IBM Guardium, from legacy features to stateless APIs and React interfaces.",
    highlight: "enterprise security",
    description: [
      "Modernizing legacy Struts/JSP features into stateless, protobuf-defined v2 REST APIs and React/Carbon UIs for IBM Guardium.",
      "Delivering production-quality backend services with transactional integrity, unit tests, and CI fixes utilizing TestRail.",
    ],
    tags: ["React", "Carbon", "REST APIs", "protobuf", "Struts/JSP", "TestRail", "CI/CD"],
  },
  {
    company: "Robert Half",
    title: "Software Engineer Intern",
    location: "Menlo Park, California (Remote)",
    period: "Jun 2026 – Aug 2026",
    summary: "Faster, more resilient AI document generation for enterprise client companies.",
    highlight: "~40% faster generation",
    description: [
      "Redesigned an AI document generation pipeline for enterprise client companies from sequential to parallel execution using C#/.NET, Azure Functions, and Microsoft Agent Framework, cutting generation time by ~40% by running independent data-fetch stages concurrently.",
      "Engineered a resilient fallback chain of Azure OpenAI agents (internal CRM → grounded web search → SEC EDGAR filings), sustaining 99% document completion through upstream API failures, with real-time notifications via Redis Streams and server-sent events.",
    ],
    tags: ["C#", ".NET", "Azure Functions", "Microsoft Agent Framework", "Azure OpenAI", "Redis Streams", "SSE"],
  },
  {
    company: "Zentora",
    title: "Software Engineer",
    location: "Champaign, Illinois",
    period: "May 2025 – Apr 2026",
    summary: "Building a student matching platform with explainable, real-time compatibility scores.",
    highlight: "250 live records",
    description: [
      "Launched and created Zentora’s technical platform using Python, Flask API, and MongoDB Atlas, integrated with React.js.",
      "Designed the AI/ML compatibility engine with Pandas, NumPy, and XGBoost, applying feature extraction, categorical encoding, and hard-constraint filters on subject, language, and availability, trained on 260 feature vectors and 250 live records.",
      "Delivered real-time match scoring and top-factor explanations through REST endpoints powering the student results page.",
    ],
    tags: ["Python", "Flask", "MongoDB Atlas", "React", "XGBoost", "Pandas", "NumPy"],
  },
  {
    company: "Brucker Company",
    title: "Software Engineer Intern",
    location: "Elk Grove Village, Illinois",
    period: "May 2025 – Aug 2025",
    summary: "Turning construction PDFs into actionable bids with a full-stack AI document platform.",
    highlight: "8 hours → 30 minutes",
    description: [
      "Built a full-stack SaaS platform (React/TypeScript, FastAPI, PostgreSQL) for an HVAC contractor automating the bid-to-project workflow, processing 1,000+ construction PDFs monthly using GPT-4 and Gemini Vision, reducing bid preparation from 8 hours to 30 minutes.",
      "Implemented an AI-powered document intelligence system that extracts specifications, drawing schedules, and equipment data from PDFs, with automated verification workflows reducing manual data entry by 95% and supporting $10M+ in annual project bids.",
      "Architected scalable RESTful microservices on Render with distributed PDF processing, job queues, and real-time collaboration, handling 50+ daily bid emails at 96% accuracy and supporting 300+ projects across 5 departments, boosting team capacity by 40%.",
    ],
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "GPT-4", "Gemini Vision", "Render"],
  },
];

const leadership = [
  {
    title: "Software Developer", org: "HackIllinois", period: "Sep 2025 – Present",
    description: "Developing information and admin site features and modernizing the tech stack by migrating to Material UI and Vite; building with React, Next.js, TypeScript, Express/MongoDB, and RESTful APIs for the Midwest’s largest hackathon serving 1,300+ participants.",
  },
  {
    title: "Project Manager", org: "CS124 Honors", period: "Jan 2025 – Present",
    description: "Guiding 10+ students in full-stack development, steering them through UI/UX design with Figma, building React Native applications, developing Node.js + Express APIs, and implementing backend solutions using MySQL, Firebase, or MongoDB.",
  },
];

const projects = [
  {
    name: "NBAgami", link: "https://www.nbagami.com/", period: "Jan 2026 – Apr 2026",
    description: [
      "Developed a full-stack web application processing 70,000+ NBA games to visualize unique score combinations along with a score prediction feature, attracting 200+ users with optimized performance and SEO, with a cron job automating daily data updates.",
      "Implemented real-time user authentication and a live leaderboard using Firebase Auth and Firestore with instant data synchronization.",
    ],
    tags: ["React.js", "Firebase", "Firestore", "Git", "PapaParse"],
  },
  {
    name: "Scouting App", link: undefined, period: "Sep 2024 – May 2025",
    description: [
      "Designed and developed a full-stack Scouting App adopted by 6+ teams at the World Championships, architecting a Vaadin and Spring Boot setup with AWS DynamoDB and later MySQL for data storage; integrated AWS S3 for scalable, centralized image storage.",
      "Deployed on AWS EC2 and Elastic Beanstalk, delivering a 95% runtime improvement over the previous Google Sheets Apps Script solution.",
    ],
    tags: ["Vaadin", "Spring Boot", "DynamoDB", "EC2", "Elastic Beanstalk", "S3", "MySQL"],
  },
];

function Tags({ tags }: { tags: string[] }) {
  return <div className="tags">{tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div>;
}

export default function Experience() {
  const [selected, setSelected] = useState<ExperienceItem | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const closing = useRef(false);

  useEffect(() => {
    if (!selected) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
      trigger.current?.focus();
    };
  }, [selected]);

  async function closeDetails() {
    if (closing.current) return;
    closing.current = true;
    const element = dialog.current;
    if (element && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      await element.animate(
        [{ opacity: 1, transform: "translateY(0) scale(1)" }, { opacity: 0, transform: "translateY(16px) scale(.96)" }],
        { duration: 180, easing: "ease-in", fill: "forwards" },
      ).finished;
    }
    setSelected(null);
    closing.current = false;
  }

  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <p className="section-label">building things that make a difference</p>
          <h1 className="page-title">experience</h1>
          <p className="page-description">From enterprise security to AI-powered platforms, a few places where I’ve turned ideas into working software.</p>
        </header>

        <section className="section" aria-labelledby="work-heading">
          <div className={styles.sectionHeading}>
            <h2 id="work-heading" className="section-label">work experience</h2>
            <span>select a card to explore</span>
          </div>
          <div className="space">
            {experiences.map((exp, index) => (
              <button key={exp.company} type="button" className={`card ${styles.workCard}`} aria-haspopup="dialog" onClick={event => { trigger.current = event.currentTarget; setSelected(exp); }}>
                <span className={styles.cardTopline}><span className={styles.index}>0{index + 1}</span><span className={styles.highlight}>{exp.highlight}</span><span className={styles.arrow} aria-hidden="true">↗</span></span>
                <span className={styles.workHeader}>
                  <span><span className={styles.company}>{exp.company}</span><span className={styles.role}>{exp.title}</span></span>
                  <span className={`card-meta ${styles.metadata}`}><span>{exp.period}</span><span>{exp.location}</span></span>
                </span>
                <span className={styles.summary}>{exp.summary}</span>
                <span className={styles.cardFooter}><span className={styles.previewTags}>{exp.tags.slice(0, 3).join(" / ")}</span><span className={styles.detailsHint}>view details <span aria-hidden="true">+</span></span></span>
              </button>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-label">leadership & involvement</h2>
          <div className="grid-2">{leadership.map(item => (
            <article key={item.org} className="card">
              <h3 className="card-title">{item.org}</h3>
              <p className="card-subtitle">{item.title}</p>
              <p className={styles.smallMeta}>{item.period} · Champaign, Illinois</p>
              <p className={styles.bodyCopy}>{item.description}</p>
            </article>
          ))}</div>
        </section>

        <section className="section">
          <h2 className="section-label">projects</h2>
          <div className="grid-2">{projects.map(project => (
            <article key={project.name} className="card">
              <h3 className="card-title">{project.link ? <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name} ↗</a> : project.name}</h3>
              <p className={styles.smallMeta}>{project.period}</p>
              <ul className="card-list">{project.description.map(item => <li key={item}>{item}</li>)}</ul>
              <Tags tags={project.tags} />
            </article>
          ))}</div>
        </section>

        <section className="section">
          <h2 className="section-label">education</h2>
          <div className="card">
            <div className="card-header">
              <div><h3 className="card-title">B.S. in Computer Science</h3><p className="card-subtitle">University of Illinois Urbana-Champaign</p></div>
              <div className="card-meta"><p>expected December 2027</p><p>GPA: 3.72 / 4.00</p></div>
            </div>
            <p className={styles.bodyCopy}>Statistics minor | Engineering at Illinois FIRST® Scholarship Recipient | Illinois Engineering Ambassador</p>
            <p className={styles.coursework}><strong>relevant coursework:</strong> Programming Languages & Compilers, Data Visualization, Data Structures & Algorithms, Applied Parallel Programming, Applied Machine Learning, Computer Architecture, Statistical Programming Methods, Advanced Data Analysis</p>
          </div>
        </section>
      </div>

      {selected && (
        <dialog ref={dialog} className={styles.dialog} aria-labelledby="experience-title" onCancel={event => { event.preventDefault(); void closeDetails(); }} onClick={event => { if (event.target === event.currentTarget) void closeDetails(); }}>
          <div className={styles.dialogContent}>
            <div className={styles.dialogTopline}><span className="section-label">behind the work</span><button type="button" autoFocus className={styles.close} onClick={() => void closeDetails()} aria-label="Close experience details">×</button></div>
            <p className={styles.dialogCompany}>{selected.company}</p>
            <h2 id="experience-title" className={styles.dialogTitle}>{selected.title}</h2>
            <p className={styles.smallMeta}>{selected.period} · {selected.location}</p>
            <div className={styles.dialogHighlight}>{selected.highlight}</div>
            <h3 className="section-label">what I worked on</h3>
            <ul className={`card-list ${styles.detailList}`}>{selected.description.map(item => <li key={item}>{item}</li>)}</ul>
            <h3 className="section-label">the toolkit</h3>
            <Tags tags={selected.tags} />
          </div>
        </dialog>
      )}
    </div>
  );
}
