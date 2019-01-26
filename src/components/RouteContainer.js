//module import
import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

//component imports
import Home from "./Home";
import Contact from "./Contact";
import Webdev from "./Webdev";
import Photography from "./Photography";
import Climb from "./Climb";
import NotFound from "./NotFound";

const RouteContainer = ({ location, setBG }) => {
	return (
		<TransitionGroup className="transition-group">
			<CSSTransition
				key={location.key}
				timeout={{ enter: 1000, exit: 1000 }}
				classNames={"fade"}>
				<section className="route-section">
					<Switch location={location}>
						<Route
							exact
							path="/"
							render={props => <Home {...props} setBG={setBG} />}
						/>
						<Route
							path="/web"
							render={props => (
								<Webdev {...props} setBG={setBG} />
							)}
						/>
						<Route
							path="/climb"
							render={props => <Climb {...props} setBG={setBG} />}
						/>
						<Route
							path="/photo"
							render={props => (
								<Photography {...props} setBG={setBG} />
							)}
						/>
						<Route
							path="/contact"
							render={props => (
								<Contact {...props} setBG={setBG} />
							)}
						/>
						<Route
							render={props => (
								<NotFound {...props} setBG={setBG} />
							)}
						/>
					</Switch>
				</section>
			</CSSTransition>
		</TransitionGroup>
	);
};

export default withRouter(RouteContainer);
