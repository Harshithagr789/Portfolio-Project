import React from "react";
import "../App.css";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-img">
          <img src="/abc.jpeg" alt="Harshitha G R" />
        </div>

        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight">Harshitha G R</span>
          </h1>
          <h2>Software Engineer</h2>

          <div className="hero-buttons">
            <a
              href="https://www.linkedin.com/in/harshitha-gr-bb7228245/"
              className="btn gradient"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Harshithagr789"
              className="btn gradient"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <article>
          <h3>About Me</h3>
          <p>
            An enthusiastic Software Engineer with strong experience in developing scalable web applications using Java and Spring Boot. During my internship in Java Full Stack Development, I contributed to building and deploying interactive web applications, gaining practical exposure to both backend and frontend technologies. Earned my Bachelor’s degree in Computer Science and Engineering and strive to develop efficient, reliable, and impactful software solutions that enhance user experience and business value.
          </p>
        </article>
      </section>
    </main>
  );
}
