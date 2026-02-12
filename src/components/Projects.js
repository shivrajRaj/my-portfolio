// import "./Projects.css";

// export default function Projects() {
//   const projects = [
//     {
//       name: "Transaction Management Web Application",
//       tech: ["React.js", "TypeScript", "Redux", "REST APIs", "MySQL"],
//       description:
//         "Enterprise web application for managing complex transaction workflows, approvals, and secure operations.",
//       points: [
//         "Developed complex workflows for transactions, requests, and approvals.",
//         "Integrated frontend with backend services for real-time data handling.",
//         "Implemented secure role-based access control (RBAC).",
//         "Optimized API interactions and improved UI performance.",
//       ],
//     },
//     {
//       name: "Role-Based Operations Dashboard",
//       tech: ["React.js", "Redux", "Ant Design"],
//       description:
//         "Administrative dashboard for managing users, roles, permissions, and operational data.",
//       points: [
//         "Built dynamic navigation based on user roles.",
//         "Implemented secure screen-level access control.",
//         "Integrated reporting modules and data visualization components.",
//         "Designed scalable dashboard architecture.",
//       ],
//     },
//     {
//       name: "Mobile Payment & Collection Application",
//       tech: ["React Native", "REST APIs"],
//       description:
//         "Mobile application for onboarding users and processing payment transactions.",
//       points: [
//         "Developed mobile screens for onboarding and transaction processing.",
//         "Ensured smooth API integration and data synchronization.",
//         "Optimized UI for performance and usability on mobile devices.",
//       ],
//     },
//     {
//       name: "Real-Time Data Monitoring Dashboard",
//       tech: ["React.js", "Firebase", "AmCharts 5"],
//       description:
//         "Interactive dashboard for visualizing real-time operational data.",
//       points: [
//         "Built interactive charts using AmCharts 5.",
//         "Integrated Firebase for live updates and notifications.",
//         "Designed scalable UI architecture for data-intensive screens.",
//       ],
//     },
//   ];

//   return (
//     <section id="projects" className="projects-section">
//       <div className="projects-container">

//         <h2 className="projects-title">Projects</h2>

//         <div className="projects-grid">
//           {projects.map((project, index) => (
//             <div key={index} className="project-card">

//               <div className="project-title">
//                 {project.name}
//               </div>

//               <div className="project-description">
//                 {project.description}
//               </div>

//               <div className="tech-stack">
//                 {project.tech.map((tech, i) => (
//                   <span key={i} className="tech-badge">
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <ul className="project-points">
//                 {project.points.map((point, i) => (
//                   <li key={i} className="project-point">
//                     {point}
//                   </li>
//                 ))}
//               </ul>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      name: "Transaction Management Web Application",
      tech: ["React.js", "TypeScript", "Redux", "REST APIs", "MySQL"],
      description:
        "Enterprise web application for managing complex transaction workflows, approvals, and secure operations.",
      points: [
        "Developed complex workflows for transactions, requests, and approvals.",
        "Integrated frontend with backend services for real-time data handling.",
        "Implemented secure role-based access control (RBAC).",
        "Optimized API interactions and improved UI performance.",
      ],
    },
    {
      name: "Role-Based Operations Dashboard",
      tech: ["React.js", "Redux", "Ant Design"],
      description:
        "Administrative dashboard for managing users, roles, permissions, and operational data.",
      points: [
        "Built dynamic navigation based on user roles.",
        "Implemented secure screen-level access control.",
        "Integrated reporting modules and data visualization components.",
        "Designed scalable dashboard architecture.",
      ],
    },
    {
      name: "Mobile Payment & Collection Application",
      tech: ["React Native", "REST APIs"],
      description:
        "Mobile application for onboarding users and processing payment transactions.",
      points: [
        "Developed mobile screens for onboarding and transaction processing.",
        "Ensured smooth API integration and data synchronization.",
        "Optimized UI for performance and usability on mobile devices.",
      ],
    },
    {
      name: "Real-Time Data Monitoring Dashboard",
      tech: ["React.js", "Firebase", "AmCharts 5"],
      description:
        "Interactive dashboard for visualizing real-time operational data.",
      points: [
        "Built interactive charts using AmCharts 5.",
        "Integrated Firebase for live updates and notifications.",
        "Designed scalable UI architecture for data-intensive screens.",
      ],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="project-title">{project.name}</div>

              <div className="project-description">{project.description}</div>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>

              <ul className="project-points">
                {project.points.map((point, i) => (
                  <li key={i} className="project-point">{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
