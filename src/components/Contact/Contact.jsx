import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:swarnavakaran@gmail.com">swarnavakaran@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/swarnava-karan-846b211ba">linkedin.com/Swarnava Karan</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/swarnava2001karan">github.com/Swarnava Karan</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/call.png")} alt="phone number"/>
          <a href="callto:9874236520">9874236520</a>
        </li>
      </ul>
    </footer>
  );
};