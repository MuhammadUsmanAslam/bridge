import React from "react";
import "./Menu.scss";

function Menu() {
	return (
		<div className="menu">
			<ul className="menu__items">
				<li className="menu__item">Home</li>
				<li className="menu__item">About</li>
				<li className="menu__item">Menu</li>
				<li className="menu__item">Reservations</li>
				<li className="menu__item">Contact</li>
			</ul>
		</div>
	);
}

export default Menu;
