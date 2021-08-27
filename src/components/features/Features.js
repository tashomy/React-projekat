import React from 'react';
import {FaShoppingCart} from "react-icons/fa";
import {BiLaptop} from "react-icons/bi";
import {BsFillPeopleFill} from "react-icons/bs";

const Features = () => {
    return (
        <div className="services bckg-dark" id="features">
        <div className="service">
         <FaShoppingCart size={30} style={{ fill: 'white' }}/>
          <h2>Shop</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam quas enim aspernatur ipsam esse, voluptatem dolorem repudiandae neque nam consequatur minima facere dolor reiciendis molestiae autem tenetur illum ab nisi delectus dolore fugit numquam explicabo similique.</p>
        </div>
        <div className="service">
          <BiLaptop size={30} style={{ fill: 'white' }}/>
          <h2>Tech Support</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam quas enim aspernatur ipsam esse, voluptatem dolorem repudiandae neque nam consequatur minima facer</p>
        </div>
        <div className="service">
          <BsFillPeopleFill size={30} style={{ fill: 'white' }}/>
          <h2>Hangouts</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam quas enim aspernatur ipsam esse, voluptatem dolorem repudiandae neque nam consequatur minima facer</p>
        </div>
      </div>
    );
}

export default Features;