// import "./About.css";

// export default function About() {
//   return (
//     <section id="about" className="about-section">
//       <div className="about-container">

//         <h2 className="about-title">About Me</h2>

//         <div className="about-grid">

//           {/* LEFT SIDE TEXT */}
//           <div className="about-text">
//             <p>
//               I am a React.js Application Developer with over 3 years of
//               professional experience building scalable, high-performance
//               web and mobile applications. Currently working as a
//               Software Engineer – Frontend at TECHVERVE SOLUTIONS PVT LTD.
//             </p>

//             <p>
//               My expertise includes developing modular and reusable UI
//               components using React.js, TypeScript, and Redux,
//               implementing secure authentication and role-based access
//               control (RBAC), and integrating real-time updates using Firebase.
//             </p>

//             <p>
//               I specialize in performance optimization, efficient state
//               management, and delivering responsive, production-ready
//               applications while collaborating in Agile / Scrum environments.
//             </p>
//           </div>

//           {/* RIGHT SIDE HIGHLIGHTS */}
//           <div className="about-highlights">
//             <div className="highlight-card">

//               <div className="highlight-item">
//                 3+ Years of Professional Experience
//               </div>

//               <div className="highlight-item">
//                 React.js & TypeScript Expertise
//               </div>

//               <div className="highlight-item">
//                 Redux State Management
//               </div>

//               <div className="highlight-item">
//                 React Native (Production Experience)
//               </div>

//               <div className="highlight-item">
//                 Role-Based Access Control (RBAC)
//               </div>

//               <div className="highlight-item">
//                 Firebase Real-Time Integration
//               </div>

//               <div className="highlight-item">
//                 Performance Optimization
//               </div>

//               <div className="highlight-item">
//                 Agile / Scrum Collaboration
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import "./About.css";


export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Section Title */}
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="about-grid">

          {/* LEFT: Profile Photo + Basic Info */}
          <motion.div
            className="about-profile"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/images/profile.jpg" alt="Shivaraj" />
            <h3>Shivaraju N</h3>
            <p className="email">shivrajsenu123@gmail.com</p>
          </motion.div>

          {/* RIGHT: Intro + Details */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="about-intro">
              Hi! I'm a passionate Frontend Developer specializing in React.js, TypeScript, and modern UI/UX development.
            </p>

            <p>
              I have 3+ years of professional experience building scalable, high-performance web and mobile applications.
            </p>

            <p>
              My expertise includes developing modular UI components, implementing secure authentication, role-based access control (RBAC), and real-time features with Firebase.
            </p>

            <p>
              I focus on performance optimization, efficient state management, and delivering production-ready applications while collaborating in Agile/Scrum environments.
            </p>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          className="about-highlights"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="highlight-card">
            <div className="highlight-item">3+ Years of Professional Experience</div>
            <div className="highlight-item">React.js & TypeScript Expertise</div>
            <div className="highlight-item">Redux State Management</div>
            <div className="highlight-item">React Native (Production Experience)</div>
            <div className="highlight-item">Role-Based Access Control (RBAC)</div>
            <div className="highlight-item">Firebase Real-Time Integration</div>
            <div className="highlight-item">Performance Optimization</div>
            <div className="highlight-item">Agile / Scrum Collaboration</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
