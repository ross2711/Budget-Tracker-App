import React from "react";

export default class Total extends React.Component {
	render() {
		let title = {
			color: "white"
		};
		return <h1 style={title}>Balance: € {this.props.total}</h1>;
	}
}
