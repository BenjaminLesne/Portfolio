import React, { useState } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Header = () => {
	const mouseEnterHandler = (e) => {
		if (e.target.parentElement.className !== "duoOfWord translateY") {
			e.target.parentElement.className = "duoOfWord translateY";
			setTimeout(() => {
				e.target.parentElement.className = "duoOfWord";
			}, 2200);
		}
	};

	const [className, setClassName] = useState("menu-btn");
	const [menuHeight, setMenuHeight] = useState(0);

	const handleClick = () => {
		if (className === "menu-btn") {
			setClassName("menu-btn open");
			setMenuHeight(100);
		} else {
			setClassName("menu-btn");
			setMenuHeight(0);
		}
	};

	return (
		<header>
			<Menu
				menuHeight={menuHeight}
				setMenuHeight={setMenuHeight}
				setClassName={setClassName}
				handleClick={handleClick}
			/>
			<Link to="/">
				<div className="row">
					<div className="duoOfWord" onMouseEnter={mouseEnterHandler}>
						<div className="top_word">BENJAMIN</div>
						<div className="bottom_word">LESNE</div>
					</div>
				</div>
			</Link>
			<div className={className} onClick={handleClick}>
				<div className="menu-btn_burger"></div>
			</div>
		</header>
	);
};

export default Header;
