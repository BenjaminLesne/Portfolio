import React, { useState } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import unitedKingdom from "../Image/unitedKingdom.svg";
import France from "../Image/France.svg";

const Header = ({ lang, setLangChosen, langChosen }) => {
	const mouseEnterHandler = (e) => {
		if (
			e.target.parentElement.children[0].className !==
				"top_word translateY" &&
			e.target.parentElement.children[1].className !=
				"bottom_word translateY"
		) {
			e.target.parentElement.children[0].className =
				"top_word translateY";
			e.target.parentElement.children[1].className =
				"bottom_word translateY";
			setTimeout(() => {
				e.target.parentElement.children[0].className = "top_word";
				e.target.parentElement.children[1].className = "bottom_word";
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

	const handleLang = (e) => {
		const langChooserBtn = document.getElementById("langChooserBtn");

		if (langChooserBtn.classList == "") {
			langChooserBtn.classList = "active";
			setLangChosen(lang.FR);
		} else {
			langChooserBtn.classList = "";
			setLangChosen(lang.EN);
		}
	};

	return (
		<header>
			<Menu
				menuHeight={menuHeight}
				setMenuHeight={setMenuHeight}
				setClassName={setClassName}
				handleClick={handleClick}
				lang={lang}
				langChosen={langChosen}
			/>
			<Link to="/Portfolio">
				<div className="row">
					<div className="duoOfWord" onMouseEnter={mouseEnterHandler}>
						<div className="top_word">BENJAMIN</div>
						<div className="bottom_word">LESNE</div>
					</div>
				</div>
			</Link>
			<div id="langChooser">
				<img src={unitedKingdom} alt="UK flag / Drapeau anglais" />
				<div id="langChooserBtn" className="" onClick={handleLang}>
					<div id="inner-circle"></div>
				</div>
				<img src={France} alt="French flag / Drapeau français" />
			</div>

			<div className={className} onClick={handleClick}>
				<div className="menu-btn_burger"></div>
			</div>
		</header>
	);
};

export default Header;
