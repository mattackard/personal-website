import React, { Component } from "react";
import jsonp from "jsonp";

class Photography extends Component {
	static proptypes = {};

	state = {
		images: [],
	};

	componentDidMount() {
		//gets public image data from my flickr profile
		jsonp(
			"https://api.flickr.com/services/feeds/photos_public.gne?id=139144229@N05&format=json",
			{ name: "jsonFlickrFeed" },
			(err, data) => {
				if (err) {
					console.error(err);
				} else {
					let imageArray = [];
					data.items.forEach(img => {
						//grabs the full resolution picture instead of the thumbnail from json
						imageArray.push([
							img.media.m.replace("_m.jpg", "_b.jpg"),
							img.title,
						]);
					});
					this.setState({
						images: imageArray,
					});
				}
			}
		);
	}

	render() {
		return (
			<section id="photoPage">
				<p>
					I consider myself a travel photographer so I like to take
					photos on vacation and if I go outdoors for hiking or
					climbing. The photos below are populated from my{" "}
					<a href="https://www.flickr.com/photos/139144229@N05/">
						flickr page
					</a>
					.
				</p>
				<ul id="flickrPhotos">
					{//iterates through each image src in state and build list items for each image
					this.state.images.map(image => {
						return (
							<li key={image[1]}>
								<img src={image[0]} alt={image[1]} />
							</li>
						);
					})}
				</ul>
				<img
					className="backgroundImage"
					src="./img/photoBG.jpg"
					alt="page background"
				/>
			</section>
		);
	}
}

export default Photography;
