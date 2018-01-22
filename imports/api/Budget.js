export const Budget = new Meteor.Collection(null);
var BudgetCartObserver = new LocalPersist(Budget, "budget-Cart");
