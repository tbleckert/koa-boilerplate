var fs     = require('fs'),
    path   = require('path'),
    hbs    = require('koa-hbs'),
    routes = require('./app/routes');

module.exports = function (app) {

	var controller;

	/** Load mootools */
	require('mootools');
	
	/** Configure handlebars */
	app.use(hbs.middleware({
	  viewPath: __dirname + '/app/views',
	  defaultLayout: 'layouts/default'
	}));
	
	/** Load controllers */
	fs.readdirSync('./app/controllers').forEach(function (file) {
		if (path.extname(file) === '.js') {
			controller = require('./app/controllers/' + file);
			controller.enable(app, routes);
		}
	});

};