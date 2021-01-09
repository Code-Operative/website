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
            imageURL={project.image}
          />
        )
      })}
    </Layout>
  )
}