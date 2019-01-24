import React from "react";
import Proptypes from "prop-types";

import Stars from "./Stars";

// {
//     "id": 105748391,
//     "name": "Calypso",
//     "type": "Trad",
//     "rating": "5.6",
//     "stars": 4,
//     "starVotes": 834,
//     "pitches": 3,
//     "location": [
//         "Colorado",
//         "Boulder",
//         "Eldorado Canyon SP",
//         "The Wind Tower",
//         "Wind Tower - SW Face"
//     ],
//     "url": "https:\/\/www.mountainproject.com\/route\/105748391\/calypso",
//     "imgSqSmall": "https:\/\/cdn-files.apstatic.com\/climb\/105935643_sqsmall_1494061717.jpg",
//     "imgSmall": "https:\/\/cdn-files.apstatic.com\/climb\/105935643_small_1494061717.jpg",
//     "imgSmallMed": "https:\/\/cdn-files.apstatic.com\/climb\/105935643_smallMed_1494061717.jpg",
//     "imgMedium": "https:\/\/cdn-files.apstatic.com\/climb\/105935643_medium_1494061717.jpg",
//     "longitude": -105.2829,
//     "latitude": 39.9318
// }

const MountainProjectRoute = ({ route }) => (
	<li className="mpRoute">
		<a href={route.url}>
			<img src={route.imgSmallMed} alt={route.name} />
		</a>
		<span>
			{route.name} - {route.type}
			{" - "}
			{route.pitches > 1
				? `${route.pitches} pitches - `
				: null} Grade: {route.rating} <Stars rating={route.stars} />
		</span>
		<span>
			{[route.location[2], route.location[1], route.location[0]].join(
				", "
			)}
		</span>
	</li>
);

MountainProjectRoute.proptypes = {
	route: Proptypes.object,
};

export default MountainProjectRoute;
