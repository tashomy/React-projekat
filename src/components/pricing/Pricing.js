import React from 'react';
import {BiEuro} from 'react-icons/bi';
import { BiDollar } from 'react-icons/bi';
import { BiCreditCard } from 'react-icons/bi';
import {FaPercent} from 'react-icons/fa';
import {HiArrowNarrowRight} from 'react-icons/hi';
import {BsArrowLeftRight} from 'react-icons/bs';

const Pricing = () => {
    return (
        <div className="pricing" id="pricing">
        <h2 className="main-heading dark-font">Our Goal Is To Save You Some Money</h2>
        <div className="pricing-items">
          <div className="pricing-item" id="pricing-item-1">
            <BiDollar size={30} style={{ fill: 'white' }}/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis debitis iure nostrum, blanditiis alias sapiente nam eos earum, impedit ea commodi amet, fuga sequi autem?</p>
          </div>
          <div className="pricing-item" id="pricing-item-2">
            <BiEuro size={30} style={{ fill: 'black' }}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quasi nulla esse! Corporis voluptatibus molestias odit id tempore cumque eligendi. Corporis, explicabo adipisci!</p>
          </div>
          <div className="pricing-item" id="pricing-item-3">
            <BiCreditCard size={30} style={{ fill: 'white' }}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consequatur voluptatem enim similique temporibus. Sequi laboriosam praesentium totam minus eligendi!</p>
          </div>
        </div>
        <div className="pricing-items">
          <div className="pricing-item" id="pricing-item-4">
            <FaPercent size={20} style={{ fill: 'black' }}/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis debitis iure nostrum, blanditiis alias sapiente nam eos earum, impedit ea commodi amet, fuga sequi autem?</p>
          </div>
          <div className="pricing-item" id="pricing-item-5">
            <HiArrowNarrowRight size={30} style={{ fill: 'white' }}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quasi nulla esse! Corporis voluptatibus molestias odit id tempore cumque eligendi. Corporis, explicabo adipisci!</p>
          </div>
          <div className="pricing-item" id="pricing-item-6">
            <BsArrowLeftRight size={30} style={{ fill: 'black' }}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consequatur voluptatem enim similique temporibus. Sequi laboriosam praesentium totam minus eligendi!</p>
          </div>
        </div>
        
      </div>
    );
}

export default Pricing;