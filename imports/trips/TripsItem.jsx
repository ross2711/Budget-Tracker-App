import React from 'react'
import {Income} 	from '../api/Income'
import {Expenses} 	from '../api/Expenses'
import {Budget} 	from '../api/Budget'

export default class TripsItem extends React.Component{
	constructor(){
		super()
		this.state ={
			visibility:'block',
			display:'none',
			total:''

		}
		this.findAll   = this.findAll.bind(this)
	}

	redirect(){
		debugger
		var url = 'project'
		this.props.history.push({
  			pathname: `/${url}`,
  			state: {
  				detail: this.props.name,
  				initial:this.props.initial,
  				id:this.props.id
  			}
		})
	}

	remove(){
		var id = this.props.id
		debugger
		this.props.removeStuff(id)
	}

	update(e){
		e.preventDefault()
		debugger
		var id     = this.props.id
		var name   = this.refs.name.value.trim()
		var amount = Number(this.refs.amount.value.trim())
		this.refs.name.value=''
		this.refs.amount.value=''
		this.props.updateStuff(id, name, amount)
	}

	showStuff(){
		debugger
		this.state.display =='none' ? this.setState({display:'block'}):
		this.setState({display:'none'})
	}

	showUpdate(){
		debugger
		if (this.state.visibility == 'block' ){
			this.setState({visibility:'none'})
		}else{
			this.setState({visibility:'block'})
		}
	}

	findAll(){
		var project = Budget.findOne({_id:this.props.id})
		var init = project.amount
		var incomes;
		debugger
		var expenses;
	
		Tracker.autorun(()=>{
			incomes = Income.find({project:this.props.id}).fetch(),
			expenses = Expenses.find({project:this.props.id}).fetch()
		})
		var totalInc = init;
		var totalExp = 0;
		debugger
		incomes.map(ele => totalInc+= ele.amount)
		expenses.map(ele => totalExp+= ele.amount)
		debugger
		var total = totalInc - totalExp
		this.setState({incomes, expenses, total})
	}

	componentWillMount(){
		debugger
		this.findAll()
	}

	render(){
		let styles ={
			display:this.state.display,
		}

		let title = {
			color:'white'
		}


	return (

<div>
    <div id="border">
        <h2 style={title}>{this.props.name}</h2>
        <h3 style={title}>budget: €{this.props.amount} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;balance: €{this.state.total}</h3>
        <button id="mainBtns" className="mini ui button ui inverted red button" onClick={this.remove.bind(this)}>remove 🗑</button>
        <button id="mainBtns" className="mini ui button ui inverted orange button" onClick={this.showStuff.bind(this)}>edit ✎</button>
        <button id="mainBtns" className="mini ui button ui inverted button" onClick={this.redirect.bind(this)}>more &nbsp;<i class="add square icon"></i>
			</button>
				<div >
	 			<form
	 				style={styles}
	 				className="ui inverted input"
	 				onSubmit={this.update.bind(this)}>
	 				<div className="ui inverted divider"></div>
	 				<input type="text" ref ='name' placeholder='new Project Name'/>
	 				<div className="ui inverted divider"></div>
	 				<input ref ='amount' placeholder='new Initial budget'/>
	 				<div className="ui inverted divider"></div>
                <button id="total" className="tiny ui button ui inverted green button"
                >update</button>
	 			</form>
	 		</div>
{/*        <div>
            <div id="edit-input" className="ui inverted segment " style={styles} className="ui inverted input" onSubmit={this.update.bind(this)}>
                <div id="edit-input" class="ui inverted input">
                    <div className="ui inverted left icon input">
                        <input type="text" ref='amount' placeholder='Project Name' />
                        <i class="edit icon"></i>
                    </div>
                </div>
                <div className="ui inverted divider"></div>
                <div className="ui inverted left icon input">
                    <input type="text" ref='amount' placeholder='Amount' />
                    <i className="database icon"></i>
                </div>
                <div className="ui inverted divider"></div>
                <button id="total" className="tiny ui button ui inverted green button"
                >update</button>
            </div>
        </div>*/}
    </div>
</div>
		)
	}
}





	// <div >
	// 			<form
	// 				style={styles}
	// 				className="ui inverted input"
	// 				onSubmit={this.update.bind(this)}>
	// 				<input type="text" ref ='name' placeholder='new name'/>
	// 				<input ref ='amount' placeholder='new amount'/>
	// 				<button>update</button>
					
	// 			</form>
	// 		</div>












