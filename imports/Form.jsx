import React from "react";

export default class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			visibility: "none",
			display: "block"
		};
	}

	getData(e) {
		e.preventDefault();
		var name = this.refs.name.value.trim();
		var amount = Number(this.refs.amount.value.trim());
		this.refs.name.value = "";
		this.refs.amount.value = "";
		this.props.getInitial(name, amount);
	}

	showUpdate() {
		debugger;
		if (this.state.visibility == "block") {
			this.setState({ visibility: "none" });
		} else {
			this.setState({ visibility: "block" });
		}
	}

	render() {
		let styles = {
			display: this.state.visibility
		};

		return (
			<div>
				<button
					class="tiny ui button ui inverted blue button"
					id="projectBtn"
					onClick={this.showUpdate.bind(this)}
				>
					<i class="add circle icon" />New Project
				</button>
				<form style={styles} onSubmit={this.getData.bind(this)}>
					<div class="ui inverted divider" />
					<div class="ui inverted left icon input">
						<input
							type="text"
							ref="name"
							required
							placeholder="Project Name"
						/>
						<i class="edit icon" />
					</div>
					<div class="ui inverted divider" />
					<div class="ui inverted left icon input">
						<input
							type="text"
							ref="amount"
							required
							placeholder="Budget"
						/>
						<i class="euro icon" />
					</div>
					<div class="ui inverted divider" />
					<button
						id="addBtn"
						class="tiny ui button ui inverted green button"
					>
						save
					</button>
				</form>
			</div>
		);
	}
}
