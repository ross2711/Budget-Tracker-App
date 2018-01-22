import React from "react";
import { Income } from "../api/Income";
import { Expenses } from "../api/Expenses";
import IncomesList from "./IncomesList";

export default class IncomesMain extends React.Component {
	render() {
		return (
			<div>
				<IncomesList
					total={this.props.total}
					incomes={this.props.incomes}
					removeIncomes={this.props.removeIncomes}
					updateIncomes={this.props.updateIncomes}
					categoriesInc={this.props.categoriesInc}
				/>
			</div>
		);
	}
}
