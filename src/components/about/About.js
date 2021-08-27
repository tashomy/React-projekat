import React from 'react';
import { BsFillAwardFill } from "react-icons/bs";
import { BsFillBarChartFill } from "react-icons/bs";

const About = () => {


    return (
        <div className="boxes" id="about">
        <div className="box">
          <BsFillAwardFill size={30} style={{ fill: 'black' }}/>
          <h2>Certified World Awards Winners</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus recusandae voluptatem excepturi sapiente porro, ullam autem laborum placeat, aliquam iusto laboriosam iste non omnis eos nostrum numquam ducimus voluptatibus fugiat, nemo officiis voluptate culpa quis architecto! Quis sequi ea atque aperiam, dicta veritatis, voluptatem maiores modi, consequuntur deserunt quibusdam dolore quae quasi quas! Explicabo enim veritatis, placeat quasi magnam molestias voluptatum laudantium praesentium tempora.</p>
        </div>
        <div className="box">
          <BsFillBarChartFill size={30} style={{ fill: 'black' }}/>
          <h2>First Ranked In 2020</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum harum aliquam perspiciatis veritatis voluptate ea neque porro ullam iste, non nesciunt illo similique maxime repellendus maiores iure? Voluptates nesciunt quo ducimus consequuntur mollitia magnam corporis nulla delectus assumenda, voluptate alias voluptatibus possimus pariatur vero numquam nemo sit ipsam? Vel est maiores eum nostrum impedit iure, ab saepe?</p>
        </div>
      </div>
    )
}

export default About;