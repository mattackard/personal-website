import React, { Component } from "react";

class Webdev extends Component {
	static proptypes = {};

	render() {
		return (
			<section id="webPage">
				<h1>Web Development</h1>
				<p>
					I am a web developer from San Jose, CA. I am a self-taught
					developer focused on Javascript with React. I have
					experience building apps with Node, Epxpress, and Mongo as
					well. I enjoy working on interactive and media-heavy sites
					as well as single page apps with React. My portfolio is
					below with short descriptions for each project along with
					some of the specific technologies used. Live links as well
					as links to the source for each portfolio project are
					provided. My email and links to my LinkedIn and Github
					profiles are at the top of the page. Thanks for stopping by
					to look at my work!
				</p>
				<div id="webProjects">
					<h1>My projects</h1>
					<ul>
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
						<li>
							<h2>Franker.xyz</h2>
							<a href="https://franker.xyz">
								<img
									src="./img/franker.png"
									alt="franker dot xyz project"
								/>
							</a>
							<p>Web apps related to twitch.tv streamers</p>
							<button>
								<a href="https://franker.xyz">Live Site</a>
							</button>
							<button>
								<a href="https://github.com/mattackard/franker.xyz">
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
