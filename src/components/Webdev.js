import React, { Component } from "react";

class Webdev extends Component {
	static proptypes = {};

	render() {
		return (
			<section id="webPage">
				<h1>Web Development</h1>
				<p>
					I am a web developer from San Jose, CA. I am a self-taught
					developer focused on Javascript with the MERN stack. I enjoy
					working on interactive and media-heavy sites as well as
					single page apps with React. My portfolio is below with
					short descriptions for each project along with some of the
					specific tech used. Live links as well as links to the
					github source for each portfolio project are provided. My
					email and links to my LinkedIn and Github profiles are at
					the top of the page. Thanks for stopping by to look at my
					work!
				</p>
				<div id="webProjects">
					<h1>My projects</h1>
					<ul>
						<li>
							<h2>SRL Bets</h2>
							<a href="https://srlbets.com">
								<img
									src="./img/srl.png"
									alt="srl bets list project"
								/>
							</a>
							<p>
								SRLBets is a web app that allows twitch users to
								bet on the winner of races hosted by
								SpeedRunsLive. SRLBets extends the SpeedRunsLive
								API to allow for tracking extra race statistics
								and further integration with twitch user
								profiles.
							</p>
							<button>
								<a href="https://srlbets.com">Live Site</a>
							</button>
							<button>
								<a href="https://github.com/mattackard/SRLbets">
									Source Code
								</a>
							</button>
						</li>
						<li>
							<h2>React To-do List</h2>
							<a href="https://mattackard.github.io/todoList">
								<img
									src="./img/todo.png"
									alt="to-do list project"
								/>
							</a>
							<p>
								A to-do list created in React with tags,
								filtering, and deadline support
							</p>
							<button>
								<a href="https://mattackard.github.io/todoList">
									Live Site
								</a>
							</button>
							<button>
								<a href="https://github.com/mattackard/todoList">
									Source Code
								</a>
							</button>
						</li>
					</ul>
				</div>
				<img
					className="backgroundImage"
					src="./img/webBG.jpg"
					alt="page background"
				/>
			</section>
		);
	}
}

export default Webdev;
