// import "./Home.css";

// export default function Home() {
//   return (
//     <section id="home" className="home-section">
//       <div className="home-container">

//         <div className="home-text">
//           <h1>Shivaraju N</h1>

//           <h2>
//             React.js Application Developer | Frontend Engineer
//           </h2>

//           <p>
//             React.js Application Developer with 3+ years of experience building
//             scalable, high-performance web and mobile applications using
//             React.js, TypeScript, Redux, React Native, and REST APIs.
//             Specialized in role-based access control, real-time Firebase
//             integrations, and performance optimization.
//           </p>

//           <div className="button-group">
//             <a href="#projects" className="primary-btn">
//               View Projects
//             </a>

//             <a href="/resume.pdf" download className="secondary-btn">
//               Download Resume
//             </a>
//           </div>
//         </div>

//         <div className="home-image">
//           <img src="/profile.jpg" alt="Shivaraju N" />
//         </div>

//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <motion.div
          className="home-text"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Hi, I'm Shivaraju N</h1>

          <h2>
            <span style={{ color: "#38bdf8" }}>
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "React.js Specialist",
                  "TypeScript Developer",
                  "UI Engineer",
                  ".NET Core 8 Developer"
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p>
            I build scalable, high-performance web applications using
            React.js, TypeScript, and modern frontend architecture.
          </p>

          <div className="button-group">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
