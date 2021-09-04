import React from "react";
import "./Test.scss";

function Test({ className }) {
	return (
		<div className={`test ${className}`}>
			<h1>Test</h1>
		</div>
	);
}

export default Test;
