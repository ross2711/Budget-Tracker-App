export const Expenses = new Meteor.Collection(null);
var BudgetCartObserver = new LocalPersist(Expenses, 'expenses');