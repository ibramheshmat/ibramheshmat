import { portfolioData } from "./data.js";


/* =========================================================
   Portfolio Renderer

   Responsible only for converting portfolio data
   into HTML.
========================================================= */

class PortfolioRenderer {

    constructor(data) {
        this.data = data;
    }


    render() {

        this.renderHeroSkills();

        this.renderProjects();

        this.renderServices();

        this.renderAbout();

        this.renderContact();

    }


    /* =========================
       Hero Skills
    ========================= */

    renderHeroSkills() {

        const container =
            document.getElementById("heroSkills");

        if (!container) {
            return;
        }


        /*
         * Duplicate skills so we can create
         * an infinite horizontal marquee.
         */
        const duplicatedSkills = [
            ...this.data.skills,
            ...this.data.skills
        ];


        container.innerHTML =
            duplicatedSkills
                .map((skill, index) => {

                    return `
                        <span
                            class="skill-chip"
                            style="--skill-index: ${index}"
                        >
                            ${skill}
                        </span>
                    `;

                })
                .join("");

    }


    /* =========================
       Projects
    ========================= */

    renderProjects() {

        const container =
            document.getElementById("projectsGrid");

        if (!container) {
            return;
        }


        container.innerHTML =
            this.data.projects
                .map((project) => {

                    const technologies =
                        project.technologies
                            .map((technology) => {

                                return `
                                    <span class="project-tag">
                                        ${technology}
                                    </span>
                                `;

                            })
                            .join("");


                    return `

                        <article
                            class="
                                project-card
                                project-${project.gradient}
                            "
                        >

                            <div class="project-card-top">

                                <div class="project-logo">
                                    ${project.initials}
                                </div>


                                <span class="project-audience">
                                    ${project.audience}
                                </span>

                            </div>


                            <div class="project-heading">

                                <span class="project-category">
                                    ${project.category}
                                </span>

                                <h2>
                                    ${project.title}
                                </h2>

                            </div>


                            <p class="project-description">
                                ${project.description}
                            </p>


                            <div class="project-detail">

                                <span>
                                    My contribution
                                </span>

                                <p>
                                    ${project.contribution}
                                </p>

                            </div>


                            <div class="project-detail">

                                <span>
                                    Impact
                                </span>

                                <p>
                                    ${project.result}
                                </p>

                            </div>


                            <div class="project-tags">
                                ${technologies}
                            </div>

                        </article>
                    `;

                })
                .join("");

    }


    /* =========================
       Services
    ========================= */

    renderServices() {

        const container =
            document.getElementById("servicesGrid");

        if (!container) {
            return;
        }


        container.innerHTML =
            this.data.services
                .map((service) => {

                    const tags =
                        service.tags
                            .map((tag) => {

                                return `
                                    <span>
                                        ${tag}
                                    </span>
                                `;

                            })
                            .join("");


                    return `

                        <article class="service-card">

                            <div class="service-number">
                                ${service.icon}
                            </div>


                            <h2>
                                ${service.title}
                            </h2>


                            <p>
                                ${service.description}
                            </p>


                            <div class="service-tags">
                                ${tags}
                            </div>


                            <button
                                class="service-action"
                                type="button"
                                data-open-talk
                            >
                                Discuss this service
                                <span>↗</span>
                            </button>

                        </article>
                    `;

                })
                .join("");

    }


    /* =========================
       About
    ========================= */

    renderAbout() {

        this.renderAboutSummary();

        this.renderExperience();

        this.renderAboutSkills();

        this.renderEducation();

        this.renderCertifications();

    }


    renderAboutSummary() {

        const element =
            document.getElementById("aboutSummary");

        if (!element) {
            return;
        }


        element.textContent =
            this.data.profile.summary;

    }


    renderExperience() {

        const container =
            document.getElementById(
                "experienceTimeline"
            );

        if (!container) {
            return;
        }


        container.innerHTML =
            this.data.experience
                .map((experience) => {

                    const bullets =
                        experience.bullets
                            .map((bullet) => {

                                return `
                                    <li>
                                        ${bullet}
                                    </li>
                                `;

                            })
                            .join("");


                    return `

                        <article class="timeline-item">

                            <div class="timeline-marker"></div>


                            <div class="timeline-content">

                                <div class="timeline-top">

                                    <div>

                                        <h3>
                                            ${experience.role}
                                        </h3>

                                        <p>
                                            ${experience.company}
                                            •
                                            ${experience.location}
                                        </p>

                                    </div>


                                    <span>
                                        ${experience.period}
                                    </span>

                                </div>


                                <ul>
                                    ${bullets}
                                </ul>

                            </div>

                        </article>
                    `;

                })
                .join("");

    }


    renderAboutSkills() {

        const container =
            document.getElementById("aboutSkills");

        if (!container) {
            return;
        }


        container.innerHTML =
            this.data.skills
                .map((skill) => {

                    return `
                        <span>
                            ${skill}
                        </span>
                    `;

                })
                .join("");

    }


    renderEducation() {

        const container =
            document.getElementById("education");

        if (!container) {
            return;
        }


        const education =
            this.data.education;


        container.innerHTML = `

            <div class="education-card">

                <strong>
                    ${education.degree}
                </strong>

                <span>
                    ${education.university}
                </span>

                <small>
                    ${education.year}
                </small>

            </div>

        `;

    }


    renderCertifications() {

        const container =
            document.getElementById(
                "certifications"
            );

        if (!container) {
            return;
        }


        container.innerHTML =
            this.data.certifications
                .map((certification) => {

                    return `

                        <div class="certification-item">

                            <span>
                                ${certification.title}
                            </span>

                            <strong>
                                ${certification.year}
                            </strong>

                        </div>

                    `;

                })
                .join("");

    }


    /* =========================
       Contact
    ========================= */

    renderContact() {

        const container =
            document.getElementById("contactGrid");

        if (!container) {
            return;
        }


        const profile =
            this.data.profile;


        const linkedinCard =
            profile.linkedin

                ? `

                    <a
                        class="contact-card"
                        href="${profile.linkedin}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <span class="contact-card-icon linkedin">
                            in
                        </span>

                        <span class="contact-card-label">
                            LinkedIn
                        </span>

                        <strong>
                            Connect professionally
                        </strong>

                        <span class="contact-arrow">
                            ↗
                        </span>

                    </a>

                `

                : `

                    <div class="contact-card contact-card-disabled">

                        <span class="contact-card-icon linkedin">
                            in
                        </span>

                        <span class="contact-card-label">
                            LinkedIn
                        </span>

                        <strong>
                            Add LinkedIn URL in data.js
                        </strong>

                    </div>

                `;


        container.innerHTML = `

            <a
                class="contact-card"
                href="mailto:${profile.email}"
            >

                <span class="contact-card-icon email">
                    ✉
                </span>

                <span class="contact-card-label">
                    Email
                </span>

                <strong>
                    ${profile.email}
                </strong>

                <span class="contact-arrow">
                    ↗
                </span>

            </a>


            <a
                class="contact-card"
                href="tel:${profile.phone}"
            >

                <span class="contact-card-icon phone">
                    ☎
                </span>

                <span class="contact-card-label">
                    Mobile
                </span>

                <strong>
                    ${profile.phoneDisplay}
                </strong>

                <span class="contact-arrow">
                    ↗
                </span>

            </a>


            ${linkedinCard}


            <a
                class="contact-card"
                href="${profile.github}"
                target="_blank"
                rel="noopener noreferrer"
            >

                <span class="contact-card-icon github">
                    GH
                </span>

                <span class="contact-card-label">
                    GitHub
                </span>

                <strong>
                    @ibramheshmat
                </strong>

                <span class="contact-arrow">
                    ↗
                </span>

            </a>

        `;

    }

}



/* =========================================================
   Router

   Controls which screen is displayed.
========================================================= */

class PortfolioRouter {

    constructor() {

        this.screens =
            Array.from(
                document.querySelectorAll(
                    "[data-screen]"
                )
            );


        this.routeButtons =
            Array.from(
                document.querySelectorAll(
                    "[data-route]"
                )
            );

    }


    start() {

        this.routeButtons
            .forEach((button) => {

                button.addEventListener(
                    "click",
                    () => {

                        const route =
                            button.dataset.route;

                        this.navigate(route);

                    }
                );

            });


        window.addEventListener(
            "hashchange",
            () => {
                this.showCurrentRoute();
            }
        );


        this.showCurrentRoute();

    }


    navigate(route) {

        window.location.hash = route;

    }


    showCurrentRoute() {

        const route =
            window.location.hash
                .replace("#", "")
                || "home";


        const validRoutes = [
            "home",
            "work",
            "services",
            "about",
            "contact"
        ];


        const finalRoute =
            validRoutes.includes(route)
                ? route
                : "home";


        this.screens
            .forEach((screen) => {

                screen.classList.toggle(
                    "screen-active",
                    screen.dataset.screen === finalRoute
                );

            });


        this.routeButtons
            .forEach((button) => {

                button.classList.toggle(
                    "nav-active",
                    button.dataset.route === finalRoute
                );

            });


        window.scrollTo({
            top: 0,
            behavior: "instant"
        });


        this.closeMobileMenu();

    }


    closeMobileMenu() {

        document
            .getElementById("mobileMenu")
            ?.classList
            .remove("mobile-menu-visible");

    }

}



/* =========================================================
   Modal Manager
========================================================= */

class ModalManager {

    constructor() {

        this.modal =
            document.getElementById("talkModal");


        this.closeButton =
            document.getElementById("modalClose");

    }


    start() {

        document.addEventListener(
            "click",
            (event) => {

                const trigger =
                    event.target.closest(
                        "[data-open-talk]"
                    );


                if (trigger) {

                    this.open();

                }

            }
        );


        this.closeButton
            ?.addEventListener(
                "click",
                () => this.close()
            );


        this.modal
            ?.addEventListener(
                "click",
                (event) => {

                    if (
                        event.target ===
                        this.modal
                    ) {

                        this.close();

                    }

                }
            );


        document.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Escape"
                ) {

                    this.close();

                }

            }
        );

    }


    open() {

        this.modal
            ?.classList
            .add("modal-visible");


        this.modal
            ?.setAttribute(
                "aria-hidden",
                "false"
            );


        document.body
            .classList
            .add("modal-open");

    }


    close() {

        this.modal
            ?.classList
            .remove("modal-visible");


        this.modal
            ?.setAttribute(
                "aria-hidden",
                "true"
            );


        document.body
            .classList
            .remove("modal-open");

    }

}



/* =========================================================
   Contact Form Controller

   Later we will connect this class to:
   Cloudflare Worker + database / email service.
========================================================= */

class ContactFormController {

    constructor() {

        this.form =
            document.getElementById(
                "projectForm"
            );


        this.status =
            document.getElementById(
                "formStatus"
            );


        /*
         * We will add the actual API later.
         *
         * Example:
         *
         * this.apiURL =
         * "https://api.ibramheshmat.com/contact";
         */
        this.apiURL = "";

    }


    start() {

        this.form
            ?.addEventListener(
                "submit",
                (event) => {

                    this.submit(event);

                }
            );

    }


    async submit(event) {

        event.preventDefault();


        const formData =
            new FormData(this.form);


        const payload =
            Object.fromEntries(
                formData.entries()
            );


        /*
         * Backend has not been configured yet.
         */
        if (!this.apiURL) {

            console.log(
                "Project request:",
                payload
            );


            this.showStatus(
                "The form UI is ready. We will connect it to the database/API in the backend step. For now you can contact me directly by email or mobile.",
                "warning"
            );


            return;

        }


        try {

            this.showStatus(
                "Sending...",
                "loading"
            );


            const response =
                await fetch(
                    this.apiURL,
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body:
                            JSON.stringify(
                                payload
                            )
                    }
                );


            if (!response.ok) {

                throw new Error(
                    "Request failed"
                );

            }


            this.form.reset();


            this.showStatus(
                "Thanks! Your message has been sent.",
                "success"
            );

        }
        catch (error) {

            console.error(error);


            this.showStatus(
                "Something went wrong. Please contact me directly by email.",
                "error"
            );

        }

    }


    showStatus(message, type) {

        if (!this.status) {
            return;
        }


        this.status.textContent =
            message;


        this.status.className =
            `form-status ${type}`;

    }

}



/* =========================================================
   Mobile Menu
========================================================= */

class MobileMenuController {

    constructor() {

        this.button =
            document.getElementById(
                "mobileMenuButton"
            );


        this.menu =
            document.getElementById(
                "mobileMenu"
            );

    }


    start() {

        this.button
            ?.addEventListener(
                "click",
                () => {

                    this.menu
                        ?.classList
                        .toggle(
                            "mobile-menu-visible"
                        );

                }
            );

    }

}



/* =========================================================
   Main Application
========================================================= */

class PortfolioApp {

    constructor(data) {

        this.renderer =
            new PortfolioRenderer(data);


        this.router =
            new PortfolioRouter();


        this.modal =
            new ModalManager();


        this.contactForm =
            new ContactFormController();


        this.mobileMenu =
            new MobileMenuController();

    }


    start() {

        this.renderer.render();

        this.router.start();

        this.modal.start();

        this.contactForm.start();

        this.mobileMenu.start();

        console.log(
            "Ibram Heshmat Portfolio loaded."
        );

    }

}



const app =
    new PortfolioApp(
        portfolioData
    );


app.start();