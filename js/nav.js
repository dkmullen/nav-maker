var menuList = [
	{name: "Intro", link: "intro.html"},
	{name: "Lesson 1", link: "les1.html"},
	{name: "Lesson 2", link: "les2.html"},
	{name: "Lesson 3", link: "les3.html"},
	{name: "Lesson 4", link: "les4.html"}
];

var MenuItem = function(data) {
	this.name = ko.observable(data.name);
	this.link = ko.observable(data.link);
};

var ViewModel = function() {
	//Makes sure 'self' always refers to ViewModel
	var self = this;
	//Creates an empty array to hold menu objects
	this.menu = ko.observableArray([]);
	
	//Adds each menu item to the array 
	menuList.forEach(function(pageTab){
		self.menu.push( new MenuItem(pageTab) );
	});
	
	document.getElementById('nav-links').innerHTML =
		'<ul data-bind="foreach: menu">' +
		'<a data-bind="attr: {href: link}">' +
		'<li data-bind="text: name"></li></a></ul>';
	
	document.getElementById('footer-links').innerHTML = 
		'<ul data-bind="foreach: menu">' +
		'<a data-bind="attr: {href: link}">' +
		'<li data-bind="text: name"></li></a></ul>';
};
ko.applyBindings(new ViewModel())