import React from "react";
import "./Menu.scss";

function Menu({ className }) {
	return (
		<div className={`menu menu--display `}>
			<ul className={`menu__items ${className}`}>
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
