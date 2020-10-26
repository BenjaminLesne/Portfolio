import React, { useState } from "react";
import ProjectDescription from "./ProjectDescription";

const Portfolio = () => {
	const [showClass, setShowClass] = useState("projectDescriptionWrapper");

	const clickHandler = () => {
		setShowClass("projectDescriptionWrapper show");
	};

	return (
		<div id="Portfolio">
			<div id="portfolioPresentation">
				<h2>PORTFOLIO</h2>
				<p>
					// These are my favorite projects I've worked on for the
					past year. Have a look around and make sure to hit me up!
				</p>
			</div>
			<div id="projectsSection">
				<div id="projectPoshtel" className="projects">
					<div className="projectBackground">
						<div id="portfolioSvgWrapper">
							<button
								onClick={clickHandler}
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
				<div id="projectPortfolio" className="projects">
					<div className="projectBackground">
						<div id="portfolioSvgWrapper">
							<button
								className="portfolioSvg"
								onClick={clickHandler}
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
			</div>

			<ProjectDescription
				showClass={showClass}
				setShowClass={setShowClass}
			/>
		</div>
	);
};

export default Portfolio;
