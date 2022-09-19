import React from "react";

import style from "./about.module.css";

const About = () => {
  return (
    <div>
      <h1>About Nusadata</h1>
      <div className={style.content}>
        <h2>Our Mision</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          delectus vel quisquam placeat minus non iste obcaecati explicabo
          eligendi ducimus?
        </p>
        <h2>Our Vision</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          delectus vel quisquam placeat minus non iste obcaecati explicabo
          eligendi ducimus?
        </p>
        <h2>Responsibility</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          delectus vel quisquam placeat minus non iste obcaecati explicabo
          eligendi ducimus?
        </p>
      </div>
    </div>
  );
};

export default About;
