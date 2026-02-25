"use client";

import { useState, useEffect } from "react";

const codeSnippets = [
  {
    code: `function Experience() {
  const internships = [
    "zentora",
    "datahub", 
    "brucker"
  ];
  
  return <Career growth />;
}`,
    label: "5 internships"
  },
  {
    code: `const projects = await Portfolio
  .findAll()
  .then(p => p.deploy());

// 10+ shipped`,
    label: "10+ projects"
  },
  {
    code: `fetch("/api/gpa")
  .then(r => r.json())
  .then(data => {
    console.log(data.gpa);
    // 3.84
  });`,
    label: "3.84 gpa"
  },
  {
    code: `useEffect(() => {
  setInterval(() => {
    setSkills(s => [...s, "new"]);
  }, 1000 * 60 * 60 * 24);
}, []);
// 3+ years learning`,
    label: "3+ years"
  },
  {
    code: `const stack = [
  "react", "next.js",
  "python", "fastapi",
  "typescript", "go"
];

export default stack;`,
    label: "full stack"
  },
  {
    code: `class Student extends Engineer {
  constructor() {
    super("uiuc", "cs");
    this.graduation = 2027;
  }
}`,
    label: "uiuc '27"
  }
];

export default function TypewriterCode() {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentSnippet = codeSnippets[snippetIndex].code;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentSnippet.length) {
          setDisplayText(currentSnippet.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentSnippet.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setSnippetIndex((snippetIndex + 1) % codeSnippets.length);
        }
      }
    }, isDeleting ? 15 : 40);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, snippetIndex]);

  return (
    <div className="typewriter-container">
      <div className="typewriter-card">
        <div className="typewriter-header">
          <div className="typewriter-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="typewriter-label">{codeSnippets[snippetIndex].label}</span>
        </div>
        <pre className="typewriter-code">
          <code>{displayText}<span className="typewriter-cursor">|</span></code>
        </pre>
      </div>
    </div>
  );
}
