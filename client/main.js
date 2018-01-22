import { Meteor } from "meteor/meteor";
import React from "react";
import { render } from "react-dom";
import { routes } from "../imports/routes";

Meteor.startup(() => {
	render(routes(), document.getElementById("app"));
});
