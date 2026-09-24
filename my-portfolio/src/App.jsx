import { projects } from "./projects";
import "./App.css";

function ProjectCard({ project }) {
  return (
    <a
      className="project-card"
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={project.image} alt="" loading="lazy" />

      <div  className="card-content">
	<h3>{project.title}</h3>
	<p>{project.description}</p>
        <span>{project.technologies.join(" . ")}</span>
      </div>  
    </a>
  );
}

function ProjectRow({ title, items }) {
  return (
    <section className="project-section">
      <h2>{title}</h2>
      <div className="project-row">
	{items.map((project) => (
	  <ProjectCard key={project.id} project={project} />
	))}
      </div>
    </section>
  );
}

export default function App() {
  const categories = [...new Set(projects.map((p) => p.category))];

  return (
    <>
      <header className="navbar">
        <a className="brand" href="#home">AYYAPPA PARIMI</a>
        
        <nav aria-label="Main navigation">
          <a href="projects">Projects</a>
          <a href="about">About</a>
          <a href="contact">Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">DEVELOPR . CREATOR . PROBLEM SOLVER</p>
            <h1>Hi, I'm AYYAPPA PARIMI</h1>
            <p>
              Overall 6+ years of experience as Java Full Stack Developer in designing and developing enterprise applications using
Java 21, Spring Boot, Spring MVC, Microservices, Angular, ReactJS, TypeScript, and JavaScript. Strong background in
building REST/SOAP APIs, cloud-native applications, and migrating monolithic systems to microservices architecture.
Proficient in MySQL, MongoDB, Hibernate, JPA, Docker, Kubernetes, AWS (Lambda, EC2, S3), Jenkins, GitHub, and
CI/CD pipelines. Experienced in TDD, JUnit, Mockito, and leveraging LLMs and Machine Learning for AI-driven test
automation. Skilled in delivering scalable, secure, and high-performance solutions throughout the full SDLC using
Agile and Waterfall methodologies.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore My Work
              </a>
              <a className="button secondary" href="/resume.pdf" download>
                Download Resume
              </a>
            </div>
          </div>
        </section>

        <div id="projects">
          {categories.map((category) => (
            <ProjectRow
              key={category}
              title={category}
              items={projects.filter((p) => p.category === category)}
            />
          ))}
        </div>

        <section id="about" className="text-section">
          <h2>Behind the projects</h2>
          <p>
            I'm a passionate web developer with experience in creating modern, responsive websites and applications. I specialize in using React to build efficient and user-friendly interfaces.
          </p>
        </section>

        <section id="contact" className="text-section">
          <h2>Let's work together</h2>
          <a className="button primary" href="mailto:parimiayyappa@gmail.com">
            I'm currently available for freelance work and open to new opportunities. Feel free to reach out if you have a project in mind or just want to connect!
          </a>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} AYYAPPA PARIMI. All rights reserved.</p>
      </footer>
    </>
  );
}