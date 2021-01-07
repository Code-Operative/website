import React from 'react';
import { Link } from "gatsby";
import style from './../../style/components/header.module.css';

const Header = () => {

	return (
		<div>
			<div className={style.headerContainer}>
				<div> Code-Operative </div>
				<div className={style.navbar}>
					<div className={style.navbar}>
						<Link to="/" className={style.link}> Home </Link>
					</div>
					<div className={style.navbar}>
						<Link to="/members" className={style.link}> Member </Link>
					</div>
					<div className={style.navbar}>
						<Link to="/projects" className={style.link}> Project </Link>
					</div>
					<div className={style.navbar}>
						<Link to="/members" className={style.link}> Find Us </Link>
					</div>
					<div className={style.navbar}>
						<Link to="/members" className={style.link}> Blog </Link>
					</	div>
				</div>
				<div>Join Us</div>
			</div>
		</div>
	);
};

export default Header;