import React from 'react'

export default class Form extends React.Component{
constructor(props){
		super()
		const first_category = Object.keys(props.categoriesInc)[0];
		this.state={
			visibility:'none',
			display:'block',
			income_name: '',
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
		this.props.getIncomeData(this.state.income_name, Number(this.state.amount_name), this.state.category_name, this.state.new_category_name)
		
	}

	handleNameChange(event) {
      this.setState({income_name: event.target.value});
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
			<form 
				onSubmit={this.getData.bind(this)}>
				{/*<input ref='name' placeholder='income name'/>*/}
				{/*<input ref='amount' placeholder='amount'/>*/}
				<div className="ui inverted divider"></div>
				 <div className="ui inverted left icon input">
    				<input type="text" placeholder='Income name' required value={this.state.income_name} onChange={this.handleNameChange}/>
   					 <i className="add icon"></i>
  				  </div>
					<div className="ui inverted divider"></div>
				  <div className="ui inverted left icon input">
    				<input type="text" placeholder='Amount' required value={this.state.amount_name} onChange={this.handleAmountChange}/>
   					 <i csName="euro icon"></i>
  				  </div>

  				  <div className="ui inverted divider"></div>
						{/*dropdown*/}
					<select id="padCategory" name="skills" className="ui inverted dropdown" value={this.state.category_name} onChange={this.handleCategoryChange}>
					{Object.keys(this.props.categoriesInc).map(c => <option value={c}>{this.props.categoriesInc[c]}</option>)}
					</select>
				<div id="padCategory" className="ui inverted left icon input">
					<input type="text" placeholder='or enter new category' value={this.state.new_category_name} onChange={this.handleNewCategoryChange}/>
				<i class="folder outline icon"></i>
  				  </div>
				<div className="ui inverted divider"></div>
				  <button
				  id="addBtn"
  				className="mini ui button ui inverted green button"
  				>add Inc</button>
  				</form>
			</div>
		)
	}
}




///============================================

// 	constructor(){
// 		super()
// 		this.state={
// 			visibility:'none',
// 			display:'block'
// 		}
// 	}

// 	getData(e){
// 		e.preventDefault()
// 		var name   = this.refs.name.value.trim()
// 		var amount = Number(this.refs.amount.value.trim())
// 		this.refs.name.value=''
// 		this.refs.amount.value=''
// 		this.props.getIncomeData(name, amount)
// 		debugger
// 	}

// 	showUpdate(){
// 		debugger
// 		if (this.state.visibility == 'block' ){
// 			this.setState({visibility:'none'})
// 		}else{
// 			this.setState({visibility:'block'})
// 		}
// 	}

// 	render(){
// 		let styles = {
// 			display:this.state.visibility
// 		}

// 		return(
// 			<div>
// 			<button
// 	onClick = {this.showUpdate.bind(this)}
//   	className="mini ui button ui inverted teal button"
//   	><i className="plus circle icon"></i>Income</button>

// 	{/*		<button
// 				onClick = {this.showUpdate.bind(this)}>add income +€</button>*/}

// 			<form 
// 				style={styles}
// 				onSubmit={this.getData.bind(this)}>
// 				{/*<input ref='name' placeholder='income name'/>*/}
// 				{/*<input ref='amount' placeholder='amount'/>*/}
// <div className="ui inverted divider"></div>
// 				 <div className="ui inverted left icon input">
//     				<input type="text" ref ='name' placeholder='Name'/>
//    					 <i className="add icon"></i>
//   				  </div>
// <div className="ui inverted divider"></div>
// 				  <div className="ui inverted left icon input">
//     				<input type="text" ref ='amount' placeholder='Amount'/>
//    					 <i className="euro icon"></i>
//   				  </div>


// 				<div className="ui inverted divider"></div>
// 				  <button id="addBtn"
//   	className="mini ui button ui inverted green button"
//   	>add</button>
//   	<div className="ui inverted divider"></div>
// 			</form>
// 			</div>
// 		)
// 	}

// }


//=====================================================================

{/*<div>
<button
	onClick = {this.showUpdate.bind(this)}>add income +€</button>

<div id="edit-input" className="ui inverted segment "
	style={styles}
		className="ui inverted input"
		onSubmit={this.getData.bind(this)}>
  <div  id="edit-input" class="ui inverted input">
  		
  <div className="ui inverted left icon input">
    <input type="text" ref ='name' placeholder='income name'/>
    <i class="edit icon"></i>
  </div>
  </div>
  <div className="ui inverted divider"></div>
  <div className="ui inverted left icon input">
    <input type="text" ref ='amount' placeholder='Amount'/>
    <i className="database icon"></i>
  </div>
    <div className="ui inverted divider"></div>
 
  <button
  	className="ui inverted green button"
  	>add</button>
</div>
</div>*/}