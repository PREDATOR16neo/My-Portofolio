import { useEffect, useRef, useState } from "react";
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

function Reveal({
  children,
  className = "",
  delay = 0,
  as: Component = "div",
  style = {},
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("is-visible");
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  );
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

      <div className="terminal-status" aria-live="polite">
        <span className="status-dot" />
        <span>SYS ONLINE</span>
      </div>

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
        <Reveal as="section" className="hero terminal-window" delay={80}>
          <div className="hero-copy">
            <p className="green small">Initializing user session...</p>
            <h1 data-text="&gt; HELLO_WORLD">&gt; HELLO_WORLD</h1>
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
        </Reveal>

        <section className="home-grid">
          <Reveal as="div" delay={120}>
            <TerminalWindow title="node_modules/skills">
              <div className="panel-content">
                <h2>Inventory Stats</h2>

                <div className="skill-bars">
                  {skills.map((skill, index) => (
                    <div className="skill" key={skill.name}>
                      <div className="skill-label">
                        <span>{skill.name}</span>
                        <span>LVL {skill.level}</span>
                      </div>
                      <div className="bar">
                        <span
                          style={{
                            width: `${skill.level}%`,
                            transitionDelay: `${200 + index * 120}ms`,
                          }}
                        />
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
          </Reveal>

          <Reveal as="div" delay={170}>
            <TerminalWindow title="/var/log/experience.log">
              <div className="panel-content">
                <h2>EXPERIENCE_LOG</h2>

                <div className="experience-list compact">
                  {experience.slice(0, 2).map((item, index) => (
                    <article
                      className="experience-item"
                      key={item.year + item.role}
                      style={{ transitionDelay: `${index * 120}ms` }}
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
          </Reveal>
        </section>
      </main>
    </>
  );
}

function PageHeading({ command, title, description }) {
  return (
    <div className="page-heading">
      <p className="green command-line">{command}</p>
      <h1 data-text={`&gt; ${title}`}>&gt; {title}</h1>
      <p>{description}</p>
    </div>
  );
}

function getVisibleProjects(items, showAll) {
  return showAll ? items : items.slice(0, 3);
}

function toggleProjectList(showAll) {
  return !showAll;
}

function openProjectSource(project) {
  const sourceUrl = project?.link || project?.github || project?.repo || "";

  if (!sourceUrl) return;

  window.open(sourceUrl, "_blank", "noopener,noreferrer");
}

function openProjectDetails(setSelectedProject, project) {
  setSelectedProject(project);
}

function closeProjectDetails(setSelectedProject) {
  setSelectedProject(null);
}

function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  const imageUrl = certificate.documentation?.[0];

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div
        className="project-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close certificate detail"
        >
          ×
        </button>

        <div className="project-modal-visual">
          {imageUrl ? (
            <img src={imageUrl} alt={certificate.title} />
          ) : (
            <div className="project-modal-empty">CERTIFICATE_PREVIEW</div>
          )}
        </div>

        <div className="project-modal-body">
          <p className="green">[ CERTIFICATE_{certificate.id} ]</p>
          <h2>{certificate.title}</h2>
          <p>{certificate.issuer}</p>
          <div className="project-modal-meta">
            <span>{certificate.level}</span>
            <span>{certificate.year}</span>
          </div>

          <div className="project-modal-actions">
            <a
              className="cyber-button full"
              href={imageUrl}
              target="_blank"
              rel="noreferrer"
            >
              ⌕ OPEN_FULL
            </a>
            <a className="cyber-button full cyan" href={imageUrl} download>
              ↓ DOWNLOAD
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div
        className="project-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close project detail"
        >
          ×
        </button>

        <div className="project-modal-visual">
          {project.documentation?.[0] ? (
            <img src={project.documentation[0]} alt={project.title} />
          ) : (
            <div className="project-modal-empty">SYSTEM_PREVIEW</div>
          )}
        </div>

        <div className="project-modal-body">
          <p className="green">[ MISSION_{project.id} ]</p>
          <h2>{project.title}</h2>
          <div className="project-tags">
            {project.stack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <p>{project.description}</p>
          <div className="project-modal-meta">
            <span>{project.type}</span>
            <span>LIVE_BUILD</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const visibleProjects = getVisibleProjects(projects, showAllProjects);

  const handleProjectOpen = (project) =>
    openProjectDetails(setSelectedProject, project);
  const handleProjectClose = () => closeProjectDetails(setSelectedProject);
  const handleToggleProjects = () =>
    setShowAllProjects((value) => toggleProjectList(value));
  const handleProjectSource = (project) => openProjectSource(project);

  return (
    <main className="page">
      <ProjectModal project={selectedProject} onClose={handleProjectClose} />

      <PageHeading
        command="root@sys:~/databases $ ./execute_query --target=quests"
        title="PROJECT_DATABASE"
        description="Accessing local archive of completed and active mission nodes. Displaying relevant technical stacks and deployment links."
      />

      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <Reveal key={project.id} as="div" delay={index * 110}>
            <TerminalWindow title={`NODE :: ${project.id}`}>
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

                <button
                  className="source-button"
                  onClick={() => handleProjectSource(project)}
                >
                  ▣ SOURCE_CODE
                </button>

                {project.documentation?.length > 1 && (
                  <div className="documentation-gallery">
                    {project.documentation.slice(1).map((image, imageIndex) => (
                      <img
                        key={image}
                        src={image}
                        alt={`${project.title} documentation ${imageIndex + 2}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </TerminalWindow>
          </Reveal>
        ))}
      </div>

      <div className="center-button">
        <button className="cyber-button" onClick={handleToggleProjects}>
          [ {showAllProjects ? "SHOW_LESS" : "ANOTHER"} ]
        </button>
      </div>
    </main>
  );
}

function Certificates() {
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const visibleCertificates = showAllCertificates
    ? certificates
    : certificates.slice(0, 3);

  const handleCertificateOpen = (certificate) =>
    setSelectedCertificate(certificate);
  const handleCertificateClose = () => setSelectedCertificate(null);

  return (
    <main className="page">
      <CertificateModal
        certificate={selectedCertificate}
        onClose={handleCertificateClose}
      />

      <PageHeading
        command="root@sys:~/vault $ decrypt --certificates"
        title="CERTIFICATE_VAULT_"
        description="Accessing encrypted credentials... decrypting data fragments. Verifying signatures."
      />

      <div className="certificate-grid">
        {visibleCertificates.map((certificate, index) => (
          <Reveal key={certificate.id} as="div" delay={index * 120}>
            <TerminalWindow title={`FRAG_ID: ${certificate.id}`}>
              <div className="certificate-image">
                {certificate.documentation?.[0] ? (
                  <img
                    src={certificate.documentation[0]}
                    alt={`${certificate.title} documentation`}
                  />
                ) : (
                  <>
                    <span>⌕</span>
                    <small>CERTIFICATE / SYSTEM_PREVIEW</small>
                  </>
                )}
              </div>

              <div className="certificate-content">
                <h2>{certificate.title}</h2>

                <p className="green">{certificate.issuer}</p>

                <div className="certificate-preview">
                  <span>CERTIFICATE / VERIFIED</span>
                  <strong>{certificate.year}</strong>
                </div>

                {certificate.documentation?.length > 1 && (
                  <div className="documentation-gallery">
                    {certificate.documentation
                      .slice(1)
                      .map((image, imageIndex) => (
                        <img
                          key={image}
                          src={image}
                          alt={`${certificate.title} documentation ${imageIndex + 2}`}
                        />
                      ))}
                  </div>
                )}

                <button
                  className="cyber-button full"
                  onClick={() => handleCertificateOpen(certificate)}
                >
                  ⌕ VIEW_CERTIFICATE
                </button>
              </div>
            </TerminalWindow>
          </Reveal>
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
          <Reveal key={item.year + item.role} as="div" delay={index * 120}>
            <TerminalWindow
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
          </Reveal>
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
        {visibleQuests.map((project, index) => (
          <Reveal
            key={project.id}
            as="article"
            className="quest-card"
            delay={index * 110}
          >
            <small>[ MISSION_{project.id} ]</small>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </Reveal>
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
      <Reveal as="section" className="about-hero terminal-window" delay={80}>
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
      </Reveal>

      <section className="about-grid">
        <Reveal as="div" delay={120}>
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
        </Reveal>

        <Reveal as="div" delay={160}>
          <TerminalWindow title="inventory_stats.dat">
            <div className="panel-content">
              <div className="skill-bars">
                {skills.map((skill, index) => (
                  <div className="skill" key={skill.name}>
                    <div className="skill-label">
                      <span>{skill.name}</span>
                      <span>LVL {skill.level}</span>
                    </div>
                    <div className="bar">
                      <span
                        style={{
                          width: `${skill.level}%`,
                          transitionDelay: `${180 + index * 120}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TerminalWindow>
        </Reveal>
      </section>

      <section className="section-block skills-section">
        <Reveal as="div" className="section-title" delay={60}>
          SKILLS
        </Reveal>

        <div className="skills-grid">
          {skillDetails
            .slice(0, showAllSkills ? skillDetails.length : 9)
            .map((skill, index) => (
              <Reveal
                key={skill.name}
                as="article"
                className="skill-card"
                delay={index * 90}
              >
                <div className={`skill-name ${skill.color}`}>
                  &gt; {skill.name}_
                </div>
                <div className="detail-bar">
                  <span
                    className={skill.color}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </Reveal>
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
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsBooting(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onHashChange = () => setPage(getPage());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${Math.min(progress, 100)}%`,
      );
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  useEffect(() => {
    const handlePointerMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      const tiltX = ((event.clientY / window.innerHeight - 0.5) * -12).toFixed(
        2,
      );
      const tiltY = ((event.clientX / window.innerWidth - 0.5) * 12).toFixed(2);

      document.documentElement.style.setProperty("--pointer-x", `${x}%`);
      document.documentElement.style.setProperty("--pointer-y", `${y}%`);
      document.documentElement.style.setProperty("--tilt-x", `${tiltX}deg`);
      document.documentElement.style.setProperty("--tilt-y", `${tiltY}deg`);

      const glow = document.querySelector(".cursor-glow");
      const dot = document.querySelector(".cursor-dot");

      if (glow) {
        glow.style.transform = `translate(${event.clientX - 120}px, ${event.clientY - 120}px)`;
      }

      if (dot) {
        dot.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
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
      <div
        className={`boot-screen ${isBooting ? "visible" : "hidden"}`}
        aria-live="polite"
      >
        <div className="boot-text">
          <span>INITIALIZING_SYSTEM</span>
          <span className="boot-loading">loading...</span>
        </div>
      </div>

      <div className="cursor-glow" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />
      <Header page={page} />
      {content}
      <Footer />
    </div>
  );
}
