import React from "react";
import ExpensesMain from "./expenses/ExpensesMain";
import IncomesMain from "./incomes/IncomesMain";
import Total from "./Total";
import Form from "./incomes/Form";
import Forma from "./expenses/Form";
import { Income } from "./api/Income";
import { Expenses } from "./api/Expenses";
import { Budget } from "./api/Budget";
import { Categories } from "./api/Categories";
import "../client/main.css";
import "../client/main.html";

const intial_categories = {
	hotel: "Hotel",
	grocery: "Grocery",
	eating: "Eating out",
	rent: "Rent",
	nightlife: "Nightlife",
	drinks: "Drinks",
	cinema: "Cinema",
	holiday: "Holiday",
	other: "Other"
};

const intial_income_categories = {
	loan: "Loan",
	salary: "Salary",
	savings: "Savings",
	other: "Other"
};

export default class Main extends React.Component {
	constructor() {
		super();
		this.state = {
			inc: 0,
			exp: 0,
			total: "",
			display: "none",
			expense_form_open: false,
			categories: intial_categories,
			income_form_open: false,
			categoriesInc: intial_income_categories
		};

		this.getIncomeData = this.getIncomeData.bind(this);
		this.getExpensesData = this.getExpensesData.bind(this);
		this.findAll = this.findAll.bind(this);
		this.removeIncomes = this.removeIncomes.bind(this);
		this.updateIncomes = this.updateIncomes.bind(this);
		this.removeExpenses = this.removeExpenses.bind(this);
		this.updateExpenses = this.updateExpenses.bind(this);
	}

	redirect() {
		debugger;
		var url = "";
		this.props.history.push({
			pathname: `/${url}`,
			state: {
				detail: this.props.name,
				initial: this.props.initial,
				id: this.props.id
			}
		});
	}

	findAll() {
		var project = Budget.findOne({ _id: this.props.location.state.id });
		var init = project.amount;
		var incomes;
		debugger;
		var expenses;

		Tracker.autorun(() => {
			(incomes = Income.find({
				project: this.props.location.state.id
			}).fetch()),
				(expenses = Expenses.find({
					project: this.props.location.state.id
				}).fetch());
		});
		var totalInc = init;
		var totalExp = 0;
		debugger;
		incomes.map(ele => (totalInc += ele.amount));
		expenses.map(ele => (totalExp += ele.amount));
		debugger;
		var total = totalInc - totalExp;
		this.setState({ incomes, expenses, total });
	}

	componentWillMount() {
		debugger;
		this.findAll();
	}

	removeIncomes(id) {
		debugger;
		Income.remove({ _id: id });
		this.findAll();
	}

	updateIncomes(id, name, amount, category) {
		debugger;
		if (name && amount && category) {
			Income.update(
				{ _id: id },
				{ $set: { name: name, amount: amount, category: category } },
				() => {
					this.findAll();
				}
			);
		} else if (name && amount) {
			Income.update(
				{ _id: id },
				{ $set: { name: name, amount: amount } },
				() => {
					this.findAll();
				}
			);
		} else if (name && category) {
			Income.update(
				{ _id: id },
				{ $set: { name: name, category: category } },
				() => {
					this.findAll();
				}
			);
		} else if (amount && category) {
			Income.update(
				{ _id: id },
				{ $set: { amount: amount, category: category } },
				() => {
					this.findAll();
				}
			);
		} else if (name) {
			Income.update({ _id: id }, { $set: { name: name } }, () => {
				this.findAll();
			});
		} else if (amount) {
			Income.update({ _id: id }, { $set: { amount: amount } }, () => {
				this.findAll();
			});
		} else if (category) {
			Income.update({ _id: id }, { $set: { category: category } }, () => {
				this.findAll();
			});
		} else {
			return;
		}
	}

	getIncomeData(name, amount, category, new_category) {
		if (new_category) {
			category = new_category;
			new_categories_Inc = this.state.categoriesInc;
			new_categories_Inc[category] = category;
			this.setState({ categoriesInc: new_categories_Inc });
		}

		var dateString = new Date().toString();
		var dateWords = dateString.split(" ");
		var date = dateWords[2] + " " + dateWords[1] + " " + dateWords[3];

		var id = this.props.location.state.id;
		debugger;
		Income.insert({
			project: id,
			name: name,
			amount: amount,
			category: category,
			created_date: date
		});
		this.setState({ income_form_open: false });
		this.findAll();
	}

	getExpensesData(name, amount, category, new_category) {
		if (new_category) {
			category = new_category;
			new_categories = this.state.categories;
			new_categories[category] = category;
			this.setState({ categories: new_categories });
		}

		var dateString = new Date().toString();
		var dateWords = dateString.split(" ");
		var date = dateWords[2] + " " + dateWords[1] + " " + dateWords[3];

		var id = this.props.location.state.id;
		debugger;
		Expenses.insert({
			project: id,
			name: name,
			amount: amount,
			category: category,
			created_date: date
		});
		this.setState({ expense_form_open: false });
		this.findAll();
	}

	removeExpenses(id) {
		Expenses.remove({ _id: id });
		this.findAll();
	}

	updateExpenses(id, name, amount, category) {
		debugger;
		if (name && amount && category) {
			Expenses.update(
				{ _id: id },
				{ $set: { name: name, amount: amount, category: category } },
				() => {
					this.findAll();
				}
			);
		} else if (name) {
			Expenses.update({ _id: id }, { $set: { name: name } }, () => {
				this.findAll();
			});
		} else if (amount) {
			Expenses.update({ _id: id }, { $set: { amount: amount } }, () => {
				this.findAll();
			});
		} else if (category) {
			Expenses.update(
				{ _id: id },
				{ $set: { category: category } },
				() => {
					this.findAll();
				}
			);
		} else {
			return;
		}
	}

	showUpdateInc() {
		this.setState({ income_form_open: !this.state.income_form_open });
	}
	showUpdateExp() {
		this.setState({ expense_form_open: !this.state.expense_form_open });
	}

	render() {
		let title = {
			color: "white"
		};
		let heading = {
			color: "grey"
		};
		let font = {
			fontFamily: "Roboto",
			fontStyle: "italic"
		};

		return (
			<div style={font}>
				<button
					id="backBtn"
					className="ui inverted grey button"
					onClick={this.redirect.bind(this)}
					className="mini ui button ui inverted grey button"
				>
					<i className="backward icon" />back
				</button>
				<div id="projectHeading">
					<h1 style={title}>{this.props.location.state.detail}</h1>
					<div id="total">
						<Total total={this.state.total} />
					</div>
					<button
						id="incAndExpBtn"
						onClick={this.showUpdateExp.bind(this)}
						className="mini ui button ui inverted red button"
					>
						<i className="minus circle icon" />Expense
					</button>
					<button
						id="incAndExpBtn"
						onClick={this.showUpdateInc.bind(this)}
						className="mini ui button ui inverted blue button"
					>
						<i className="plus circle icon" />Income
					</button>
				</div>

				{this.state.income_form_open && (
					<Form
						getIncomeData={this.getIncomeData}
						categoriesInc={this.state.categoriesInc}
					/>
				)}
				{this.state.expense_form_open && (
					<Forma
						getExpensesData={this.getExpensesData}
						categories={this.state.categories}
					/>
				)}
				<div className="ui inverted divider" />
				<div id="expText" style={heading}>
					<div>
						<h5>project</h5>
					</div>
					<div>
						<h5>€</h5>
					</div>
					<div>
						<h5>category</h5>
					</div>
					<div>
						<h5>date</h5>
					</div>
				</div>
				<div className="ui inverted divider" />
				<IncomesMain
					id={this.props.location.state.id}
					incomes={this.state.incomes}
					removeIncomes={this.removeIncomes}
					updateIncomes={this.updateIncomes}
					categoriesInc={this.state.categoriesInc}
				/>
				<ExpensesMain
					id={this.props.location.state.id}
					expenses={this.state.expenses}
					removeExpenses={this.removeExpenses}
					updateExpenses={this.updateExpenses}
					categories={this.state.categories}
				/>
			</div>
		);
	}
}

