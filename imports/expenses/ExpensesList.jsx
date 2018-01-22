import React from "react";
import ExpensesItem from "./ExpensesItem";

export default class ExpensesList extends React.Component {
	render() {
		return (
			<div>
				{this.props.expenses.map((ele, i) => {
					debugger;
					return (
						<ExpensesItem
							total={this.props.total}
							key={i}
							name={ele.name}
							amount={ele.amount}
							category_name={this.props.categories[ele.category]}
							date={ele.created_date}
							id={ele._id}
							removeExpenses={this.props.removeExpenses}
							updateExpenses={this.props.updateExpenses}
						/>
					);
				})}
			</div>
		);
	}
}
