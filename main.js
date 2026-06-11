function getFirstAndLastName(fullName) {
  const parts = fullName.trim().split(" ");
  return {
    first: parts[0] || "",
    last: parts.slice(1).join(" ") || ""
  };
}

function makeLink(label, url, className = "") {
  if (!url) return "";
  return `<a href="${url}" ${className ? `class="${className}"` : ""} target="_blank" rel="noopener">${label} ↗</a>`;
}

function renderSite() {
  const data = portfolioData;
  const nameParts = getFirstAndLastName(data.name);

  document.title = `${data.name} — Portfolio`;
  document.getElementById("nav-first-name").textContent = nameParts.first;
  document.getElementById("nav-last-name").textContent = nameParts.last;
  document.getElementById("hero-eyebrow").textContent = data.title;
  document.getElementById("hero-name").textContent = data.name;
  document.getElementById("hero-bio").textContent = data.bio;

  const portrait = document.getElementById("hero-portrait");
  portrait.src = data.portrait;
  portrait.alt = data.name;

  document.getElementById("nav-social").innerHTML = [
    makeLink("LinkedIn", data.links.linkedin),
    makeLink("GitHub", data.links.github)
  ].join("");

  document.getElementById("hero-buttons").innerHTML = `
    <a href="mailto:${data.email}" class="btn btn-primary">Email Me</a>
    <a href="#projects" class="btn btn-outline">View Projects</a>
  `;

  renderProjects(data.projects);
  renderEducation(data.education);
  renderEmployment(data.employment);
  renderSkills(data.skills);
  renderResume(data.resume);
  renderContact(data);

  document.getElementById("footer").textContent = `© ${new Date().getFullYear()} ${data.name} · ${data.major} · ${data.school}`;
}

function renderProjects(projects) {
  const grid = document.getElementById("projects-grid");

  grid.innerHTML = projects.map(project => {
    const details = (project.details || []).map(src => `
      <img src="${src}" alt="${project.title} detail image" onclick="openLightbox(this.src)" />
    `).join("");

    const links = (project.links || []).map(link => `
      <a href="${link.url}" target="_blank" rel="noopener">${link.label} ↗</a>
    `).join("");

    return `
      <article class="project-card reveal">
        <div class="project-thumb">
          <img src="${project.image}" alt="${project.title}" onerror="this.parentElement.innerHTML='Add image: ${project.image}'" />
        </div>
        <div class="project-body">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description}</p>
          ${details ? `<div class="detail-thumbs">${details}</div>` : ""}
          ${links ? `<div class="project-links">${links}</div>` : ""}
        </div>
      </article>
    `;
  }).join("");
}

function renderEducation(education) {
  document.getElementById("education-list").innerHTML = education.map(item => `
    <div class="edu-card">
      <div class="school">${item.school}</div>
      <div class="degree">${item.degree}</div>
      <div class="grad">${item.date}</div>
    </div>
  `).join("");
}

function renderEmployment(employment) {
  const element = document.getElementById("employment-list");
  if (!employment || employment.length === 0) {
    element.innerHTML = `<p class="empty-text">Open to internship and co-op opportunities.</p>`;
    return;
  }

  element.innerHTML = employment.map(job => `
    <div class="job-card">
      <div class="job-title">${job.title}</div>
      <div class="job-company">${job.company}</div>
      <div class="job-date">${job.date}</div>
      <p class="job-desc">${job.description}</p>
    </div>
  `).join("");
}

function renderSkills(skills) {
  document.getElementById("skills-list").innerHTML = skills.map(skill => `
    <span class="skill-tag">${skill}</span>
  `).join("");
}

function renderResume(resumePath) {
  const row = document.getElementById("resume-row");
  if (!resumePath) {
    row.innerHTML = "";
    return;
  }

  row.innerHTML = `<a href="${resumePath}" target="_blank" class="btn btn-primary">Open Resume ↗</a>`;
}

function renderContact(data) {
  document.getElementById("contact-text").textContent = data.contactMessage;

  const links = [];
  if (data.email) links.push(`<a href="mailto:${data.email}">${data.email}</a>`);
  if (data.phone) links.push(`<a href="tel:${data.phone.replace(/[^0-9+]/g, "")}">${data.phone}</a>`);
  if (data.links.linkedin) links.push(`<a href="${data.links.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a>`);
  if (data.links.github) links.push(`<a href="${data.links.github}" target="_blank" rel="noopener">GitHub ↗</a>`);

  document.getElementById("contact-links").innerHTML = links.join("");
}

function openLightbox(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeLightbox();
});

document.querySelector(".nav-toggle").addEventListener("click", () => {
  const links = document.querySelector(".nav-links");
  const button = document.querySelector(".nav-toggle");
  const isOpen = links.classList.toggle("open");
  button.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

document.addEventListener("click", event => {
  if (event.target.matches(".nav-links a")) {
    document.querySelector(".nav-links").classList.remove("open");
    document.querySelector(".nav-toggle").setAttribute("aria-expanded", "false");
  }
});

function startAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        if (entry.target.classList.contains("section-title")) {
          entry.target.classList.add("animate");
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal, .section-title").forEach(el => observer.observe(el));
}

renderSite();
startAnimations();
