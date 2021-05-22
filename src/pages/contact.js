import React, { useState } from 'react';
import Layout from '../components/Layout/layout';
import hero from './../images/header.png';
import ContactBox from '../components/Contact/ContactBox';
import ContactButton from '../components/Contact/ContactButton';
import FAQ from '../components/Contact/FAQ';
import { FAQs } from '../data/FAQ';

export default function Contact() {
  const [showFAQ, setShowFAQ] = useState(false);

  const ToggleFAQ = (initialValue = false) => {
    console.log('clicked');
    setShowFAQ(v => !v)
  }

  console.log(showFAQ);
  return (
    <Layout>
      <div className="contactContainer">
        <img src={hero} className="contact_map" />
        <ContactBox />
      </div>
      {showFAQ == true && <FAQ content={FAQs} />}
      <div className="contactButtonContainer">
        <ContactButton
          text="Request a call"
        />
        <ContactButton
          url="https://www.calendly.com/code-operative"
          text="Request a Workshop"
        />
        <ContactButton
          text="FAQ's"
          toggleFAQ={ToggleFAQ}
        />
      </div>
    </Layout>
  )
}



