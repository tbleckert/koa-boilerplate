var route = require('koa-route');

module.exports.enable = function (app, routes) {
	
	/** Index route */
	app.use(route.get(routes.content.index, function *(){
		yield this.render('index', {title: 'Koa Boilerplate'});
	}));

};