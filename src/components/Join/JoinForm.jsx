import React from 'react';
import './join.css';

const JoinForm = () => {
  return (
    <form className="joinform">
      <input className="joinInput" placeholder="Name"></input>
      <input className="joinInput" placeholder="Email"></input>
      <input className="joinInput" placeholder="Email"></input>
      <input className="joinInput" placeholder="Email"></input>
      <input type="submit" className="joinSend" value="Send" />
    </form>
  )
}

export default JoinForm;
