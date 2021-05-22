import React, { useState } from 'react';
import { Link } from "gatsby";
import './header.css';
import home from './../../images/HomeIcon.png';
import blog from './../../images/BlogIcon.png';
import contact from './../../images/ContactIcon.png';
import join from './../../images/Joinus.png';
import member from './../../images/Member-icon.png';
import work from './../../images/Portfolio-icon.png';


const Header = () => {

	const [mobileMenu, setMobileMenu] = useState(false);

	const toggleMobileMenu = (initialValue = false) => {
		setMobileMenu(v => !v)
	}

	return (
		<div>
			<div className="headerContainer">
				<div className="navbar_left">
					<div>Code-Operative </div>
					<div onClick={toggleMobileMenu} className="mobile_menu"> Menu </div>
				</div>
				<div className="navbar">
					<div className="navbar">
						<Link to="/" className="link" > Home </Link>
					</div>
					<div className="navbar">
						<Link to="/members" className="link"> Member </Link>
					</div>
					<div className="navbar">
						<Link to="/projects" className="link"> Project </Link>
					</div>
					<div className="navbar">
						<Link to="/contact" className="link"> Contact </Link>
					</div>
					<div className="navbar">
						<Link to="/blog" className="link"> Blog </Link>
					</	div>
				</div>
				<div className="">
					<Link to="/join" className="link">Join Us </Link>
				</div>
			</div>
			{ mobileMenu == 1 &&
				<div className="mobile_menu--container">
					<div className="mobile_menu--section">
						<div className="mobile_menu--content">
							<img src={home} />
							<Link to="/" className="mobile_menu--text"> Home</Link>
						</div>
					</div>
					<div className="mobile_menu--section">
						<div className="mobile_menu--content">
							<img src={work} />
							<Link to="/projects" className="mobile_menu--text"> Work </Link>
						</div>
					</div>
					<div className="mobile_menu--section">
						<div className="mobile_menu--content">
							<img src={member} />
							<Link to="/members" className="mobile_menu--text"> Members </Link>
						</div>
					</div>
					<div className="mobile_menu--section">
						<div className="mobile_menu--content">
							<img src={contact} />
							<Link to="/contact" className="mobile_menu--text"> Contact </Link>
						</div>
					</div>
					<div className="mobile_menu--section">
						<div className="mobile_menu--content">
							<img src={blog} />
							<Link to="/blog" className="mobile_menu--text"> Blog </Link>
						</div>
					</div>
					<div className="mobile_menu--section">
						<div className="mobile_menu--content">
							<img src={join} />
							<Link to="/join" className="mobile_menu--text"> Join Us </Link>
						</div>
					</div>
				</div>
			}
			<div className="header_empty"></div>
		</div>
	);
};

export default Header;