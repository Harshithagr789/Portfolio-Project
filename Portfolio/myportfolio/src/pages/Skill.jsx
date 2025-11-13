// export default function Skills() {
//   return (
//     <section className="skills">
//       <h3>Skills</h3>

//       <div className="skills-grid">
//         <div className="skill-category">
//           <h4>Programming</h4>
//           <p>Java, Core Java</p>
//         </div>
//         <div className="skill-category">
//           <h4>Web Technologies</h4>
//           <p>HTML, CSS, JavaScript</p>
//         </div>
//         <div className="skill-category">
//           <h4>Frameworks & Libraries</h4>
//           <p>Spring IoC, Spring Boot, Microservices, Hibernate, Angular, React</p>
//         </div>
//         <div className="skill-category">
//           <h4>Databases</h4>
//           <p>MySQL, MongoDB</p>
//         </div>
//         <div className="skill-category">
//           <h4>APIs & Technologies</h4>
//           <p>Git, GitHub, Postman, Swagger, Servlet, Maven, Gradle</p>
//         </div>
//         <div className="skill-category">
//           <h4>Tools & IDEs</h4>
//           <p>Spring Tool Suite, MySQL Workbench, Eclipse, Visual Studio Code</p>
//         </div>
//       </div>
//     </section>
//   )
// }
// src/pages/Skill.jsx
import "../App.css";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h3>Skills</h3>

      <div className="skills-grid">

        <div className="skill-category">
          <h4>Programming</h4>
          <p>Java, Core Java</p>
        </div>

        <div className="skill-category">
          <h4>Web Technologies</h4>
          <p>HTML, CSS, JavaScript</p>
        </div>

        <div className="skill-category">
          <h4>Frameworks & Libraries</h4>
          <p>Spring IoC, Spring Boot, Microservices, Hibernate, Angular, React</p>
        </div>

        <div className="skill-category">
          <h4>Databases</h4>
          <p>MySQL, MongoDB</p>
        </div>

        <div className="skill-category">
  <h4>Cloud </h4>
  <p>AWS (EC2, S3, Lambda, DynamoDB)</p>
</div>


        <div className="skill-category">
          <h4>APIs & Technologies</h4>
          <p>Git, GitHub, Postman, Swagger, Servlet, Maven, Gradle</p>
        </div>

        <div className="skill-category">
          <h4>Tools & IDEs</h4>
          <p>Spring Tool Suite, MySQL Workbench, Eclipse, Visual Studio Code</p>
        </div>

      </div>
    </section>
  );
}
