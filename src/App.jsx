import { useEffect, useState } from "react";
import {
  profile,
  skills,
  skillDetails,
  technologies,
  experience,
  projects,
  certificates,
  links,
} from "./data/portfolio";

function getPage() {
  const page = window.location.hash.replace("#/", "");
  return page || "about";
}

function navigate(page) {
  window.location.hash = `/${page}`;
}

function openContact() {
  if (getPage() !== "about") {
    window.location.hash = "/about";
    setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);
    return;
  }

  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

function TerminalIcon({ children }) {
  return <span className="terminal-icon">{children}</span>;
}

function Header({ page }) {
  return (
    <header className="topbar">
      <button className="brand" onClick={() => navigate("about")}>
        {profile.terminalUser}:~#
      </button>

      <nav className="nav">
        <button
          className={page === "about" ? "active" : ""}
          onClick={() => navigate("about")}
        >
          ABOUT
        </button>
        <button
          className={page === "projects" ? "active" : ""}
          onClick={() => navigate("projects")}
        >
          PROJECTS
        </button>
        <button
          className={page === "certificates" ? "active" : ""}
          onClick={() => navigate("certificates")}
        >
          CERTIFICATES
        </button>
        <button
          className={page === "experience" ? "active" : ""}
          onClick={() => navigate("experience")}
        >
          EXPERIENCE
        </button>
      </nav>

      <div className="header-icons" aria-hidden="true">
        <TerminalIcon>⚙</TerminalIcon>
        <TerminalIcon>▣</TerminalIcon>
        <TerminalIcon>☷</TerminalIcon>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>{profile.command} _</span>

      <div className="footer-links">
        <a href={links.github} target="_blank" rel="noreferrer">
          GITHUB
        </a>
        <a href={links.linkedin} target="_blank" rel="noreferrer">
          LINKEDIN
        </a>
        <a href={links.whatsapp} target="_blank" rel="noreferrer">
          WHATSAPP
        </a>
      </div>
    </footer>
  );
}

function TerminalWindow({ title, children, className = "" }) {
  return (
    <section className={`terminal-window ${className}`}>
      <div className="window-bar">
        <span>{title}</span>
        <span className="window-dots">□ □ □</span>
      </div>
      {children}
    </section>
  );
}

function Home() {
  return (
    <>
      <main className="page home-page">
        <section className="hero terminal-window">
          <div className="hero-copy">
            <p className="green small">Initializing user session...</p>
            <h1>&gt; HELLO_WORLD</h1>
            <p className="hero-text">
              I am a high-school software developer currently compiling
              knowledge at <strong>{profile.school}</strong>. Focused on robust
              web systems, front-end interfaces, and full-stack development.
              Ready to deploy.
            </p>

            <div className="button-row">
              <button
                className="cyber-button"
                onClick={() => navigate("about")}
              >
                [ INITIATE_CONTACT ]
              </button>
              <button
                className="cyber-button muted"
                onClick={() => navigate("projects")}
              >
                [ VIEW_PROJECTS ]
              </button>
            </div>

            <p className="prompt">
              {profile.command} <span className="cursor" />
            </p>
          </div>

          <div className="avatar-frame">
            <img src="/avatar.png" alt="Pixel art developer avatar" />
          </div>
        </section>

        <section className="home-grid">
          <TerminalWindow title="node_modules/skills">
            <div className="panel-content">
              <h2>Inventory Stats</h2>

              <div className="skill-bars">
                {skills.map((skill) => (
                  <div className="skill" key={skill.name}>
                    <div className="skill-label">
                      <span>{skill.name}</span>
                      <span>LVL {skill.level}</span>
                    </div>
                    <div className="bar">
                      <span style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="tags">
                {technologies.slice(0, 6).map((tech) => (
                  <span key={tech}>[ {tech} ]</span>
                ))}
              </div>
            </div>
          </TerminalWindow>

          <TerminalWindow title="/var/log/experience.log">
            <div className="panel-content">
              <h2>EXPERIENCE_LOG</h2>

              <div className="experience-list compact">
                {experience.slice(0, 2).map((item) => (
                  <article
                    className="experience-item"
                    key={item.year + item.role}
                  >
                    <span className="timeline-dot" />
                    <div>
                      <p className="green">[ {item.year} ]</p>
                      <h3>{item.role}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </TerminalWindow>
        </section>
      </main>
    </>
  );
}

function PageHeading({ command, title, description }) {
  return (
    <div className="page-heading">
      <p className="green command-line">{command}</p>
      <h1>&gt; {title}</h1>
      <p>{description}</p>
    </div>
  );
}

function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <main className="page">
      <PageHeading
        command="root@sys:~/databases $ ./execute_query --target=quests"
        title="PROJECT_DATABASE"
        description="Accessing local archive of completed and active mission nodes. Displaying relevant technical stacks and deployment links."
      />

      <div className="project-grid">
        {visibleProjects.map((project) => (
          <TerminalWindow key={project.id} title={`NODE :: ${project.id}`}>
            <div className="project-image">
              {project.documentation?.[0] ? (
                <img
                  src={project.documentation[0]}
                  alt={`${project.title} documentation`}
                />
              ) : (
                <>
                  <span>&gt;_</span>
                  <small>{project.type} / SYSTEM_PREVIEW</small>
                </>
              )}
            </div>

            <div className="project-content">
              <h2>{project.title}</h2>

              <div className="project-tags">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <p>{project.description}</p>

              <button className="source-button">▣ SOURCE_CODE</button>

              {project.documentation?.length > 1 && (
                <div className="documentation-gallery">
                  {project.documentation.slice(1).map((image, index) => (
                    <img
                      key={image}
                      src={image}
                      alt={`${project.title} documentation ${index + 2}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </TerminalWindow>
        ))}
      </div>

      <div className="center-button">
        <button
          className="cyber-button"
          onClick={() => setShowAllProjects((value) => !value)}
        >
          [ {showAllProjects ? "SHOW_LESS" : "ANOTHER"} ]
        </button>
      </div>
    </main>
  );
}

function Certificates() {
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const visibleCertificates = showAllCertificates
    ? certificates
    : certificates.slice(0, 2);

  return (
    <main className="page">
      <PageHeading
        command="root@sys:~/vault $ decrypt --certificates"
        title="CERTIFICATE_VAULT_"
        description="Accessing encrypted credentials... decrypting data fragments. Verifying signatures."
      />

      <div className="certificate-grid">
        {visibleCertificates.map((certificate) => (
          <TerminalWindow
            key={certificate.id}
            title={`FRAG_ID: ${certificate.id}`}
          >
            <div className="certificate-content">
              <span className="security-label">[ {certificate.level} ]</span>
              <h2>{certificate.title}</h2>
              <p className="green">ORG: {certificate.issuer}</p>

              <div className="certificate-preview">
                <span>CERTIFICATE / VERIFIED</span>
                <strong>{certificate.year}</strong>
              </div>

              <div className="certificate-meta">
                <span>HASH: {certificate.hash}</span>
                <span>EXP: NEVER</span>
              </div>

              {certificate.documentation?.length > 0 && (
                <div className="documentation-gallery">
                  {certificate.documentation.map((image, index) => (
                    <img
                      key={image}
                      src={image}
                      alt={`${certificate.title} documentation ${index + 1}`}
                    />
                  ))}
                </div>
              )}

              <button className="cyber-button full">⌕ VIEW_CERTIFICATE</button>
            </div>
          </TerminalWindow>
        ))}
      </div>

      <div className="center-button certificate-another">
        <button
          className="cyber-button"
          onClick={() => setShowAllCertificates((value) => !value)}
        >
          [ {showAllCertificates ? "SHOW_LESS" : "ANOTHER"} ]
        </button>
      </div>

      <div className="terminal-input">
        &gt; ls -la /vault/credentials <span className="cursor" />
      </div>
    </main>
  );
}

function ExperiencePage() {
  const [showAllExperience, setShowAllExperience] = useState(false);
  const visibleExperience = showAllExperience
    ? experience
    : experience.slice(0, 3);

  return (
    <main className="page">
      <PageHeading
        command="root@sys:~/experience $ ./execute_query --target=history"
        title="EXPERIENCE_DATABASE"
        description="Accessing my experience archive. Each node contains a role, description, and optional local documentation photos."
      />

      <div className="experience-card-grid">
        {visibleExperience.map((item, index) => (
          <TerminalWindow
            key={item.year + item.role}
            title={`NODE :: ${String(index + 1).padStart(3, "0")}`}
          >
            <div className="experience-image">
              {item.documentation?.[0] ? (
                <img
                  src={item.documentation[0]}
                  alt={`${item.role} documentation`}
                />
              ) : (
                <>
                  <span>&gt;_</span>
                  <small>EXPERIENCE / SYSTEM_PREVIEW</small>
                </>
              )}
            </div>

            <div className="experience-card-content">
              <p className="green">[ {item.year} ]</p>
              <h2>{item.role}</h2>
              <p className="experience-company">{item.company}</p>
              <p>{item.description}</p>

              {item.documentation?.length > 1 && (
                <div className="documentation-gallery">
                  {item.documentation.slice(1).map((image, imageIndex) => (
                    <img
                      key={image}
                      src={image}
                      alt={`${item.role} documentation ${imageIndex + 2}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </TerminalWindow>
        ))}
      </div>

      <div className="center-button">
        <button
          className="cyber-button"
          onClick={() => setShowAllExperience((value) => !value)}
        >
          [ {showAllExperience ? "SHOW_LESS" : "ANOTHER"} ]
        </button>
      </div>
    </main>
  );
}

function QuestSection() {
  const [showAllQuests, setShowAllQuests] = useState(false);
  const visibleQuests = showAllQuests ? projects : projects.slice(0, 3);

  return (
    <section className="section-block">
      <div className="section-title">QUEST_LOG</div>

      <div className="quest-grid">
        {visibleQuests.map((project) => (
          <article className="quest-card" key={project.id}>
            <small>[ MISSION_{project.id} ]</small>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="center-button">
        <button
          className="cyber-button"
          onClick={() => setShowAllQuests((value) => !value)}
        >
          [ {showAllQuests ? "SHOW_LESS" : "ANOTHER"} ]
        </button>
      </div>
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <form
      className="contact-content"
      name="secure-contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="secure-contact" />

      <p className="hidden-field">
        <label>
          Don't fill this out if you're human:
          <input name="bot-field" />
        </label>
      </p>

      <span className="green">[ ENCRYPTED_CONNECTION ]</span>

      <label>
        &gt; YOUR_NAME
        <input name="name" required placeholder="e.g. John_Doe" />
      </label>

      <label>
        &gt; YOUR_EMAIL
        <input
          name="email"
          type="email"
          required
          placeholder="user@email.com"
        />
      </label>

      <label>
        &gt; MESSAGE
        <textarea
          name="message"
          required
          placeholder="Enter message payload here..."
          rows="5"
        />
      </label>

      <button
        className="cyber-button full"
        type="submit"
        disabled={status === "sending"}
      >
        [ {status === "sending" ? "TRANSMITTING..." : "SEND_DATA_PACKET"} ]
      </button>

      {status === "success" && (
        <div className="form-status success">
          &gt; CONNECTION_ESTABLISHED
          <br />
          &gt; DATA_PACKET_DELIVERED [200 OK]
        </div>
      )}

      {status === "error" && (
        <div className="form-status error">
          &gt; TRANSMISSION_FAILED
          <br />
          &gt; Please try again.
        </div>
      )}
    </form>
  );
}

function About() {
  const [showAllSkills, setShowAllSkills] = useState(false);

  return (
    <main className="page about-page">
      <section className="about-hero terminal-window">
        <div>
          <p className="green">&gt; system.login("guest")</p>
          <p className="green">&gt; Access Granted. Welcome to my server.</p>
          <h1>Naufal Hanif .M.</h1>
          <p>
            {profile.shortTitle} | {profile.school}
          </p>
          <p>{profile.bio}</p>

          <div className="button-row">
            <a
              className="cyber-button"
              href={links.github}
              target="_blank"
              rel="noreferrer"
            >
              [ TO_GITHUB ]
            </a>
            <a className="cyber-button cyan" href={links.cv} download>
              [ DOWNLOAD_CV ]
            </a>
          </div>
        </div>

        <div className="avatar-frame small-avatar">
          <img src="/Foto Formal CV.png" alt="Pixel art developer avatar" />
        </div>
      </section>

      <section className="about-grid">
        <TerminalWindow title="player_profile.txt">
          <div className="panel-content profile-card">
            <div className="mini-avatar">
              <img src="/Foto Formal CV.png" alt="" />
            </div>
            <div>
              <p className="green">Software Engineering Student</p>
              <p>{profile.school}</p>
              <p>{profile.location}</p>
              <div className="tags">
                <span>[ STATUS: ONLINE ]</span>
                <span>[ AVAILABLE: YES ]</span>
              </div>
            </div>
          </div>
        </TerminalWindow>

        <TerminalWindow title="inventory_stats.dat">
          <div className="panel-content">
            <div className="skill-bars">
              {skills.map((skill) => (
                <div className="skill" key={skill.name}>
                  <div className="skill-label">
                    <span>{skill.name}</span>
                    <span>LVL {skill.level}</span>
                  </div>
                  <div className="bar">
                    <span style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TerminalWindow>
      </section>

      <section className="section-block skills-section">
        <div className="section-title">SKILLS</div>

        <div className="skills-grid">
          {skillDetails
            .slice(0, showAllSkills ? skillDetails.length : 9)
            .map((skill) => (
              <article className="skill-card" key={skill.name}>
                <div className={`skill-name ${skill.color}`}>
                  &gt; {skill.name}_
                </div>
                <div className="detail-bar">
                  <span
                    className={skill.color}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </article>
            ))}
        </div>

        <div className="center-button">
          <button
            className="cyber-button"
            onClick={() => setShowAllSkills((value) => !value)}
          >
            [ {showAllSkills ? "SHOW_LESS" : "ANOTHER"} ]
          </button>
        </div>
      </section>

      <QuestSection />

      <section id="contact" className="contact-section">
        <TerminalWindow title="SECURE_CHANNEL">
          <ContactForm />
        </TerminalWindow>

        <div className="hire-me">
          <h2>HIRE_ME.SYS</h2>
          <p>&gt; Have a project or want to work with me?</p>
          <p>Please contact me using one of the channels below.</p>
          <div className="button-row center">
            <a
              className="cyber-button"
              href={links.github}
              target="_blank"
              rel="noreferrer"
            >
              [ GITHUB ]
            </a>
            <a
              className="cyber-button cyan"
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              [ LINKEDIN ]
            </a>
            <a
              className="cyber-button purple"
              href={links.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              [ WHATSAPP ]
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const [page, setPage] = useState(getPage());

  useEffect(() => {
    const onHashChange = () => setPage(getPage());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  let content = <About />;

  if (page === "home") content = <About />;
  if (page === "projects") content = <Projects />;
  if (page === "certificates") content = <Certificates />;
  if (page === "experience") content = <ExperiencePage />;
  if (page === "about") content = <About />;

  return (
    <div className="app">
      <Header page={page} />
      {content}
      <Footer />
    </div>
  );
}
