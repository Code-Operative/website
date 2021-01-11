import React from "react";
import TextContainer from "../components/Home/TextContainer";
import Layout from '../components/Layout/layout';
import StatBox from '../components/Home/StatsBox';
import PartnerBox from '../components/Home/Partnerbox';

import { home } from './../data/home';
import { memberlist } from './../data/member'
import { projectsList } from './../data/project'
import hero from './../images/header.png';

export default function Home() {
  // const heroImage = {
  //   width: "100%",
  //   backgroundImage: hero,
  // }
  return (
    <Layout>
      <img src={hero} width="100%" height="633px" />
      <TextContainer
        title={home.about.title}
        content={home.about.content}
      />
      <div className="StatsContainer">
        <StatBox stat={memberlist.length} label="Members" />
        <StatBox stat={projectsList.length} label="Projects" />
        <StatBox stat="£200" label="Day Rate" />
      </div>
      <TextContainer
        title={home.client.title}
        content={home.client.content}
      />
      <div className="StatsContainer">
        <PartnerBox name="CoTech" />
        <PartnerBox name="HappyDev" />
        <PartnerBox name="Gateshead Council" />
      </div>
      <TextContainer
        title={home.values.title}
        content={home.values.content}
      />
    </Layout>
  );
}
