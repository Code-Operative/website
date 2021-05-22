import React from 'react';
// import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import { projectsList } from '../data/project';
import Project from './../components/Project/Project';

export default function ProjectPage({ data }) {

  return (
    <Layout>
      {projectsList.map((project) => {
        return (
          <Project
            name={project.name}
            description={project.description}
            desktopImageURL={project.desktop_image}
            mobileImageURL={project.mobile_image}
            color={project.color}
          />
        )
      })}
    </Layout>
  )
}