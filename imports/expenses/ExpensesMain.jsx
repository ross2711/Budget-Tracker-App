import React from "react";
import { Expenses } from "../api/Expenses";
import ExpensesList from "./ExpensesList";

export default class ExpensesMain extends React.Component {
	render() {
		return (
			<div>
				<ExpensesList
					total={this.props.total}
					expenses={this.props.expenses}
					removeExpenses={this.props.removeExpenses}
					updateExpenses={this.props.updateExpenses}
					categories={this.props.categories}
				/>
			</div>
		);
	}
}
