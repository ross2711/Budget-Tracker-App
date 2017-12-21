import React from 'react'

export default class IncomesItem extends React.Component{
	constructor(){
		super()
		this.state={
			visibility:'none',
			display:'block',
			category: '',
			amount:''
		}
	}
	
	getData(action){
		var name   = this.refs.name.value.trim()
		var amount = Number(this.refs.amount.value.trim())
		var category = this.state.category
		action == 'remove' ? this.props.removeIncomes(this.props.id) : this.props.updateIncomes(this.props.id, name, amount, category)
	}

	showUpdate(){
		if (this.state.visibility == 'block' ){
			this.setState({visibility:'none'})
		}else{
			this.setState({visibility:'block'})
		}
	}

	getCat (e) {
		var category = e.target.value.trim()
		this.setState({category})
	}

	render(){
		let style = {
			display:this.state.visibility
		}
		let styles = {
			display:this.state.display
		}
		let title = {
			color:'#54c8ff'
		}
		let btn = {
			overflow: 'hidden'
		}

		return (
		
		<div className="ui fluid container">
		<div className="ui container" id="incBorder">
		<div id="incText" style={title}>
		<div><h5>{this.props.name}</h5></div>
		<div><h5>{this.props.amount}</h5></div>
		<div><h5>{this.props.category_name}</h5></div>
		<div><h5>{this.props.date}</h5></div>
		</div>

		<div style={btn}>
				<button
			className="mini ui button ui inverted orange right floated button"
			onClick = {this.showUpdate.bind(this)}><i className="toggle down icon"></i></button>
			<button 
			className="mini ui button ui inverted red left floated button"
			style = {styles}
			onClick={this.getData.bind(this, 'remove')}><i className="trash outline icon"></i></button>
		</div>
		</div>

		<div style = {style}>
				<div className="ui inverted divider"></div>
						 <div className="ui inverted left icon input">
		    				<input type="text" ref ='name' placeholder='Edit Income'/>
		   					 <i className="add icon"></i>
	   				  </div>
	   				  <div className="ui inverted divider"></div>
						 <div className="ui inverted left icon input">
		    				<input type="text" ref ='amount' placeholder='Edit Amount'/>
		   					 <i className="euro icon"></i>
	   				  </div>
	   				  <div className="ui inverted divider"></div>

					<select 
						onChange={this.getCat.bind(this)}
							name="skills" multiple="" className="ui inverted dropdown">
							<option value="loan">Loan</option>
							<option value="salary">Salary</option>
							<option value="savings">Savings</option>
							<option value="savings">other</option>
					</select>
	   			<div className="ui inverted divider"></div>
			<button 
				id="updateBtn"
				className="mini ui button ui inverted green button"
				onClick={this.getData.bind(this, 'update')}>update</button>
		</div>
		</div>
		)
	}
}



//================================================



// 	constructor(){
// 		super()
// 		this.state={
// 			visibility:'none',
// 			display:'block'
// 		}
// 	}
	
// 	getData(action){
// 		var name   = this.refs.name.value.trim()
// 		var amount = this.refs.amount.value.trim()
// 		action == 'remove' ? this.props.removeIncomes(this.props.id) : this.props.updateIncomes(this.props.id, name, amount)
// 	}

// 	showUpdate(){
// 		if (this.state.visibility == 'block' ){
// 			this.setState({visibility:'none'})
// 		}else{
// 			this.setState({visibility:'block'})
// 		}
// 	}

// 	render(){
// 		let style = {
// 			display:this.state.visibility
// 		}
// 		let styles = {
// 			display:this.state.display
// 		}
// 		let title = {
// 			color:'red'
// 		}
// 		let btn = {
// 			overflow: 'hidden'
// 		}

// 		return (
		
// 		<div class="ui fluid container">
// 		<div class="ui container" id="expBorder">
// 		<div id="incText" style={title}>
// 		<div><h6>{this.props.name}</h6></div>
// 		<div><h6>€ -{this.props.amount}</h6></div>
// 		<div><h6>{this.props.category_name}</h6></div>
// 		<div><h6>{this.props.date}</h6></div>
// 		</div>

// 		<div style={btn}>
// 				<button
// 			class="mini ui button ui inverted orange right floated button"
// 			onClick = {this.showUpdate.bind(this)}><i class="toggle down icon"></i></button>
// 			<button 
// 			className="mini ui button ui inverted red left floated button"
// 			style = {styles}
// 			onClick={this.getData.bind(this, 'remove')}><i class="trash outline icon"></i></button>
// 		</div>
// 		</div>

// 		<div style = {style}>
// 				<div className="ui inverted divider"></div>
// 						 <div className="ui inverted left icon input">
// 		    				<input type="text" ref ='name' placeholder='Edit Income'/>
// 		   					 <i className="add icon"></i>
// 	   				  </div>
// 	   				  <div className="ui inverted divider"></div>
// 						 <div className="ui inverted left icon input">
// 		    				<input type="text" ref ='amount' placeholder='Edit Amount'/>
// 		   					 <i className="euro icon"></i>
// 	   				  </div>
// 	   				  <div className="ui inverted divider"></div>

// 						<select name="skills" multiple="" className="ui inverted dropdown">
// 							<option value="loan">Loan</option>
// 							<option value="salary">Salary</option>
// 							<option value="savings">Savings</option>

// 					</select>
// 	   		<div className="ui inverted divider"></div>
// 			<button 
// 				className="ui inverted green button"
// 				onClick={this.getData.bind(this, 'update')}>update</button>
// 		</div>
// 		</div>
// 		)
// 	}
// }












/*


export default class IncomesItem extends React.Component{
	constructor(){
		super()
		this.state={
			visibility:'none',
			display:'block'
		}
	}

	getData(action){
		var name   = this.refs.name.value.trim()
		var amount = this.refs.amount.value.trim()
		action == 'remove' ? this.props.removeIncomes(this.props.id) : this.props.updateIncomes(this.props.id, name, amount)
	}

	showUpdate(){
		if (this.state.visibility == 'block' ){
			this.setState({visibility:'none'})
		}else{
			this.setState({visibility:'block'})
		}
	}

	render(){
		let style = {
			display:this.state.visibility
		}
		let styles = {
			display:this.state.display
		}
		let border ={
			border:'3px solid green',
			// display:this.state.display
		}
		let title = {
			color:'white',
			margin: '20px'
		}

		return (
		<div class="ui fluid container">
		<div class="ui container" style={border}>
		<div id="expText"  style={title}>
		<div><h3>{this.props.name}</h3></div>
		<div><h3>€ {this.props.amount}</h3></div>
		<div><h3>category</h3></div>
		<div><h3>date</h3></div>
		</div>

{	
		<div>
		<div style={border}>
		<h3  style={title}>{this.props.name}</h3>
		<h3  style={title}>Amount:{this.props.amount}</h3>
		<h3  style={title}>Category:</h3>}
		<button
			class="ui inverted orange button"
			onClick = {this.showUpdate.bind(this)}><i class="toggle down icon"></i></button>
			<button 
			className="ui inverted red button"
			style = {styles}
			onClick={this.getData.bind(this, 'remove')}><i class="trash outline icon"></i></button>
		</div>

		<div style = {style}>
		
	<div className="ui inverted divider"></div>
		<div className="ui inverted left icon input">
		    <input type="text" ref ='name' placeholder='Expense'/>
		   		<i className="add icon"></i>
	   				</div>
	   				  <div className="ui inverted divider"></div>
							<div className="ui inverted left icon input">
			    				<input type="text" ref ='amount' placeholder='Amount'/>
			   					<i className="euro icon"></i>
		   				  	</div>
	   				  <div className="ui inverted divider"></div>
			<button 
				className="ui inverted green button"
				onClick={this.getData.bind(this, 'update')}>update</button>
		</div>
		</div>
		)
	}
}

*/
