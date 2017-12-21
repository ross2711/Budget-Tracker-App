import React from 'react'

export default class ExpensesItem extends React.Component{
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
		var category=this.state.category
		action == 'remove' ? this.props.removeExpenses(this.props.id) : this.props.updateExpenses(this.props.id, name, amount, category)
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
			color:'red'
		}
		let btn = {
			overflow: 'hidden'
		}

		return (
		
		<div className="ui fluid container">
		<div className="ui container" id="expBorder">
		<div id="expText" style={title}>
		<div><h5>{this.props.name}</h5></div>
		<div><h5>€ -{this.props.amount}</h5></div>
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
		    				<input type="text" ref ='name' placeholder='Edit Expense'/>
		   					 <i className="add icon"></i>
	   				  </div>
	   				  <div className="ui inverted divider"></div>
						 <div className="ui inverted left icon input">
		    				<input type="text" ref ='amount' placeholder='Edit Expense'/>
		   					 <i className="euro icon"></i>
	   				  </div>
	   				  <div className="ui inverted divider"></div>

					<select 
						onChange={this.getCat.bind(this)}
							name="skills" multiple="" className="ui inverted dropdown">
							<option value="hotel">Hotel</option>
							<option value="grocery">Grocery</option>
							<option value="eating">Eating out</option>
							<option value="rent">Rent</option>
							<option value="nightlife">Nightlife</option>
							<option value="drinks">Drinks</option>
							<option value="cinema">Cinema</option>
							<option value="holiday">Holiday</option>
							<option value="other">Other</option>
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



		








// <li>{this.props.name}</li>
// 		<li>{this.props.amount}</li>
// 		<button 
// 				className="ui inverted red button"
// 		 		onClick={this.getData.bind(this, 'remove')}><i class="trash outline icon"></i></button>
// 		<button
// 			class="ui inverted orange button"
// 			style={styles}
// 			onClick = {this.showUpdate.bind(this)}><i class="toggle down icon"></i></button>

// 		<li 
// 			style = {style}>

			
// 			<div className="ui inverted divider"></div>
// 						 <div className="ui inverted left icon input">
// 		    				<input type="text" ref ='name' placeholder='Expense'/>
// 		   					 <i className="add icon"></i>
// 	   				  </div>
// 	   				  <div className="ui inverted divider"></div>
// 						 <div className="ui inverted left icon input">
// 		    				<input type="text" ref ='amount' placeholder='Amount'/>
// 		   					 <i className="euro icon"></i>
// 	   				  </div>
// 	   				  <div className="ui inverted divider"></div>
// 	   				  <button 
// 				className="ui inverted green button"
// 				onClick={this.getData.bind(this, 'update')}>update</button>
			
	

// 		</li>

	
// 		</div>
	
// 	}
// }




		// <button
		// 			class="ui inverted grey button"
		// 			style={styles}
		// 			onClick = {this.showUpdate.bind(this)}><i class="toggle down icon"></i></button>

		// <form 
		// 				style={style}
		// 				onSubmit={this.getData.bind(this)}>
		// 				<button 

		// 					onClick={this.getData.bind(this, 'update')}>update</button>
		// <div className="ui inverted divider"></div>
		// 				 <div className="ui inverted left icon input">
		//     				<input type="text" ref ='name' placeholder='Expense'/>
		//    					 <i className="add icon"></i>
		//   				  </div>
		// <div className="ui inverted divider"></div>
		// 				  <div className="ui inverted left icon input">
		//     				<input type="text" ref ='amount' placeholder='Amount'/>
		//    					 <i className="euro icon"></i>
		//   				  </div>


		// 				<div className="ui inverted divider"></div>
		// <button 
		// 			className="ui inverted red button"
		// 			onClick={this.getData.bind(this, 'remove')}><i class="trash outline icon"></i></button>
		// 			</form>


		// <li 
		// 	style = {style}>

		// 	<button 
		// 		className="ui inverted red button"
		// 		onClick={this.getData.bind(this, 'update')}>update</button>
		// 	<div className="ui inverted divider"></div>
		// 				 <div className="ui inverted left icon input">
		//     				<input type="text" ref ='name' placeholder='Expense'/>
		//    					 <i className="add icon"></i>
	 //   				  </div>
			
		// 	<input ref='amount' placeholder='amount'/>

		// </li>

		// <button 
		// 		className="ui inverted red button"
		//  		onClick={this.getData.bind(this, 'remove')}><i class="trash outline icon"></i></button>
		// </div>
	
