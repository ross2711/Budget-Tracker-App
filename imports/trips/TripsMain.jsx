import React     from 'react'
import {Budget}  from '../api/Budget'
import TripsList from './TripsList'
import Form 	 from '../Form'
import { Image } from 'semantic-ui-react';

export default class TripsMain extends React.Component{
	constructor(){
		super()
		this.state={
			trips:[],
			initial:''
		}
		this.getInitial   = this.getInitial.bind(this)
		this.getStuff     = this.getStuff.bind(this)
		this.removeStuff  = this.removeStuff.bind(this)
		this.updateStuff  = this.updateStuff.bind(this)
	}
	getInitial(name, amount){
		Budget.insert({
			name:name,
			amount:amount
		})
		this.getStuff()
	}

	getStuff(){
		var trips
		debugger
		Tracker.autorun(()=>{
			trips = Budget.find({}).fetch()
			debugger
		})
		this.setState({trips})
	}

	componentWillMount(){
		this.getStuff()
	}

	removeStuff(id){
		Budget.remove({_id:id},()=>{
			this.getStuff()
		})
	}

	updateStuff(id, title, amount) {
		if (title && amount) {
			Budget.update({_id:id},{$set:{name:title, amount:amount}},()=>{
				this.getStuff()
				debugger
			})
		} else if(title) {
			Budget.update({_id:id},{$set:{name:title}},()=>{
				this.getStuff()
				debugger
			})
		} else if(amount) {
			Budget.update({_id:id},{$set:{amount:amount}},()=>{
				this.getStuff()
				debugger
			})
		} else {
			return
		}
	}

	render(){
		let title = {
			color:'white',
		}

		return(
				<div>
				  <h1 id="main" style={title}>Budget Tracker</h1>
				  <div>
				    <Image id="smiley" className="ui medium image centered" src="/money-face.png"/>
				  </div>
				  <Form getInitial={this.getInitial}/>
				  <TripsList
				    trips   	= {this.state.trips}
				    history 	= {this.props.history}
				    initial 	= {this.state.initial}
				    removeStuff = {this.removeStuff}
				    updateStuff = {this.updateStuff}
				    />
				</div>
		)
	}
}