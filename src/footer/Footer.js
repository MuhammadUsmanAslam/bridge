import React from "react";
import "./Footer.scss";
import logo from "../assets/logo.png";
import Social from "../utils/Social";
import Menu from "../utils/Menu";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DialpadIcon from "@material-ui/icons/Dialpad";

function footer() {
	return (
		<div className="footer">
			{/* <div className="footer__inner"> */}
			<div className="footer__section">
				{/* <h1>Section title</h1> */}
				<img src={logo} alt="logo" className="navbar__logo" />
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae aliquid
					tempore.
					<br />
					<br />
					<WatchLaterIcon className="footer__icon" />
					Mon-Sun:09am - 09pm
					<br />
					<LocationOnIcon className="footer__icon" />
					1161 Linden Avenue, London
					<br />
					<DialpadIcon className="footer__icon" />
					301-382-4311,301-461-9671
				</p>
			</div>
			<div className="footer__section">
				<h1>Pages</h1>
				<Menu className="footer__menu" />
			</div>
			<div className="footer__section">
				<h1>Opening Hours</h1>
				<p>
					Monday-Friday:
					<br />
					10:00am-11:00am
					<br />
					<br />
					Monday-Friday:
					<br />
					10:00am-11:00am
				</p>
			</div>
			<div className="footer__section">
				<h1>Follow Us</h1>
				<Social className="footer__social" />
				{/* <p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
						aliquid tempore nesciunt suscipit aliquam? Laudantium ex culpa
						tempora, neque magnam ipsa consequuntur fugit, suscipit nulla,
						incidunt provident deleniti? Molestias, adipisci.
					</p> */}
			</div>
			{/* </div> */}
		</div>
	);
}

export default footer;
