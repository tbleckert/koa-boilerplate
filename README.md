Koa boilerplate
===============

Personal boilerplate for Koa projects. Including routes, controllers, stylus for css and handlebars for templating.

## Start

I suggest using Node supervisor to work with any node.js project. Add 'hbs' to the list of extensions since koa-hbs always caches views, which means they only generates when you restart the server. And don't forget to run with the --harmony flag.

`supervisor -e hbs,js --harmony app`
