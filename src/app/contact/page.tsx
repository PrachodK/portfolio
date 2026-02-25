export default function Contact() {
  return (
    <div className="page" style={{ display: "flex", alignItems: "center", minHeight: "calc(100vh - 64px)" }}>
      <div className="container">
        <div className="contact-layout">
          <div className="contact-content">
            <h1 className="page-title">let&apos;s connect</h1>
            <p className="page-description">
              i&apos;m always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology.
            </p>

            <div className="contact-links">
              <a href="mailto:prachodkakatur@gmail.com" className="contact-link">
                <div className="contact-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="contact-link-label">email</p>
                  <p className="contact-link-value">prachodkakatur@gmail.com</p>
                </div>
              </a>

              <a href="tel:+14254925959" className="contact-link">
                <div className="contact-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="contact-link-label">phone</p>
                  <p className="contact-link-value">(425) 492-5959</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/prachod-kakatur" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-icon">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="contact-link-label">linkedin</p>
                  <p className="contact-link-value">linkedin.com/in/prachod-kakatur</p>
                </div>
              </a>

              <a href="https://github.com/PrachodK" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-icon">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <p className="contact-link-label">github</p>
                  <p className="contact-link-value">github.com/PrachodK</p>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-visual">
            <div className="profile-card">
              <div className="profile-card-glow"></div>
              <div className="profile-card-inner">
                <div className="profile-avatar">
                  <img src="/images/hiho.jpg" alt="prachod" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%", objectPosition: "center top" }} />
                </div>
                <p className="profile-name">prachod kakatur</p>
                <p className="profile-location">los angeles, ca</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
