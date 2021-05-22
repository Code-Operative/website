import React from 'react';
import './contact.css';

const ContactBox = () => {
  return (
    <div className="contactBoxContainer">
      <div className="innerContactBoxContainer">
        <div className="ContactBoxContent--Container">
          <div className="ContactBox--title"> Address </div>
          <div className="ContactBox--content"> Baltimore House, </div>
          <div className="ContactBox--content"> Baltic Business Quarters, </div>
          <div className="ContactBox--content"> Abbot's Hill, </div>
          <div className="ContactBox--content"> Gateshead, </div>
          <div className="ContactBox--content">  NE8 3DF </div>

          <div className="ContactBox--title"> Email </div>
          <div className="ContactBox--content">contact@code-operative.co.uk </div>

          <div className="ContactBox--title"> Social Media </div>
          <div className="ContactBox--content">find us on <u>Twitter</u> </div>
          <div className="ContactBox--content"> @code_operative </div>
          <div className="ContactBox--content">find us on <u>Instagram</u> </div>
          <div className="ContactBox--content"> <a href="https://instagram.com/code_operative?igshid=wd0l4brbj7js"> @code_operative </a> </div>

        </div>
      </div>
    </div>
  )
}

export default ContactBox;