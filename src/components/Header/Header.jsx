import React from 'react';
import { Link } from "gatsby";
import './header.css';

const Header = () => {

	return (
		<div>
			<div className="headerContainer">
				<div> Code-Operative </div>
				<div className="navbar">
					<div className="navbar">
						<Link to="/" className="link"> Home </Link>
					</div>
					<div className="navbar">
						<Link to="/members" className="link"> Member </Link>
					</div>
					<div className="navbar">
						<Link to="/projects" className="link"> Project </Link>
					</div>
					<div className="navbar">
						<Link to="/members" className="link"> Find Us </Link>
					</div>
					<div className="navbar">
						<Link to="/blog" className="link"> Blog </Link>
					</	div>
				</div>
				<div>Join Us</div>
			</div>
		</div>
	);
};

export default Header;