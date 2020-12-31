import React from 'react';
import Header from './../components/Header/Header';
import Member from './../components/MemberCircle/MemberCircle';
import style from './../style/members.module.css';

export default function MemberPage() {
	return (
		<div>
			<Header />
			<div className={style.membersContainer}>
				<Member />
				<Member />
			</div>
		</div>
	);
};