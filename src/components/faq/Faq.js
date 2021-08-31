import React from 'react';

const Faq = (props) => {

    let partOne = document.querySelector(".faq-part-1");
    let partTwo = document.querySelector(".faq-part-2");
    let partThree = document.querySelector(".faq-part-3");
    let partFour = document.querySelector(".faq-part-4");

    console.log(props);
    let faqItems = Object.values(props);
    console.log(faqItems);
    
    return (
        <div className="faq" id="faq">
        
        <div className="faq-choice">
          <button id="delivery">Delivery</button>
          <button id="return">Return policy</button>
          <button id="where">Where to find us</button>
          <button id="tech">Tech support</button>
        </div>
        <div className="faq-part-1">
        <div className="faq-items">
            <h2>Delivery</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quis incidunt modi reprehenderit qui possimus aspernatur doloremque labore excepturi assumenda.</p>
            
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum aut facilis quis odio aperiam. Earum, est soluta?
            </p>
          </div>
          <div className="faq-items">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ab voluptatum natus autem similique sint praesentium error cupiditate sed dolorum dolorem doloribus voluptas, qui dolor accusamus assumenda labore voluptate tempora perspiciatis quibusdam delectus animi asperiores fugit! Quod unde debitis ad at eius excepturi delectus iusto earum tempore nesciunt ratione veritatis aperiam nostrum necessitatibus, beatae officiis alias pariatur facere, suscipit exercitationem, voluptate iste asperiores vel mollitia! Deserunt optio iste provident minima debitis!</p>
            
          </div>
        </div>
        
      </div>
    );
}

export default Faq;