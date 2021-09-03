import React from 'react';
import img1 from '../../images/cont1.jpg';
import img2 from '../../images/cont2.jpg';

const Contacts = () => {
    
    return (
        <div className="contacts" >
        <div className="cont-img">
          <img src={img1} alt="phone"/>
        </div>
        <form action="" id="my-form">
          <div className="form-controling">
            <label for="name">Name and surname</label>
            <input type="text" placeholder="Name and surname" id="name"/>
          </div>
          <div className="form-controling">
            <label for="email">Email</label>
            <input type="email" placeholder="Email" id="email"/>
          </div>
          <div className="form-controling">
            <label for="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
          </div>
          <button type="submit" className="btn bckg-light" id="submit">Submit</button>
        </form>
        <div className="cont-img">
          <img src={img2} alt="email"/>
        </div>
      </div>
    )
}

export default Contacts;