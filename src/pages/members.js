import React from 'react';
import Layout from '../components/Layout/layout';
import Header from '../components/Header/header';
import Member from './../components/MemberCircle/MemberCircle';
import style from './../style/members.module.css';
import { memberlist } from '../data/member';

export default function MemberPage() {
	return (
		<Layout>
			<div className={style.membersContainer}>
				<h1>{memberlist.name}</h1>
				{memberlist.map((member) => {
					return (
						// <h1>hello</h1>
						// <div>{member.name}</div>
						<Member name={member.name} />
					)
				})}
			</div>
		</Layout>
	);
};