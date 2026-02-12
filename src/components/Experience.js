// import "./Experience.css";

// export default function Experience() {
//   return (
//     <section id="experience" className="experience-section">
//       <div className="experience-container">

//         <h2 className="experience-title">
//           Professional Experience
//         </h2>

//         <div className="experience-card">

//           <div className="role-title">
//             Software Engineer – Frontend
//           </div>

//           <div className="company-duration">
//             TECHVERVE SOLUTIONS PVT LTD | Dec 2022 – Present | Bangalore, India
//           </div>

//           <ul className="responsibility-list">

//             <li className="responsibility-item">
//               Developed and maintained large-scale React.js and React Native applications using TypeScript and Redux.
//             </li>

//             <li className="responsibility-item">
//               Built reusable, modular UI components following clean architecture and best practices.
//             </li>

//             <li className="responsibility-item">
//               Implemented authentication, authorization, and role-based access control (RBAC).
//             </li>

//             <li className="responsibility-item">
//               Integrated REST APIs and optimized frontend-backend communication.
//             </li>

//             <li className="responsibility-item">
//               Implemented real-time updates and notifications using Firebase.
//             </li>

//             <li className="responsibility-item">
//               Improved application performance using memoization, lazy loading, and optimized state management.
//             </li>

//             <li className="responsibility-item">
//               Delivered responsive and cross-browser compatible production applications.
//             </li>

//             <li className="responsibility-item">
//               Collaborated with backend and QA teams in Agile / Scrum environments.
//             </li>

//           </ul>

//         </div>

//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import "./Experience.css";

export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer – Frontend",
      company: "TECHVERVE SOLUTIONS PVT LTD",
      duration: "Dec 2022 – Present",
      location: "Bangalore, India",
      responsibilities: [
        "Developed and maintained large-scale React.js and React Native applications using TypeScript and Redux.",
        "Built reusable, modular UI components following clean architecture and best practices.",
        "Implemented authentication, authorization, and role-based access control (RBAC).",
        "Integrated REST APIs and optimized frontend-backend communication.",
        "Implemented real-time updates and notifications using Firebase.",
        "Improved application performance using memoization, lazy loading, and optimized state management.",
        "Delivered responsive and cross-browser compatible production applications.",
        "Collaborated with backend and QA teams in Agile / Scrum environments.",
      ],
    },
    // Add more experiences here if needed
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">

        <motion.h2
          className="experience-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="role-title">{exp.role}</div>
            <div className="company-duration">
              {exp.company} | {exp.duration} | {exp.location}
            </div>
            <ul className="responsibility-list">
              {exp.responsibilities.map((item, i) => (
                <li key={i} className="responsibility-item">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
