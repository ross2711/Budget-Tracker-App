import React from "react";

export default class Form extends React.Component {
	constructor(props) {
		super();
		const first_category = Object.keys(props.categoriesInc)[0];
		this.state = {
			visibility: "none",
			display: "block",
			income_name: "",
			amount_name: "",
			category_name: first_category,
			new_category_name: ""
		};
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleAmountChange = this.handleAmountChange.bind(this);
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.handleNewCategoryChange = this.handleNewCategoryChange.bind(this);
	}

	getData(e) {
		e.preventDefault();
		debugger;
		this.props.getIncomeData(
			this.state.income_name,
			Number(this.state.amount_name),
			this.state.category_name,
			this.state.new_category_name
		);
	}

	handleNameChange(event) {
		this.setState({ income_name: event.target.value });
	}

	handleAmountChange(event) {
		this.setState({ amount_name: event.target.value });
	}

	handleCategoryChange(event) {
		this.setState({ category_name: event.target.value });
	}
	handleNewCategoryChange(event) {
		this.setState({ new_category_name: event.target.value });
	}

	render() {
		return (
			<div>
				<div className="ui inverted divider" />
				<form onSubmit={this.getData.bind(this)}>
					{/*<input ref='name' placeholder='income name'/>*/}
					{/*<input ref='amount' placeholder='amount'/>*/}
					<div className="ui inverted divider" />
					<div className="ui inverted left icon input">
						<input
							type="text"
							placeholder="Income name"
							required
							value={this.state.income_name}
							onChange={this.handleNameChange}
						/>
						<i className="add icon" />
					</div>
					<div className="ui inverted divider" />
					<div className="ui inverted left icon input">
						<input
							type="text"
							placeholder="Amount"
							required
							value={this.state.amount_name}
							onChange={this.handleAmountChange}
						/>
						<i csName="euro icon" />
					</div>

					<div className="ui inverted divider" />
					{/*dropdown*/}
					<select
						id="padCategory"
						name="skills"
						className="ui inverted dropdown"
						value={this.state.category_name}
						onChange={this.handleCategoryChange}
					>
						{Object.keys(this.props.categoriesInc).map(c => (
							<option value={c}>
								{this.props.categoriesInc[c]}
							</option>
						))}
					</select>
					<div
						id="padCategory"
						className="ui inverted left icon input"
					>
						<input
							type="text"
							placeholder="or enter new category"
							value={this.state.new_category_name}
							onChange={this.handleNewCategoryChange}
						/>
						<i class="folder outline icon" />
					</div>
					<div className="ui inverted divider" />
					<button
						id="addBtn"
						className="mini ui button ui inverted green button"
					>
						add Inc
					</button>
				</form>
			</div>
		);
	}
}


