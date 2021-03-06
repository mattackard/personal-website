import React, { Component } from "react";

import MountainProjectRoute from "./MountainProjectRoute";

class Climb extends Component {
	static proptypes = {};

	state = {
		ticks: [],
		todos: [],
	};

	componentDidMount() {
		//gets mountain project 'ticks' and saves them in state
		fetch(
			"https://www.mountainproject.com/data/get-ticks?email=mattackard@gmail.com&key=200203053-b0c14902c43a4ead74b43e0a0d5f8afa"
		)
			.then(response => response.json())
			.then(response => {
				let routeIds = [];
				response.ticks.forEach(route => {
					routeIds.push(route.routeId);
				});
				fetch(
					`https://www.mountainproject.com/data/get-routes?routeIds=${routeIds.join(
						","
					)}&key=200203053-b0c14902c43a4ead74b43e0a0d5f8afa`
				)
					.then(response => response.json())
					.then(response => {
						this.setState({
							ticks: response.routes,
						});
					})
					.catch(error => console.error(error));
			})
			.catch(error => console.error(error));

		//gets mountain project 'to-dos' and saves them in state
		fetch(
			"https://www.mountainproject.com/data/get-to-dos?email=mattackard@gmail.com&key=200203053-b0c14902c43a4ead74b43e0a0d5f8afa"
		)
			.then(response => response.json())

			//get route details of todo routes
			.then(response => {
				fetch(
					`https://www.mountainproject.com/data/get-routes?routeIds=${response.toDos.join(
						","
					)}&key=200203053-b0c14902c43a4ead74b43e0a0d5f8afa`
				)
					.then(response => response.json())
					.then(response => {
						this.setState({
							todos: response.routes,
						});
					})
					.catch(error => console.error(error));
			})
			.catch(error => console.error(error));
	}

	render() {
		return (
			<section id="climbPage">
				<h1>Climbing</h1>
				<p>
					I've been climbing (mostly indoors) for about 2 years now. I
					grabbed some data from MountainProject to display the climbs
					I have completed(ticks), and the climbs I would like to do
					in the future.
				</p>
				<h2>Ticks</h2>
				<ul>
					{this.state.ticks.map(route => (
						<MountainProjectRoute key={route.id} route={route} />
					))}
				</ul>
				<h2>To-dos</h2>
				<ul>
					{this.state.todos.map(route => (
						<MountainProjectRoute key={route.id} route={route} />
					))}
				</ul>
				<img
					className="backgroundImage"
					src="./img/climbBG.jpg"
					alt="page background"
				/>
			</section>
		);
	}
}

export default Climb;
