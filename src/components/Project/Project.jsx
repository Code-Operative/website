import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Carousel from './carousel';

export default function Project(props) {

  const { imageURL, name, description, color } = props;

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
  console.log(image);
  // if (image == undefined) {
  // const projectComponentStyle = {
  //   width: "100%",
  //   height: "400px",
  //   backgroundImage: 'url(' + image.node.publicURL + ')'
  // };
  // } else {
  //   const projectComponentStyle = {
  //     width: "100%",
  //     height: "400px",
  //   };
  // }

  return (
    <React.Fragment>
      {/* <div style={projectComponentStyle}>{name}</div>
      {image ? <img alt="A code-operative project" src={image.node.publicURL} /> : <img alt="A code-operative project" />} */}
      <Carousel>
        {image && <img src={image.node.publicURL} alt="A code-operative project" />}
        <div className="projectDescriptonContainer" style={{ backgroundColor: color }}>
          <div className="projectDescriptonContainer_wrapper">
            <div className="projectDescriptonTitle">{name}</div>
            {description.map((paragraph) => {
              return (
                <div className="projectDescripton">{paragraph}</div>
              )
            })}
          </div>
        </div>
      </Carousel>
    </React.Fragment>

  )
};