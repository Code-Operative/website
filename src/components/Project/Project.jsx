import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function Project(props) {

  const { imageURL, name } = props;

  const data = useStaticQuery(graphql`
    {
      allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        edges {
          node {
          id
          publicURL
          sourceInstanceName
          }
        }
      }
    }
  `)

  const image = data.allFile.edges.find(n => n.node.publicURL.includes(imageURL));

  // if (image == undefined) {
  const projectComponentStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: 'url(' + image.node.publicURL + ')'
  };
  // } else {
  //   const projectComponentStyle = {
  //     width: "100%",
  //     height: "400px",
  //   };
  // }

  return (
    <React.Fragment>
      <div style={projectComponentStyle}>{name}</div>
      {image ? <img alt="A code-operative project" src={image.node.publicURL} /> : <img alt="A code-operative project" />}
    </React.Fragment>

  )
};