import React from 'react';
import { graphql } from 'gatsby';
import { projectsList } from '../data/project';
import Project from './../components/Project/Project';

export default function ProjectPage({ data }) {
  const image = data.allFile.edges.find(n => n.node.publicURL.includes('header'));

  var projectComponentStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: 'url(' + image.node.publicURL + ')'
  };

  return (
    projectsList.map((project) => {
      return (
        <div style={projectComponentStyle}>
          {

            <div>{project.name}</div>
            // <Project
            //   name={project.name}
            // />

          }
        </div>
      )
    })
  )
}

export const query = graphql`
  query MyQuery {
    allFile {
      edges {
        node {
          publicURL
          name
          sourceInstanceName
        }
      }
    }
  }
  `