// src/pages/Project.jsx
import "../App.css";

export default function Projects() {
  return (
    <section id="project" className="project">
      <h3>Projects</h3>

      <div className="project-grid">

        <div className="project-item">
          <h4>Optimizing Landlord-Tenant Dynamics Through Digitized Property Management</h4>
          <p><strong>(Java Full Stack Project)</strong> [Spring Boot, MySQL, Node.js]</p>
          <p>
            Developed a full-stack application to automate online rent transactions and manage tenant requests efficiently.
            Implemented features such as rent due alerts, maintenance updates, and inspection scheduling to streamline
            communication between landlords and tenants.
          </p>
          <a
            href="https://github.com/Harshithagr789/Property-Management"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>

        <div className="project-item">
          <h4>Blog Project and Microservices</h4>
          <p><strong>(Spring Boot, Postman, Swagger, Microservices, MySQL)</strong></p>
          <p>
            Developed a microservices-based Blog Application using Spring Boot, Eureka Server, and REST APIs for seamless
            inter-service communication. Integrated Postman and Swagger for API testing and documentation, ensuring efficient
            service discovery and scalability.
          </p>
          <a
            href="https://github.com/Harshithagr789/Blog-Project"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>

        <div className="project-item">
          <h4>Traveler Tour Website</h4>
          <p><strong>(HTML, CSS, JS, MySQL)</strong></p>
          <p>
            Built a dynamic travel website integrated with MySQL for managing destinations, user bookings, and itineraries.
            Added interactive maps, search filters, and user review functionalities to enhance trip planning and user engagement.
          </p>
          <a
            href="https://github.com/Harshithagr789/Travelling-Website"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>

      </div>
    </section>
  );
}
