import React from 'react';
import './member.css';

import { useStaticQuery, graphql } from 'gatsby';

const Member = (prop) => {
	const { imageURL } = prop;

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

	//ToDo: error trapping when image is undefined 

	return (
		<div >
			<img className="circleContainer" src={image.node.publicURL} />
		</div>
	);
};

export default Member;
