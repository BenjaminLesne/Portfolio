import React, { useState } from "react";
import { Link } from "react-router-dom";

const About = ({ lang, langChosen }) => {
	console.log(langChosen);
	const mouseEnterHandler = (e) => {
		if (
			e.target.className != "duoOfWord" &&
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

	return (
		<div className="About">
			<div id="aboutContentWrapper">
				<div className="aboutPresentation">
					<h1>{langChosen.aboutTitle}</h1>
					<div id="description">
						<div className="row">
							{langChosen.aboutDescription
								.split(" ")
								.map((word, index) => {
									return (
										<div
											className="duoOfWord"
											onMouseEnter={mouseEnterHandler}
											key={index}
										>
											<div className="top_word">
												{word}
											</div>
											<div className="bottom_word">
												{word}
											</div>
										</div>
									);
								})}
						</div>
					</div>
				</div>
				<Link to="/Portfolio/Projects">
					<div id="viewProjects">{langChosen.viewProjects}</div>
				</Link>
			</div>
		</div>
	);
};

export default About;
