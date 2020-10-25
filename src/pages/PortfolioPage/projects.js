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
        name: 'SQLite3',
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
}];

// }, {
//     name: 'ClassZoom',
//     render: (
//       <div 
//         className={cardClassName}
//         // onClick={() => setOpen(!open)}
//       >        
//       <div className='portfolio-item__title'>
//           ClassZoom
//         </div>
//         <div className='portfolio-item__desc'>
//           Simplifying remote learning with Zoom API integration. 
//         </div>
//         <div className='portfolio-item__icon'>
//         <a target="_blank" rel="noopener noreferrer" href="https://www.postgresql.org"><i className="fas fa-database"></i></a>
//         <a target="_blank" rel="noopener noreferrer" href="https://rubyonrails.org"><i className="fas fa-gem"></i></a>
//         <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/javascript"><i className="fab fa-js"></i></a>
//         </div>
//         <div className='portfolio-item__links'>
//           <a target="_blank" rel="noopener noreferrer" href="https://github.com/kylejb/classzoom_backend">Backend</a>
//           <a target="_blank" rel="noopener noreferrer" href="https://github.com/kylejb/classzoom_frontend">Frontend</a>
//         </div>
//       </div>
//     )
//   }, {
//     name: 'clairBuoyant',
//     render: (
//       <div 
//         className={cardClassName}
//         // onClick={() => setOpen(!open)}
//       >
//         <div className='portfolio-item__title'>
//           clairBuoyant
//         </div>
//         <div className='portfolio-item__desc'>
//           Aggregating buoy and crowdsourced data for surfers.
//         </div>
//         <div className='portfolio-item__icon'>
//         <a target="_blank" rel="noopener noreferrer" href="https://www.postgresql.org"><i className="fas fa-database"></i></a>
//         <a target="_blank" rel="noopener noreferrer" href="https://rubyonrails.org"><i className="fas fa-gem"></i></a>
//         <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org"><i className="fab fa-react"></i></a>
//         </div>
//         <div className='portfolio-item__links'>
//           <a target="_blank" rel="noopener noreferrer" href="https://github.com/kylejb/capstone-project_backend">Backend</a>
//           <a target="_blank" rel="noopener noreferrer" href="https://github.com/kylejb/clairbuoyant_frontend">Frontend</a>
//         </div>
//       </div>
//     )