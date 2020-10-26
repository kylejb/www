export const projects = [{
    id: 1,
    title: 'JobMate',
    desc: 'A better way to find and apply to jobs.',
    icons: [{
        id: 1,
        type: 'database',
        name: 'SQLite3',
        classname: 'fas fa-database',
        link: 'https://sqlite.org'
    }, {
        id: 2,
        type: 'backend',
        name: 'Ruby on Rails',
        classname: 'fas fa-gem',
        link: 'https://rubyonrails.org'
    }],
    github: {
        link: ["https://github.com/kylejb/JobMate"],
        label: "Fullstack"
    }
}, { 
    id: 2,
    title: 'ClassZoom',
    desc: 'Simplifying remote learning with Zoom API integration.',
    icons: [{
        id: 1,
        type: 'database',
        name: 'PostgreSQL',
        classname: 'fas fa-database',
        link: 'https://www.postgresql.org'
    }, {
        id: 2,
        type: 'backend',
        name: 'Ruby on Rails',
        classname: 'fas fa-gem',
        link: 'https://rubyonrails.org'  
    }, {
        id: 3,
        type: 'frontend',
        name: 'JavaScript',
        classname:'fab fa-js',
        link: 'https://developer.mozilla.org/en-US/docs/Web/javascript'
    }],
    github: {
        link: [{label: 'Frontend', link: 'https://github.com/kylejb/classzoom_frontend'}, {label: 'Backend', link: 'https://github.com/kylejb/classzoom_backend'}]
    }
}, {
    id: 3,
    title: 'clairBuoyant',
    desc: 'Aggregating buoy and crowdsourced data for surfers.',
    icons: [{
        id: 1,
        type: 'database',
        name: 'PostgreSQL',
        classname: 'fas fa-database',
        link: 'https://www.postgresql.org'
    }, {
        id: 2,
        type: 'backend',
        name: 'Ruby on Rails',
        classname: 'fas fa-gem',
        link: 'https://rubyonrails.org'  
    }, {
        id: 3,
        type: 'frontend',
        name: 'ReactJS',
        classname:'fab fa-react',
        link: 'https://reactjs.org'
    }],
    github: {
        link: [{
            label: 'Frontend', link: 'https://github.com/kylejb/capstone-project_backend'
        }, {
            label: 'Backend', link: 'https://github.com/kylejb/clairbuoyant_frontend'
        }]
    }      
}];
