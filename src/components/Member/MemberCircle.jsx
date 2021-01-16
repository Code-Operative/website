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

	return (
		<div >
			{image ? <img className="circleContainer" alt="a member of Code-Operative" src={image.node.publicURL} /> : <img className="circleContainer" alt="a member of Code-Operative" />}
		</div>
	);
};

export default Member;
