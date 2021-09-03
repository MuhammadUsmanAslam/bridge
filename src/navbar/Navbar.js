import React from "react";
import "./Navbar.scss";
import logo from "../assets/logo.png";
import MenuIcon from "@material-ui/icons/Menu";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar__left">
				<div className="navbar__menuicon-container">
					<MenuIcon className="navbar__menuicon" />
				</div>
				<div className="navbar__logo-container">
					<img src={logo} alt="logo" className="navbar__logo" />
				</div>
			</div>
			<div className="navbar__center">
				<ul className="navbar__list-items">
					<li className="navbar__list-item">Home</li>
					<li className="navbar__list-item">About</li>
					<li className="navbar__list-item">Menu</li>
					<li className="navbar__list-item">Reservations</li>
					<li className="navbar__list-item">Contact</li>
				</ul>
			</div>
			<div className="navbar__right">
				<div className="navbar__social-icons">
					<FacebookIcon className="navbar__social-icon" />
					<InstagramIcon className="navbar__social-icon" />
					<TwitterIcon className="navbar__social-icon" />
				</div>
				<button className="navbar__btn">Book a Table</button>
			</div>
		</nav>
	);
}

export default Navbar;
