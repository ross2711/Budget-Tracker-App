import React from 'react'

export default class Forma extends React.Component{
	constructor(props){
		super(props)
		const first_category = Object.keys(props.categories)[0];
		this.state={
			visibility:'none',
			display:'block',
			expense_name: '',
			amount_name: '',
			category_name: first_category,
			new_category_name:''
		}
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleAmountChange = this.handleAmountChange.bind(this);
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.handleNewCategoryChange = this.handleNewCategoryChange.bind(this);
	}	

	getData(e){
		e.preventDefault()
		debugger
		this.props.getExpensesData(this.state.expense_name, Number(this.state.amount_name), this.state.category_name, this.state.new_category_name)
		
	}

	handleNameChange(event) {
      this.setState({expense_name: event.target.value});
    }

    handleAmountChange(event) {
      this.setState({amount_name: event.target.value});
    }

    handleCategoryChange(event) {
      this.setState({category_name: event.target.value});
    }
    handleNewCategoryChange(event) {
      this.setState({new_category_name: event.target.value});
    }

	render(){
		return(
					<div>
			
  	<div className="ui inverted divider"></div>
	{/*		<button
				onClick = {this.showUpdate.bind(this)}>add income +€</button>*/}
			<form 
				onSubmit={this.getData.bind(this)}>
				{/*<input ref='name' placeholder='income name'/>*/}
				{/*<input ref='amount' placeholder='amount'/>*/}
				<div className="ui inverted divider"></div>
				 <div className="ui inverted left icon input">
    				<input type="text" placeholder='Expense name' required value={this.state.expense_name} onChange={this.handleNameChange}/>
   					 <i className="add icon"></i>
  				  </div>
					<div className="ui inverted divider"></div>
				  <div className="ui inverted left icon input">
    				<input type="text" placeholder='Amount' required value={this.state.amount_name} onChange={this.handleAmountChange}/>
   					 <i className="euro icon"></i>
  				  </div>
  				  <div className="ui inverted divider"></div>
						{/*dropdown*/}
					<select id="padCategory" name="skills" className="ui inverted dropdown" value={this.state.category_name} onChange={this.handleCategoryChange}>
					{Object.keys(this.props.categories).map(c => <option value={c}>{this.props.categories[c]}</option>)}
					</select>
					<div id="padCategory" className="ui inverted left icon input">
					<input type="text" placeholder='or enter new category' value={this.state.new_category_name} onChange={this.handleNewCategoryChange}/>
				<i class="folder outline icon"></i>
  				  </div>
				<div className="ui inverted divider"></div>
				  <button
				  id="addBtn"
  				className="mini ui button ui inverted green button"
  				>addExp</button>
			</form>
			</div>
		)
	}
}

	





			{/*<div>

			<button
	onClick = {this.showUpdate.bind(this)}
  	className="ui inverted pink button"
  	id="expBtn"
  	><i className="euro icon"></i>add expenses</button>
				<form 
					style={styles}
					onSubmit={this.getData.bind(this)}>
					<input ref='name' placeholder='expense name'/>
					<input ref='amount' placeholder='amount'/>
					<button>💸</button>
				</form>
			</div>

*/}