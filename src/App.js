// import React, { useState } from "react";
// import { Layout, Menu, Drawer, Button, Grid } from "antd";
// import {
//   HomeOutlined,
//   UserOutlined,
//   AppstoreOutlined,
//   MailOutlined,
//   MenuOutlined,
//   CodeOutlined,
//   LaptopOutlined,
// } from "@ant-design/icons";
// import { Link as ScrollLink } from "react-scroll";
// import Home from "./components/Home";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Experience from "./components/Experience";
// import Contact from "./components/Contact";

// const { Header, Content, Footer } = Layout;
// const { useBreakpoint } = Grid;

// function App() {
//   const [drawerVisible, setDrawerVisible] = useState(false);
//   const screens = useBreakpoint();

//   const menuItems = [
//     { key: "home", label: "Home", icon: <HomeOutlined /> },
//     { key: "about", label: "About", icon: <UserOutlined /> },
//     { key: "projects", label: "Projects", icon: <AppstoreOutlined /> },
//     { key: "skills", label: "Skills", icon: <CodeOutlined /> },
//     { key: "experience", label: "Experience", icon: <LaptopOutlined /> },
//     { key: "contact", label: "Contact", icon: <MailOutlined /> },
//   ];

//   const renderMenu = (mode = "horizontal", onClick = () => { }, theme = "dark") => (
//     <Menu
//       theme={theme}
//       mode={mode}
//       selectable={false}
//       style={{
//         background: theme === "dark" ? "transparent" : "#fff",
//         border: "none",
//         display: mode === "horizontal" ? "flex" : "block",
//         justifyContent: mode === "horizontal" ? "center" : "flex-start",
//         gap: mode === "horizontal" ? "24px" : "0",
//         color: theme === "dark" ? "white" : "black",
//       }}
//     >
//       {menuItems.map((item) => (
//         <Menu.Item
//           key={item.key}
//           icon={item.icon}
//           style={{ color: theme === "dark" ? "white" : "black" }}
//         >
//           <ScrollLink
//             to={item.key}
//             smooth={true}
//             duration={500}
//             offset={-70}
//             onClick={onClick}
//             className="cursor-pointer"
//             style={{ color: theme === "dark" ? "white" : "black" }}
//           >
//             {item.label}
//           </ScrollLink>
//         </Menu.Item>
//       ))}
//     </Menu>
//   );



//   return (
//     <Layout className="min-h-screen">
//       {/* Navbar */}
//       <Header
//         style={{
//           position: "fixed",
//           zIndex: 1000,
//           width: "100%",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           background: "#0d1117",
//           padding: "0 20px",
//         }}
//       >
//         {/* Logo */}
//         <h1 style={{ color: "#58a6ff", fontWeight: "bold", margin: 0 }}>
//           Welcome
//         </h1>

//         {/* Desktop: Menu centered | Mobile: Hamburger */}
//         {screens.md ? (
//           <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
//             {renderMenu("horizontal")}
//           </div>
//         ) : (
//           <Button
//             type="text"
//             icon={<MenuOutlined style={{ fontSize: 22, color: "white" }} />}
//             onClick={() => setDrawerVisible(true)}
//           />
//         )}

//         {/* Mobile Drawer */}
//         <Drawer
//           title="Menu"
//           placement="right"
//           onClose={() => setDrawerVisible(false)}
//           open={drawerVisible}
//           bodyStyle={{ padding: 0 }}
//         >
//           {renderMenu("vertical", () => setDrawerVisible(false), "light")}
//         </Drawer>


//       </Header>

//       {/* Page Content */}
//       <Content style={{ marginTop: 64 }}>
//         <Home />
//         <About />
//         <Projects />
//         <Skills />
//         <Experience />
//         <Contact />
//       </Content>

//       {/* Footer */}
//       {/* <Footer
//         style={{
//           textAlign: "center",
//           background: "#0d1117",
//           color: "#8b949e",
//         }}
//       >
//         ✨ Made with Ant Design | Shivaraj N
//       </Footer> */}
//     </Layout>
//   );
// }

// export default App;
import React, { useState } from "react";
import { Layout, Menu, Drawer, Button, Grid } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  AppstoreOutlined,
  MailOutlined,
  MenuOutlined,
  CodeOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
import { Link as ScrollLink } from "react-scroll";

import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const { Header, Content } = Layout;
const { useBreakpoint } = Grid;

function App() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const screens = useBreakpoint();

  const menuItems = [
    { key: "home", label: "Home", icon: <HomeOutlined /> },
    { key: "about", label: "About", icon: <UserOutlined /> },
    { key: "projects", label: "Projects", icon: <AppstoreOutlined /> },
    { key: "skills", label: "Skills", icon: <CodeOutlined /> },
    { key: "experience", label: "Experience", icon: <LaptopOutlined /> },
    { key: "contact", label: "Contact", icon: <MailOutlined /> },
  ];

  const renderMenu = (mode = "horizontal", onClick = () => {}, theme = "dark") => (
    <Menu
      theme={theme}
      mode={mode}
      selectable={false}
      style={{
        background: theme === "dark" ? "transparent" : "#fff",
        border: "none",
        display: mode === "horizontal" ? "flex" : "block",
        justifyContent: mode === "horizontal" ? "center" : "flex-start",
        gap: mode === "horizontal" ? "24px" : "0",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      {menuItems.map((item) => (
        <Menu.Item
          key={item.key}
          icon={item.icon}
          style={{ color: theme === "dark" ? "white" : "black" }}
        >
          <ScrollLink
            to={item.key}
            smooth={true}
            duration={600}
            offset={-64} // Adjust for fixed header
            onClick={onClick}
            className="cursor-pointer"
            style={{ color: theme === "dark" ? "white" : "black" }}
          >
            {item.label}
          </ScrollLink>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Layout className="min-h-screen">
      {/* Navbar */}
      <Header
        style={{
          position: "fixed",
          zIndex: 1000,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#0d1117",
          padding: "0 20px",
        }}
      >
        {/* Logo */}
        <h1 style={{ color: "#58a6ff", fontWeight: "bold", margin: 0 }}>
          Welcome
        </h1>

        {/* Desktop Menu */}
        {screens.md ? (
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            {renderMenu("horizontal")}
          </div>
        ) : (
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: 22, color: "white" }} />}
            onClick={() => setDrawerVisible(true)}
          />
        )}

        {/* Mobile Drawer */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          bodyStyle={{ padding: 0 }}
        >
          {renderMenu("vertical", () => setDrawerVisible(false), "light")}
        </Drawer>
      </Header>

      {/* Page Content */}
      <Content style={{ marginTop: 64 }}>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </Content>
    </Layout>
  );
}

export default App;
