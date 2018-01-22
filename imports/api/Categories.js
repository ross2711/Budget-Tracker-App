export const Categories = new Meteor.Collection(null);
var CategoriesCartObserver = new LocalPersist(Categories, "categories");
