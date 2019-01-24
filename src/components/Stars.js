import React from "react";
import Proptypes from "prop-types";

const Stars = props => {
	return <span>Stars: {props.rating}</span>;
};
Stars.propTypes = {
	rating: Proptypes.number.isRequired,
};

export default Stars;
