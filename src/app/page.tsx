import TypewriterCode from "./components/TypewriterCode";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <p className="hero-label animate-fade delay-1">software engineer</p>
              <h1 className="hero-title animate-fade delay-1">
                prachod<br />
                <span>kakatur</span>
              </h1>
              <p className="hero-description animate-fade delay-2">
                building elegant solutions at the intersection of design and technology. 
                currently crafting experiences at the university of illinois.
              </p>
              <div className="hero-buttons animate-fade delay-3">
                <a href="/experience" className="btn btn-primary">view work</a>
                <a href="/contact" className="btn btn-secondary">get in touch</a>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="code-card animate-fade delay-4">
                <div className="code-card-glow"></div>
                <div className="code-card-inner">
                  <div className="code-card-dots">
                    <div className="code-card-dot"></div>
                    <div className="code-card-dot"></div>
                    <div className="code-card-dot"></div>
                  </div>
                  <div className="code-block">
                    <p className="code-comment">{`// who am i?`}</p>
                    <p><span className="code-keyword">const</span> developer = {"{"}</p>
                    <p className="indent">name: <span className="code-string">{`"prachod"`}</span>,</p>
                    <p className="indent">role: <span className="code-string">{`"full-stack engineer"`}</span>,</p>
                    <p className="indent">passion: <span className="code-string">{`"building products"`}</span>,</p>
                    <p className="indent">location: <span className="code-string">{`"los angeles, ca"`}</span></p>
                    <p>{"};"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="typewriter-section">
        <div className="container">
          <TypewriterCode />
        </div>
      </section>

      <section className="tech">
        <div className="container">
          <h2 className="section-title">technologies i work with</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <p className="tech-card-label">languages</p>
              <ul>
                <li>python</li>
                <li>typescript</li>
                <li>java</li>
                <li>c++</li>
              </ul>
            </div>
            <div className="tech-card">
              <p className="tech-card-label">frontend</p>
              <ul>
                <li>react</li>
                <li>next.js</li>
                <li>tailwind</li>
                <li>firebase</li>
              </ul>
            </div>
            <div className="tech-card">
              <p className="tech-card-label">backend</p>
              <ul>
                <li>node.js</li>
                <li>fastapi</li>
                <li>flask</li>
                <li>spring boot</li>
              </ul>
            </div>
            <div className="tech-card">
              <p className="tech-card-label">data & ml</p>
              <ul>
                <li>pytorch</li>
                <li>pandas</li>
                <li>mongodb</li>
                <li>postgresql</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
