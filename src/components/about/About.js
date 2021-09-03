import React from "react";
import { BsFillAwardFill } from "react-icons/bs";
import { BsFillBarChartFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="height-100">
      <div className="boxes" id="about">
        <div className="box">
          <BsFillAwardFill size={30} style={{ fill: "black" }} />
          <h2>Certified World Awards Winners</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            recusandae voluptatem excepturi sapiente porro, ullam autem laborum
            placeat, aliquam iusto laboriosam iste non omnis eos nostrum numquam
            ducimus voluptatibus fugiat, nemo officiis voluptate culpa quis
            architecto! Quis sequi ea atque aperiam, dicta veritatis, voluptatem
            maiores modi, consequuntur deserunt quibusdam dolore quae quasi
            quas! Explicabo enim veritatis, placeat quasi magnam molestias
            voluptatum laudantium praesentium tempora.
          </p>
        </div>
        <div className="box">
          <BsFillBarChartFill size={30} style={{ fill: "black" }} />
          <h2>First Ranked In 2020</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum harum
            aliquam perspiciatis veritatis voluptate ea neque porro ullam iste,
            non nesciunt illo similique maxime repellendus maiores iure?
            Voluptates nesciunt quo ducimus consequuntur mollitia magnam
            corporis nulla delectus assumenda, voluptate alias voluptatibus
            possimus pariatur vero numquam nemo sit ipsam? Vel est maiores eum
            nostrum impedit iure, ab saepe?
          </p>
        </div>
      </div>

      <svg id="vawe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#242033"
          fillOpacity="1"
          d="M0,288L48,266.7C96,245,192,203,288,186.7C384,171,480,181,576,202.7C672,224,768,256,864,261.3C960,267,1056,245,1152,218.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default About;
