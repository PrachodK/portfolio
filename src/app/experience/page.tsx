export default function Experience() {
  const experiences = [
    {
      title: "software engineer",
      company: "zentora",
      location: "champaign, il",
      period: "may 2025 - present",
      description: [
        "launched and created zentora's technical platform using python, flask api, and mongodb atlas, integrated with react.js",
        "designed the ai/ml compatibility engine with pandas, numpy, and xgboost, applying feature extraction and categorical encoding",
        "delivered real-time match scoring and explanations through rest endpoints powering the student results page",
      ],
      tags: ["python", "flask", "mongodb", "react", "xgboost", "pandas"],
    },
    {
      title: "machine learning security intern",
      company: "datahub, llc",
      location: "chicago, il (remote)",
      period: "sep 2025 - dec 2025",
      description: [
        "created advanced ml-powered threat detection models using ibm guardium and watson ai, analyzing real-time database activity",
        "presented comprehensive security analytics solutions to fortune 500 financial institutions and banking clients",
      ],
      tags: ["ml", "ibm guardium", "watson ai", "security"],
    },
    {
      title: "software engineering intern",
      company: "brucker company",
      location: "elk grove village, il",
      period: "may 2025 - aug 2025",
      description: [
        "built full-stack saas platform (react/typescript, fastapi, postgresql) for hvac contractor automating bid-to-project workflow",
        "implemented ai-powered document intelligence extracting specifications from pdfs using gpt-4 & gemini vision",
        "architected scalable restful microservices with distributed pdf processing, handling 50+ daily bid emails at 96% accuracy",
      ],
      tags: ["react", "typescript", "fastapi", "postgresql", "gpt-4", "gemini"],
    },
  ];

  const leadership = [
    {
      title: "software developer",
      org: "hackillinois",
      period: "sep 2025 - present",
      description: "developing information + admin site features and modernizing tech stack for the midwest's largest hackathon serving 1,000+ participants",
    },
    {
      title: "project manager",
      org: "cs124 honors",
      period: "jan 2025 - present",
      description: "guiding 10+ students in full-stack development, ui/ux design with figma, and building react native applications",
    },
    {
      title: "senior tech consultant",
      org: "faces consulting",
      period: "feb 2025 - dec 2025",
      description: "led migration from legacy asp.net web forms to modular react.js application with firebase",
    },
  ];

  const projects = [
    {
      name: "nbagami",
      link: "https://www.nbagami.com/",
      period: "apr 2025 - sep 2025",
      description: "built a full-stack web app to visualize rare nba scores, achieving 200+ visitors by optimizing site metadata and seo",
      tags: ["react", "firebase", "firestore", "tailwind", "node.js"],
    },
    {
      name: "scout",
      period: "feb 2025 - may 2025",
      description: "engineered a react.js frontend and node.js + express backend with mysql for researching s&p 500 stocks with 92% accuracy",
      tags: ["react", "mysql", "node.js", "express", "flask", "openai"],
    },
  ];

  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">experience</h1>
          <p className="page-description">
            a collection of my professional journey, from building scalable platforms 
            to crafting ai-powered solutions.
          </p>
        </header>

        <section className="section">
          <h2 className="section-label">work experience</h2>
          <div className="space">
            {experiences.map((exp) => (
              <article key={exp.company} className="card">
                <div className="card-header">
                  <div>
                    <h3 className="card-title">{exp.title}</h3>
                    <p className="card-subtitle">{exp.company}</p>
                  </div>
                  <div className="card-meta">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="card-list">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-label">leadership</h2>
          <div className="grid-3">
            {leadership.map((item) => (
              <article key={item.org} className="card">
                <h3 className="card-title" style={{ fontSize: "1rem" }}>{item.title}</h3>
                <p className="card-subtitle" style={{ fontSize: "0.875rem", marginBottom: "0.25rem" }}>{item.org}</p>
                <p style={{ fontSize: "0.75rem", color: "var(--muted)", marginBottom: "0.75rem" }}>{item.period}</p>
                <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.6 }}>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-label">projects</h2>
          <div className="grid-2">
            {projects.map((project) => (
              <article key={project.name} className="card">
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <h3 className="card-title" style={{ fontSize: "1.1rem" }}>
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name} &rarr;</a>
                    ) : (
                      project.name
                    )}
                  </h3>
                  <span style={{ fontSize: "0.75rem", color: "var(--muted)" }}>{project.period}</span>
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.6, marginBottom: "1rem" }}>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-label">education</h2>
          <div className="card">
            <div className="card-header">
              <div>
                <h3 className="card-title">b.s. computer science</h3>
                <p className="card-subtitle">university of illinois at urbana-champaign</p>
              </div>
              <div className="card-meta">
                <p>expected may 2027</p>
                <p>gpa: 3.84 / 4.00</p>
              </div>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--muted)", marginBottom: "1rem" }}>
              statistics minor | engineering at illinois first scholarship recipient | illinois engineering ambassador
            </p>
            <p style={{ fontSize: "0.75rem", color: "var(--muted)" }}>
              <strong style={{ color: "var(--foreground)" }}>relevant coursework:</strong> data structures & algorithms, 
              applied parallel programming, applied machine learning, computer architecture, statistical programming methods, 
              multivariable calculus, linear algebra
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
