var fs      = require('fs'),
    koa     = require('koa'),
    stylus  = require('koa-stylus'),
    serve   = require('koa-static'),
    favicon = require('koa-favi'),
    app     = koa(),
    config  = require('./app/config/app');
    
/** Enable favicon */
app.use(favicon());

/** Stylus support */
app.use(stylus('./public'));
app.use(serve('./public'));

require('./bootstrap.js')(app);

if (!module.parent) {
	app.listen(process.env.PORT || config.port);
	console.log('Kick of att %s', process.env.PORT || config.port);
}