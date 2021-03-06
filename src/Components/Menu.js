import React from "react";
import { Link } from "react-router-dom";

const Menu = ({
	menuHeight,
	setMenuHeight,
	handleClick,
	setClassName,
	lang,
	langChosen,
}) => {
	return (
		<div className="menu" style={{ height: menuHeight + "vh" }}>
			<ul>
				<li onClick={handleClick}>
					<div></div>
					<Link to="/Portfolio">{langChosen.headerMenuTopLine}</Link>
				</li>
				<li onClick={handleClick}>
					<div></div>
					<Link to="/Portfolio/Projects">PORTFOLIO</Link>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
