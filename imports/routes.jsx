import React, { Component } 			  from 'react'
import ReactDOM 						  from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TripsMain 						  from './trips/TripsMain'
import Main 					  		  from './Main'
import IncomesMain   					  from './incomes/IncomesMain'
import ExpensesMain   					  from './expenses/ExpensesMain'




export const routes = () => (
  <Router>
	  <div>
	    <Route exact path ="/" component   = {TripsMain}/>
	    <Route exact path ="/project" component   =  {Main}/>
	  </div>
  </Router>
)