// Dynamic project loading for Urvi Shah's 2D graphics portfolio

const projects = [
    {
       title: "Broadway",
        description: "Broadway redefines modern retail with experiential, Parisian-designed spaces where
emerging brands shine and shoppers discover. Offering seamless,
no-commitment access to premium retail locations, Broadway bridges
discovery, design, and community to craft a luxury shopping revolution.

At Broadway, every brand is a performer and every visitor is part of the show;
a vibrant, ever-evolving space where creators, brands, and shoppers
come together to connect, inspire, and thrive.

As part of the brand’s journey, I led the major art direction to translate
Broadway’s dynamic spirit into a compelling digital identity. I shaped the
social media presence to be visually striking yet easy to access and
understand, aligning perfectly with the expectations and behaviors of the target audience. Through bold visuals, clear messaging, and experience-led storytelling,
we positioned Broadway as not just a place to shop; but a movement to belong to.",
        tags: ["Tag1", "Tag2", "Tag3"],
        link: "[https://www.behance.net/gallery/224551649/Experience-Broadway]"
    },
    // Add more projects...
];
 {
        title: "Johnson & Johnson",
        description: "Johnson's Baby India is the gold standard in baby care-trusted for generations to provide the gentlest, most effective solutions for delicate baby skin, eyes, and hair. With a legacy rooted in scientific innovation and an unwavering commitment to safety, Johnson's products are carefully formulated to meet the highest industry standards, ensuring every baby receives the best possible care from day one.
More than a brand, Johnson's Baby India is a promise-a promise that nothing is moreimportant than the health and well-being of your baby.",
        tags: ["Tag1", "Tag2", "Tag3"],
        link: "[https://www.behance.net/gallery/217916653/Johnsons-Baby-India]"
    },
     title: "7UP Bangladesh",
        description: "7UP, under PepsiCo, is one of the most popular lemon-lime soft drinks in Bangladesh. Its brand vision revolves around being a refreshing and uplifting beverage that connects with the youthful spirit and energy of its consumers. The brand consistently emphasizes vibrancy, fun, and positivity in its�messaging and campaigns.",
        tags: ["Tag1", "Tag2", "Tag3"],
        link: "[https://www.behance.net/gallery/217827935/7UP-Bangladesh-Cricket-Season]"
   },

function loadProjects() {
    const projectsContainer = document.getElementById('projects');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <img src='${project.image}' alt='${project.title}'>
            <p>${project.description}</p>
            <a href='${project.link}' target='_blank'>View Project</a>
        `;
        projectsContainer.appendChild(projectElement);
    });
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    setupNavigation();
});
