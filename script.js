// Dynamic project loading for Urvi Shah's 2D graphics portfolio

const projects = [
    {
        title: 'Project One',
        description: 'A stunning visual experience showcasing beautiful 2D graphics.',
        image: 'path/to/image1.png',
        link: 'https://example.com/project-one'
    },
    {
        title: 'Project Two',
        description: 'An interactive 2D environment providing engaging gameplay.',
        image: 'path/to/image2.png',
        link: 'https://example.com/project-two'
    },
    // Add more projects as needed
];

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
