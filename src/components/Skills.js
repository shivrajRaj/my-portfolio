// import "./Skills.css";

// export default function Skills() {
//   const skillCategories = [
//     {
//       title: "Frontend",
//       skills: [
//         "React.js",
//         "TypeScript",
//         "JavaScript (ES6+)",
//         "Redux",
//         "HTML5",
//         "CSS3",
//         "Responsive UI",
//       ],
//     },
//     {
//       title: "UI Libraries",
//       skills: [
//         "Ant Design",
//         "Material UI",
//       ],
//     },
//     {
//       title: "Mobile Development",
//       skills: [
//         "React Native (Production)",
//         "Flutter",
//       ],
//     },
//     {
//       title: "Backend (Basic)",
//       skills: [
//         "ASP.NET Core",
//         "Node.js (Express.js)",
//       ],
//     },
//     {
//       title: "Databases",
//       skills: [
//         "MySQL",
//         "PostgreSQL",
//         "Firebase",
//       ],
//     },
//     {
//       title: "Tools & Practices",
//       skills: [
//         "Git",
//         "GitHub",
//         "GitLab",
//         "REST API Integration",
//         "Role-Based Access Control (RBAC)",
//         "Performance Optimization",
//         "Agile / Scrum",
//       ],
//     },
//   ];

//   return (
//     <section id="skills" className="skills-section">
//       <div className="skills-container">

//         <h2 className="skills-title">Technical Skills</h2>

//         <div className="skills-grid">
//           {skillCategories.map((category, index) => (
//             <div key={index} className="skill-card">

//               <div className="skill-category">
//                 {category.title}
//               </div>

//               {category.skills.map((skill, i) => (
//                 <span key={i} className="skill-badge">
//                   {skill}
//                 </span>
//               ))}

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import "./Skills.css";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Redux",
        "HTML5",
        "CSS3",
        "Responsive UI",
      ],
    },
    {
      title: "UI Libraries",
      skills: ["Ant Design", "Material UI"],
    },
    {
      title: "Mobile Development",
      skills: ["React Native (Production)", "Flutter"],
    },
    {
      title: "Backend (Basic)",
      skills: ["ASP.NET Core", "Node.js (Express.js)"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "Firebase"],
    },
    {
      title: "Tools & Practices",
      skills: [
        "Git",
        "GitHub",
        "GitLab",
        "REST API Integration",
        "Role-Based Access Control (RBAC)",
        "Performance Optimization",
        "Agile / Scrum",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <motion.h2
          className="skills-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="skill-category">{category.title}</div>

              {category.skills.map((skill, i) => (
                <span key={i} className="skill-badge">{skill}</span>
              ))}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
