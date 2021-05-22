import React from 'react';
import Layout from '../components/Layout/layout'
import JoinForm from '../components/Join/JoinForm';

export default function Join() {
  return (
    <Layout>
      <div className="joinContainer">
        <div className="joinTitle"> Join Us </div>
        <JoinForm />
      </div>
    </Layout>
  )
}