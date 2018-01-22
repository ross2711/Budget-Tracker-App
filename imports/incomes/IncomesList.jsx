import React from "react";
import IncomesItem from "./IncomesItem";

export default class IncomesList extends React.Component {
	render() {
		debugger;
		return (
			<div>
				{this.props.incomes.map((ele, i) => {
					return (
						<IncomesItem
							total={this.props.total}
							key={i}
							name={ele.name}
							amount={ele.amount}
							category_name={
								this.props.categoriesInc[ele.category]
							}
							date={ele.created_date}
							id={ele._id}
							removeIncomes={this.props.removeIncomes}
							updateIncomes={this.props.updateIncomes}
						/>
					);
				})}
			</div>
		);
	}
}
