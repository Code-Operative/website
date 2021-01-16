import React from 'react';
import Layout from '../components/Layout/layout';
import hero from './../images/header.png';
import ContactBox from '../components/Contact/ContactBox';
import ContactButton from '../components/Contact/ContactButton';

export default function contact() {
  return (
    <Layout>
      <div className="contactContainer">
        <img src={hero} width="621px" height="552px" />
        <ContactBox />
      </div>
      <div className="contactButtonContainer">
        <ContactButton
          text="Request a call"
        />
        <ContactButton
          text="Request a Workshop"
        />
        <ContactButton
          text="FAQ's"
        />
      </div>
    </Layout>
  )
}



