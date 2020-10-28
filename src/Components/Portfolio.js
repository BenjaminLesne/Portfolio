import React, { useState } from "react";
import ProjectDescription from "./ProjectDescription";
import logo from "../Image/facebook-wow.svg";
import project1Logo from "../Image/facebook-wow.svg";
import project2Logo from "../Image/react.svg";
import portfolioLogo from "../Image/portfolioLogo.svg";

const Portfolio = () => {
	const [showClass, setShowClass] = useState("projectDescriptionWrapper");
	const [index, setIndex] = useState(0);
	// object that keep all projects info to display
	const [projects, setProject] = useState([
		{
			img: project1Logo,
			name: "ExampleProjectOne",
			technologiesUsed: ["HTML5", "CSS3", "JAVASCRIPT", "REACT.JS"],
			about: (
				<p>
					For this project I worked with things like Authentication
					with OAuth2, PayPal API, Database Design, UI & UX, and I
					used Vue and Vuex to make the project a Single Page
					Application.
					<br /> Victor fromAdventure Cord approached me to develop a
					website for his Discord bot where users can log in with
					their Discord accounts and view their profile stats, view
					other users's stats, read news and updates for the bot
					directly from the team and purchase products to use within
					the bot. Since I had a lot of time to build the project and
					wanted to learn as much as possible, I decided to build
					everything from scratch.
				</p>
			),
			demo: "",
			code: "",
		},

		{
			img: project2Logo,
			name: "ExampleProjectTwo",
			technologiesUsed: ["HTML5", "CSS3", "JAVASCRIPT", "REACT.JS"],
			about: <p>I have no idea what I'm doing</p>,
			demo: "",
			code: "",
		},
		{
			img: project2Logo,
			name: "ExampleProjectTwo",
			technologiesUsed: ["HTML5", "CSS3", "JAVASCRIPT", "REACT.JS"],
			about: <p>I have no idea what I'm doing</p>,
			demo: "",
			code: "",
		},
	]);
	const Root = document.getElementById("root");
	const App = document.getElementsByClassName("App");
	const body = document.getElementsByTagName("body");
	const menuBtn = document.getElementsByClassName("menu-btn");
	// menuBtn est null
	const clickHandler = (e) => {
		setIndex(e);
		setShowClass("projectDescriptionWrapper show");

		App[0].style.width = App[0].offsetWidth + "px";
		body[0].style.overflowY = "hidden";
		menuBtn[0].style.right = Root.offsetWidth - App[0].offsetWidth + "px";
		menuBtn[0].style.transition = "0s";
	};

	return (
		<div id="Portfolio">
			<div id="portfolioPresentation" className="translateFromTop">
				<h2>PORTFOLIO</h2>
				<p>
					// These are my favorite projects I've worked on for the
					past year. Have a look around and make sure to hit me up!
				</p>
			</div>
			<div id="projectsSection">
				{projects.map((projet, index) => {
					return (
						<div
							// fonctiion un coup sur deux animatino left/animation right
							className={
								index % 2 !== 0
									? "projects translateFromLeft"
									: index + 1 == projects.length
									? "projects translateFromBottom"
									: "projects translateFromRight"
							}
							style={{ backgroundImage: `url(${projet.img})` }}
							key={index}
						>
							<div className="projectBackground">
								<div className="portfolioSvgWrapper">
									<button
										// the index of the project to display as parameter
										onClick={() => clickHandler(index)}
										className="portfolioSvg"
									>
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fas"
											data-icon="eye"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512"
											className="svg-inline--fa fa-eye fa-w-18"
										>
											<path
												fill="currentColor"
												d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
												className=""
											></path>
										</svg>

										<span>VIEW PROJECT</span>
									</button>
								</div>
							</div>
						</div>
					);
				})}
				;
			</div>{" "}
			<ProjectDescription
				showClass={showClass}
				setShowClass={setShowClass}
				projects={projects}
				index={index}
			/>{" "}
		</div>
	);
};

export default Portfolio;
