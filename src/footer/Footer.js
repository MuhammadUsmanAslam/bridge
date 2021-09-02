import React from "react";
import "./Footer.scss";
import logo from "../assets/logo.png";

function footer() {
	return (
		<div className="footer">
			<div className="footer__inner">
				<div className="footer__address">
					{/* <h1>Section title</h1> */}
					<img src={logo} alt="logo" className="navbar__logo" />
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
						aliquid tempore nesciunt suscipit aliquam.
					</p>
				</div>
				<div className="footer__pages">
					<h1>Pages</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
						aliquid tempore nesciunt suscipit aliquam? Laudantium ex culpa
						tempora, neque magnam ipsa consequuntur fugit, suscipit nulla,
						incidunt provident deleniti? Molestias, adipisci.
					</p>
				</div>
				<div className="footer__timing">
					<h1>Opening Hours</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
						aliquid tempore nesciunt suscipit aliquam? Laudantium ex culpa
						tempora, neque magnam ipsa consequuntur fugit, suscipit nulla,
						incidunt provident deleniti? Molestias, adipisci.
					</p>
				</div>
				<div className="footer__social">
					<h1>Follow Us</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
						aliquid tempore nesciunt suscipit aliquam? Laudantium ex culpa
						tempora, neque magnam ipsa consequuntur fugit, suscipit nulla,
						incidunt provident deleniti? Molestias, adipisci.
					</p>
				</div>
			</div>
		</div>
	);
}

export default footer;
