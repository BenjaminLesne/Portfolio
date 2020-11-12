import React, { useState } from "react";
import ProjectDescription from "./ProjectDescription";
import logo from "../Image/facebook-wow.svg";
import project1Logo from "../Image/facebook-wow.svg";
import project2Logo from "../Image/react.svg";
import portfolioLogo from "../Image/portfolioLogo.svg";

const Portfolio = ({ lang, langChosen }) => {
	const [showClass, setShowClass] = useState("projectDescriptionWrapper");
	const [index, setIndex] = useState(0);
	// object that keep all projects info to display
	const [projects, setProject] = useState([
		{
			img: portfolioLogo,
			name: "My Portfolio",
			technologiesUsed: ["HTML5", "CSS3", "JAVASCRIPT", "REACT.JS"],
			about_EN: (
				<p>
					My goal was to create somehting with an UI as simple as
					possible without any fluff to show quickly what I can do
					with React.
				</p>
			),
			about_FR: (
				<p>
					Mon but était de créer quelque chose avec un UI aussi simple
					que possible pour montrer rapidement ce que je peux faire
					avec React.
				</p>
			),
			demo: "https://benjaminlesne.github.io/Portfolio/",
			code: "https://github.com/BenjaminLesne/Portfolio",
		},

		{
			img: project1Logo,
			name: "ExampleProjectOne",
			technologiesUsed: ["HTML5", "CSS3", "JAVASCRIPT", "REACT.JS"],
			about: (
				<p>
					Atque, ut Tullius ait, ut etiam ferae fame monitae plerumque
					ad eum locum ubi aliquando pastae sunt revertuntur, ita
					homines instar turbinis degressi montibus impeditis et
					arduis loca petivere mari confinia, per quae viis latebrosis
					sese convallibusque occultantes cum appeterent noctes luna
					etiam tum cornuta ideoque nondum solido splendore fulgente
					nauticos observabant quos cum in somnum sentirent effusos
					per ancoralia, quadrupedo gradu repentes seseque suspensis
					passibus iniectantes in scaphas eisdem sensim nihil
					opinantibus adsistebant et incendente aviditate saevitiam ne
					cedentium quidem ulli parcendo obtruncatis omnibus merces
					opimas velut viles nullis repugnantibus avertebant. haecque
					non diu sunt perpetrata.
				</p>
			),
			demo: "",
			code: "",
		},

		{
			img: project2Logo,
			name: "ExampleProjectTwo",
			technologiesUsed: ["HTML5", "CSS3"],
			about: (
				<p>
					Atque, ut Tullius ait, ut etiam ferae fame monitae plerumque
					ad eum locum ubi aliquando pastae sunt revertuntur, ita
					homines instar turbinis degressi montibus impeditis et
					arduis loca petivere mari confinia, per quae viis latebrosis
					sese convallibusque occultantes cum appeterent noctes luna
					etiam tum cornuta ideoque nondum solido splendore fulgente
					nauticos observabant quos cum in somnum sentirent effusos
					per ancoralia, quadrupedo gradu repentes seseque suspensis
					passibus iniectantes in scaphas eisdem sensim nihil
					opinantibus adsistebant et incendente aviditate saevitiam ne
					cedentium quidem ulli parcendo obtruncatis omnibus merces
					opimas velut viles nullis repugnantibus avertebant. haecque
					non diu sunt perpetrata.
				</p>
			),
			demo: "",
			code: "",
		},
	]);
	const Root = document.getElementById("root");
	const App = document.getElementsByClassName("App");
	const body = document.getElementsByTagName("body");
	const menuBtn = document.getElementsByClassName("menu-btn");
	const langChooser = document.querySelector("header #langChooser");
	// menuBtn est null
	const clickHandler = (e) => {
		setIndex(e);
		setShowClass("projectDescriptionWrapper show");

		App[0].style.width = App[0].offsetWidth + "px";
		body[0].style.overflowY = "hidden";
		menuBtn[0].style.right = Root.offsetWidth - App[0].offsetWidth + "px";
		menuBtn[0].style.transition = "0s";
		document.querySelector("header #langChooser").style.right =
			Root.offsetWidth - App[0].offsetWidth + 100 + "px";
	};

	return (
		<div id="Portfolio">
			<div id="portfolioPresentation" className="translateFromTop">
				<h2>PORTFOLIO</h2>
				<p>{langChosen.portfolioDescription}</p>
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

										<span>{langChosen.viewProjects}</span>
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
				lang={lang}
				langChosen={langChosen}
			/>{" "}
		</div>
	);
};

export default Portfolio;
