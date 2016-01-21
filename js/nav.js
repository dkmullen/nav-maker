var menuList = [
	{name: "Intro", link: "intro.html", cssClass: ""},
	{name: "Lesson 1", link: "les1.html", cssClass: ""},
	{name: "Lesson 2", link: "les2.html", cssClass: ""},
	{name: "Lesson 3", link: "les3.html", cssClass: ""},
	{name: "Lesson 4", link: "les4.html", cssClass: ""}
];

var MenuItem = function(data) {
	this.name = ko.observable(data.name);
	this.link = ko.observable(data.link);
	this.cssClass = ko.observable(data.cssClass);
};

var ViewModel = function() {
	//Makes sure 'self' always refers to ViewModel
	var self = this;
	//Creates an empty array to hold menu objects
	this.menu = ko.observableArray([]);
	
	//Thanks to Blair Wadman for this code
	// http://befused.com/javascript/get-filename-url
	var url = window.location.pathname;
	var filename = url.substring(url.lastIndexOf('/')+1);
	
	//Adds each menu item to the array 
	menuList.forEach(function(pageTab){
		if (pageTab.link == filename) {
			pageTab.cssClass = "active";
			document.getElementById('title').innerHTML = pageTab.name;
		}
		self.menu.push( new MenuItem(pageTab) );
	});
	
	document.getElementById('nav-links').innerHTML =
		'<ul data-bind="foreach: menu">' +
		'<a data-bind="attr: {href: link}">' +
		'<li data-bind="text: name, attr: {class: cssClass}"></li></a></ul>';
	
	document.getElementById('footer-links').innerHTML = 
		'<ul data-bind="foreach: menu">' +
		'<a data-bind="attr: {href: link}">' +
		'<li data-bind="text: name, attr: {class: cssClass}"></li></a></ul>';
		
	
	var x = document.getElementsByTagName('a');
};


ko.applyBindings(new ViewModel())