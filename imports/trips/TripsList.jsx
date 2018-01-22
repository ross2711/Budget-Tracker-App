import React from "react";
import TripsItem from "./TripsItem";

export default class TripsList extends React.Component {
	render() {
		debugger;
		return (
			<div>
				{this.props.trips.map((ele, i) => {
					return (
						<TripsItem
							key={i}
							total={this.props.total}
							name={ele.name}
							amount={ele.amount}
							id={ele._id}
							history={this.props.history}
							initial={this.props.initial}
							removeStuff={this.props.removeStuff}
							updateStuff={this.props.updateStuff}
						/>
					);
				})}
			</div>
		);
	}
}
