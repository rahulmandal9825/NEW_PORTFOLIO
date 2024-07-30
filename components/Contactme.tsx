"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "0px" });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    // Your email sending logic here
  };

  return (
    <motion.div
      ref={ref}
      className="contact  bg-black  text-white bg-gradient-to-b from-[#5D2CA8] to-black"

      initial="initial"
      animate={isInView ? "animate" : ""}
    >
      <motion.div className="textContainer" >
        <motion.h1 >Let’s work together</motion.h1>
        <motion.div className="item" >
          <h2>Gmail</h2>
          <span>rahulmandalzzz123@gmail.com</span>
        </motion.div>
        <motion.div className="item" ></motion.div>
        <motion.div className="item" >
          <h2>Phone</h2>
          <span>+91 8735844563</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
