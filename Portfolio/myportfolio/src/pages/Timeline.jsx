import "../App.css";

export default function Timeline() {
  return (
    <section id="timeline" className="timeline-section">
      {/* ===== EXPERIENCE SECTION ===== */}
      <h3 className="section-title">Experience</h3>

      <div className="timeline-grid">
        <div className="timeline-item">
          <h4>Software Engineer</h4>
          <p>
            <strong>Encora Inc.</strong>
          </p>
           <p>
          

 Am a passionate Software Engineer with hands-on experience at Encora, specializing in Java Full Stack Development. I enjoy building scalable, user-focused applications and continuously expanding my skills across both frontend and backend technologies.

          </p>
        </div>

        <div className="timeline-item">
          <h4>Java Full Stack Intern</h4>
          <p>
            <strong>Core Nuts Technologies</strong>{" "}
            <span>(Dec 2024 – Apr 2025)</span>
          </p>
          <p>
            Gained hands-on experience in developing and maintaining full-stack
            web applications using Java, Spring Boot, and React. Built RESTful
            APIs, integrated frontend and backend modules, and optimized
            performance for a seamless user experience.
          </p>
        </div>
      </div>

      {/* ===== EDUCATION SECTION ===== */}
      <h3 className="section-title">Education</h3>

      <div className="timeline-grid">
        <div className="timeline-item">
          <h4>Bachelor of Engineering in Computer Science and Engineering</h4>
          <p>
            <strong>MVJ College of Engineering</strong> (2021 – 2025)
          </p>
          <p>SGPA: 8.23</p>
        </div>

        <div className="timeline-item">
          <h4>Pre-University (PCMB)</h4>
          <p>
            <strong>Venkatadri Independent PU College</strong> (2019 – 2021)
          </p>
          <p>Percentage: 89.99%</p>
        </div>

        <div className="timeline-item">
          <h4>Secondary Education</h4>
          <p>
            <strong>Adithya English Medium School</strong>
          </p>
          <p>Percentage: 82.3%</p>
        </div>
      </div>
    </section>
  );
}
  