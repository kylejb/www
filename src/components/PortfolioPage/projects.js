export const projects = [{
    id: 1,
    title: 'Commuter',
    desc: 'Access upcoming MTA arrival times at your favorite station.',
    icons: [{
        id: 1,
        type: 'database',
        name: 'SQLite3',
        classname: 'fas fa-database',
        link: 'https://sqlite.org'
    }, {
        id: 2,
        type: 'backend',
        name: 'Ruby',
        classname: 'fas fa-gem',
        link: 'https://www.ruby-lang.org'
    }],
    github: {
        link: ['https://github.com/kylejb/nyc-mta-station-arrival-feed'],
        label: 'GitHub'
    },
    demo: 'assets/demos/Commuter.gif',
    image: 'assets/images/Commuter.png',

}, {
    id: 2,
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
        link: ['https://github.com/kylejb/JobMate-on-Rails'],
        label: 'GitHub'
    },
    demo: 'assets/demos/JobMate_on_Rails.gif',
    image: 'assets/images/JobMate_on_Rails.png',

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
        classname: 'fab fa-react',
        link: 'https://reactjs.org'
    }],
    github: {
        link: [{
            label: 'GitHub (FE)',
            link: 'https://github.com/kylejb/clairbuoyant_frontend'
        }, {
            label: 'GitHub (BE)',
            link: 'https://github.com/kylejb/capstone-project_backend'
        }]
    },
    demo: 'assets/images/WIP.jpg',
    image: 'assets/images/clairBuoyant.png',

}, {
    id: 3,
    title: 'ISS Tracker',
    desc: 'Provides ISS sighting opportunities based on user location.',
    icons: [{
        id: 3,
        type: 'frontend',
        name: 'ReactJS',
        classname: 'fab fa-react',
        link: 'https://reactjs.org'
    }],
    github: {
        link: ['https://github.com/kylejb/space-station-tracker'],
        label: 'Github',
    },
    demo: 'assets/images/WIP.jpg',
    image: 'assets/images/ISS_Tracker.jpg',
}];
