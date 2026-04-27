/* RESET */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* THEME */
:root {
    --primary-color: #e50914;
    --text-dark: #fff;
    --text-light: #b3b3b3;
    --bg-dark: #000;
    --bg-card: #141414;
    --glass: rgba(20,20,20,0.6);
    --border: rgba(255,255,255,0.08);
}

body {
    font-family: Arial, sans-serif;
    background: var(--bg-dark);
    color: var(--text-dark);
    overflow-x: hidden;
}

/* NAVBAR */
.navbar {
    position: fixed;
    width: 100%;
    background: var(--glass);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
    z-index: 1000;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
}

.nav-logo {
    color: var(--primary-color);
    font-weight: bold;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 20px;
}

.nav-link {
    color: white;
    text-decoration: none;
}

.nav-link:hover {
    color: var(--primary-color);
}

.hamburger {
    display: none;
}

/* HOME */
.home {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg,#000,#e50914);
    text-align: center;
    padding: 20px;
}

.hero-text {
    font-size: 3rem;
}

.hero-subtitle {
    margin: 10px 0;
    color: var(--text-light);
}

/* BUTTON */
.btn {
    padding: 10px 20px;
    border-radius: 25px;
    text-decoration: none;
    display: inline-block;
    margin: 5px;
}

.btn-primary {
    background: var(--primary-color);
    color: white;
}

.btn-secondary {
    border: 1px solid white;
    color: white;
}

/* SECTION */
section {
    padding: 80px 20px;
}

.section-title {
    text-align: center;
    margin-bottom: 40px;
}

/* DESKTOP SLIDER */
.projects-grid,
.services-grid,
.skills-grid {
    display: flex;
    gap: 20px;
    overflow-x: auto;
}

/* CARD */
.project-card,
.service-card,
.skill-card {
    min-width: 260px;
    background: var(--bg-card);
    padding: 20px;
    border-radius: 12px;
    border: 1px solid var(--border);
    transition: 0.3s;
}

.project-card:hover,
.service-card:hover,
.skill-card:hover {
    transform: scale(1.05);
}

/* IMAGE */
.project-image img {
    width: 100%;
    border-radius: 10px;
}

/* CONTACT */
.contact-content {
    display: flex;
    gap: 30px;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
}

/* SOCIAL */
.social-links {
    text-align: center;
    margin-top: 20px;
}

.social-links a {
    margin: 10px;
    color: white;
}

/* FOOTER */
.footer {
    text-align: center;
    padding: 20px;
    background: #111;
}

/* ======================= */
/* 📲 TABLET */
/* ======================= */
@media (max-width: 992px) {

    .projects-grid,
    .services-grid,
    .skills-grid {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        overflow-x: hidden;
    }
}

/* ======================= */
/* 📱 MOBILE */
/* ======================= */
@media (max-width: 768px) {

    /* NAV */
    .nav-menu {
        position: absolute;
        top: 60px;
        left: -100%;
        flex-direction: column;
        background: #000;
        width: 100%;
        padding: 20px;
        text-align: center;
    }

    .nav-menu.active {
        left: 0;
    }

    .hamburger {
        display: block;
    }

    /* TEXT */
    .hero-text {
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 14px;
    }

    /* GRID FIX */
    .projects-grid,
    .services-grid,
    .skills-grid {
        display: grid;
        grid-template-columns: 1fr;
    }

    /* SMALL CARDS 🔥 */
    .project-card,
    .service-card,
    .skill-card {
        padding: 15px;
        border-radius: 8px;
    }

    /* TEXT SIZE FIX */
    .service-card h3,
    .skill-card h3 {
        font-size: 16px;
    }

    .service-card p,
    .skill-card p {
        font-size: 13px;
    }

    .about-text p {
        font-size: 14px;
    }

    /* CONTACT */
    .contact-content {
        flex-direction: column;
    }

    /* BUTTON */
    .btn {
        width: 100%;
        text-align: center;
    }
}