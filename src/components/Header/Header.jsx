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
							<div className="mobile_menu--text">Home</div>
						</div>
					</div>
					<div className="mobile_menu--section">
						<div className="mobile_menu--content">
							<img src={work} />
							<div className="mobile_menu--text"> Work </div>
						</div>
					</div>
					<div className="mobile_menu--section">
						<div className="mobile_menu--content">
							<img src={member} />
							<div className="mobile_menu--text"> Members </div>
						</div>
					</div>
					<div className="mobile_menu--section">
						<div className="mobile_menu--content">
							<img src={contact} />
							<div className="mobile_menu--text"> Contact </div>
						</div>
					</div>
					<div className="mobile_menu--section">
						<div className="mobile_menu--content">
							<img src={blog} />
							<div className="mobile_menu--text"> Blog </div>
						</div>
					</div>
					<div className="mobile_menu--section">
						<div className="mobile_menu--content">
							<img src={join} />
							<div className="mobile_menu--text"> Join Us </div>
						</div>
					</div>
				</div>
			}
		</div>
	);
};

export default Header;