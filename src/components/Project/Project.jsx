import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Carousel from './carousel';

export default function Project(props) {

  const { desktopImageURL, mobileImageURL, name, description, color } = props;

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

  const desktopImage = data.allFile.edges.find(n => n.node.publicURL.includes(desktopImageURL));
  const mobileImage = data.allFile.edges.find(n => n.node.publicURL.includes(mobileImageURL));
  // inline styling is used to prevent desktop image to render in mobile (https://medium.com/better-programming/css-how-css-display-none-affects-images-on-page-load-dbdf1aaea820)
  // if (image !== undefined) {
  // console.log(mobileImage);
  const projectComponentStyleDesktop = {
    // width: "100%",
    height: "100px",
    backgroundImage: 'url(' + mobileImage.node.publicURL + ')',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat'
  };
  const projectComponentStyleMobile = {
    // width: "100%",
    height: "100px",
    backgroundImage: 'url(' + mobileImage.node.publicURL + ')',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat'
  };
  // } else {
  //   const projectComponentStyle = {
  //     width: "100%",
  //     height: "400px",
  //   };
  // }

  return (
    <React.Fragment>
      <div className="project__mobile">
        {mobileImage && <div style={projectComponentStyleMobile}>{name}</div>}
        {/* {mobileImage && <img src={mobileImage.node.publicURL} className="image__project--mobile" alt="A code-operative project" />} */}
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
      </div>
      <div className="project__desktop">
        <Carousel>
          {desktopImage && <div style={projectComponentStyleDesktop}>{name}</div>}
          {/* {desktopImage && <img src={desktopImage.node.publicURL} className="image__project--desktop" alt="A code-operative project" />} */}
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
      </div>
    </React.Fragment>

  )
};