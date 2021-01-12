import React from 'react';
import Layout from '../components/Layout/layout';
import Header from '../components/Header/header';
import MemberCircle from '../components/Member/MemberCircle';
import MemberText from '../components/Member/MemberText';
import { memberlist } from '../data/member';

export default function MemberPage() {

	return (
		<Layout>
			<div className="memberOuterContainer">
				<div className="membersContainer">
					<h1>{memberlist.name}</h1>


					{memberlist.map((member) => ({ sort: Math.random(), value: member }))
						.sort((member, b) => member.sort - b.sort)
						.map((member) => {
							return (
								<div>
									<MemberCircle imageURL={member.value.image} />
									<MemberText
										title={member.value.title}
										description={member.value.description}
									/>
								</div>
							)
						})}
				</div>
				<div className="memberGuideButton">Members Guide</div>
			</div>
		</Layout>
	);
};