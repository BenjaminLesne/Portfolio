import React from "react";
import { Link } from "react-router-dom";

const About = () => {
	const mouseEnterHandler = (e) => {
		if (e.target.parentElement.className !== "duoOfWord translateY") {
			e.target.parentElement.className = "duoOfWord translateY";
			setTimeout(() => {
				e.target.parentElement.className = "duoOfWord";
			}, 2200);
		}
	};
	// faire un array pour les phrases et un map pour les pondre
	return (
		<div className="About">
			<div id="aboutContentWrapper">
				<div className="aboutPresentation">
					<h1>YO, IT'S BEN</h1>
					<div id="description">
						<div className="row">
							<div
								className="duoOfWord"
								onMouseEnter={mouseEnterHandler}
							>
								<div className="top_word">I'M</div>
								<div className="bottom_word">I'M</div>
							</div>{" "}
							<div
								className="duoOfWord"
								onMouseEnter={mouseEnterHandler}
							>
								<div className="top_word">A</div>
								<div className="bottom_word">A</div>
							</div>{" "}
							<div
								className="duoOfWord"
								onMouseEnter={mouseEnterHandler}
							>
								<div className="top_word">FRONT</div>
								<div className="bottom_word">FRONT</div>
							</div>
							<div
								className="duoOfWord"
								onMouseEnter={mouseEnterHandler}
							>
								<div className="top_word">-</div>
								<div className="bottom_word">-</div>
							</div>
							<div
								className="duoOfWord"
								onMouseEnter={mouseEnterHandler}
							>
								<div className="top_word">WEB</div>
								<div className="bottom_word">WEB</div>
							</div>
							<div
								className="duoOfWord"
								onMouseEnter={mouseEnterHandler}
							>
								<div className="top_word">DEVELOPER</div>
								<div className="bottom_word">DEVELOPER</div>
							</div>{" "}
							<div
								className="duoOfWord"
								onMouseEnter={mouseEnterHandler}
							>
								<div className="top_word">CURRENTLY</div>
								<div className="bottom_word">CURRENTLY</div>
							</div>{" "}
							<div
								className="duoOfWord"
								onMouseEnter={mouseEnterHandler}
							>
								<div className="top_word">BASED</div>
								<div className="bottom_word">BASED</div>
							</div>{" "}
							<div
								className="duoOfWord"
								onMouseEnter={mouseEnterHandler}
							>
								<div className="top_word">IN</div>
								<div className="bottom_word">IN</div>
							</div>{" "}
							<div
								className="duoOfWord"
								onMouseEnter={mouseEnterHandler}
							>
								<div className="top_word">PARIS</div>
								<div className="bottom_word">PARIS</div>
							</div>
						</div>
						<div className="row">
							<div
								className="duoOfWord"
								onMouseEnter={mouseEnterHandler}
							>
								<div className="top_word">HIT</div>
								<div className="bottom_word">HIT</div>
							</div>
							<div
								className="duoOfWord"
								onMouseEnter={mouseEnterHandler}
							>
								<div className="top_word">ME</div>
								<div className="bottom_word">ME</div>
							</div>
							<div
								className="duoOfWord"
								onMouseEnter={mouseEnterHandler}
							>
								<div className="top_word">UP</div>
								<div className="bottom_word">UP</div>
							</div>
							<div
								className="duoOfWord"
								onMouseEnter={mouseEnterHandler}
							>
								<div className="top_word">AND</div>
								<div className="bottom_word">AND</div>
							</div>
							<div
								className="duoOfWord"
								onMouseEnter={mouseEnterHandler}
							>
								<div className="top_word">LET'S</div>
								<div className="bottom_word">LET'S</div>
							</div>
							<div
								className="duoOfWord"
								onMouseEnter={mouseEnterHandler}
							>
								<div className="top_word">CREATE</div>
								<div className="bottom_word">CREATE</div>
							</div>
							<div
								className="duoOfWord"
								onMouseEnter={mouseEnterHandler}
							>
								<div className="top_word">SOMETHING</div>
								<div className="bottom_word">SOMETHING</div>
							</div>
							<div
								className="duoOfWord"
								onMouseEnter={mouseEnterHandler}
							>
								<div className="top_word">SPECIAL</div>
								<div className="bottom_word">SPECIAL</div>
							</div>
						</div>
					</div>
				</div>
				<Link to="/Portfolio/Projects">
					<div id="viewProjects">VIEW PROJECTS</div>
				</Link>
			</div>
		</div>
	);
};

export default About;
