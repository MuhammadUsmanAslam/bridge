import React from "react";
import "./Social.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

function Social() {
	return (
		<div className="social">
			<FacebookIcon className="social__icon" />
			<InstagramIcon className="social__icon" />
			<TwitterIcon className="social__icon" />
		</div>
	);
}

export default Social;
