document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');
    const skillDescription = document.getElementById('skill-description');
    const skillTitle = document.getElementById('skill-title');
    const skillText = document.getElementById('skill-text');

    const skillInfo = {
        python: { title: "Python Development", text: "Custom Python applications, data analysis, and automation scripts." },
        html5: { title: "HTML5 Development", text: "Modern, semantic HTML5 structures for robust web applications." },
        css3: { title: "CSS3 Styling", text: "Responsive and attractive designs using the latest CSS3 features." },
        javascript: { title: "JavaScript Programming", text: "Dynamic and interactive web applications using vanilla JS and modern frameworks." },
        sql: { title: "SQL Database Management", text: "Database design, optimization, and management for various SQL databases." },
        react: { title: "React Development", text: "Building scalable front-end applications with React." },
        nodejs: { title: "Node.js Development", text: "Server-side JavaScript applications and APIs using Node.js." },
        php: { title: "PHP Development", text: "Dynamic websites and applications using PHP." },
        typescript: { title: "TypeScript Development", text: "Type-safe JavaScript development for large-scale applications." },
        docker: { title: "Docker Containerization", text: "Containerizing applications for consistent deployment across environments." }
    };

    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            const skillType = skill.getAttribute('data-skill');
            if (skillInfo[skillType]) {
                skillTitle.textContent = skillInfo[skillType].title;
                skillText.textContent = skillInfo[skillType].text;
                skillDescription.classList.remove('hidden');
            }
        });
    });
});