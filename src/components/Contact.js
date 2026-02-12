// import { Form, Input, Button, message } from "antd";
// import {
//   LinkedinOutlined,
//   GithubOutlined,
//   MailOutlined,
// } from "@ant-design/icons";
// import "./Contact.css";

// export default function Contact() {
//   const [form] = Form.useForm();

//   const onFinish = (values) => {
//     console.log("Form Submitted:", values);
//     message.success("Message sent successfully.");
//     form.resetFields();
//   };

//   return (
//     <section id="contact" className="contact-section">
//       <div className="contact-container">

//         <h2 className="contact-title">Get In Touch</h2>

//         <p className="contact-subtitle">
//           I'm open to frontend opportunities, React.js projects, and
//           collaborative development work. Let’s build something impactful.
//         </p>

//         <div className="contact-grid">

//           {/* LEFT SIDE */}
//           <div className="contact-card">

//             <div className="contact-link">
//               <LinkedinOutlined className="contact-icon" />
//               <a
//                 href="https://www.linkedin.com/in/shivaraju-n-564091243"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 linkedin.com/in/shivaraju-n
//               </a>
//             </div>

//             {/* <div className="contact-link">
//               <GithubOutlined className="contact-icon" />
//               <a
//                 href="https://github.com/shivaraj260"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 github.com/shivaraj260
//               </a>
//             </div> */}

//             <div className="contact-link">
//               <MailOutlined className="contact-icon" />
//               <a href="mailto:shivrajsenu123@gmail.com">
//                 shivrajsenu123@gmail.com
//               </a>
//             </div>

//           </div>

//           {/* RIGHT SIDE */}
//           <div className="contact-card">

//             <Form layout="vertical" form={form} onFinish={onFinish}>

//               <Form.Item
//                 name="name"
//                 label="Name"
//                 rules={[{ required: true, message: "Please enter your name" }]}
//               >
//                 <Input placeholder="Your Name" />
//               </Form.Item>

//               <Form.Item
//                 name="email"
//                 label="Email"
//                 rules={[
//                   { required: true, message: "Please enter your email" },
//                   { type: "email", message: "Enter a valid email" },
//                 ]}
//               >
//                 <Input placeholder="you@example.com" />
//               </Form.Item>

//               <Form.Item
//                 name="message"
//                 label="Message"
//                 rules={[{ required: true, message: "Please enter your message" }]}
//               >
//                 <Input.TextArea rows={4} placeholder="Write your message..." />
//               </Form.Item>

//               <Form.Item>
//                 <Button
//                   htmlType="submit"
//                   block
//                   className="contact-button"
//                 >
//                   Send Message
//                 </Button>
//               </Form.Item>

//             </Form>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

import { Form, Input, Button, message } from "antd";
import { LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Submitted:", values);
    message.success("Message sent successfully.");
    form.resetFields();
  };

  const socialLinks = [
    {
      icon: <LinkedinOutlined />,
      label: "linkedin.com/in/shivaraju-n",
      url: "https://www.linkedin.com/in/shivaraju-n-564091243",
    },
    {
      icon: <MailOutlined />,
      label: "shivrajsenu123@gmail.com",
      url: "mailto:shivrajsenu123@gmail.com",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="contact-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I'm open to frontend opportunities, React.js projects, and
          collaborative development work. Let’s build something impactful.
        </motion.p>

        <div className="contact-grid">

          {/* LEFT SIDE */}
          {/* <motion.div
            className="contact-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, i) => (
              <div key={i} className="contact-link">
                {link.icon}
                <a href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
              </div>
            ))}
          </motion.div> */}
          <motion.div
  className="contact-card"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {socialLinks.map((link, i) => (
    <div key={i} className="contact-link">
      {link.icon}
      <a href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
    </div>
  ))}
</motion.div>


          {/* RIGHT SIDE */}
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Form layout="vertical" form={form} onFinish={onFinish}>

              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="Your Name" />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Enter a valid email" },
                ]}
              >
                <Input placeholder="you@example.com" />
              </Form.Item>

              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: "Please enter your message" }]}
              >
                <Input.TextArea rows={4} placeholder="Write your message..." />
              </Form.Item>

              <Form.Item>
                <Button htmlType="submit" block className="contact-button">
                  Send Message
                </Button>
              </Form.Item>

            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

