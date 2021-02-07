require('dotenv').config();

const fastify = require('fastify')({
  pluginTimeout: 3000
});
const fcookie = require('fastify-cookie');
const fblipp = require('fastify-blipp');
const fstatic = require('fastify-static');
const fcors = require('fastify-cors');
const fsession = require('fastify-session');
const pov = require('point-of-view');
const path = require('path');
const nunjucks = require('nunjucks');
const fmulter = require('fastify-multer');

const db_plugin = require("./plugs/db");

fastify
	.register(fcookie)
	.register(fsession, { secret: process.env.SESSION_SECRET, cookie: { secure: false } })
	.register(fblipp)
	.register(fstatic, {
		root: path.join(__dirname, "static"),
		prefix: "/static"
	})
	.register(pov, {
		engine: {
			nunjucks
		},
		root: path.join(__dirname, 'views'),
	  viewExt: 'html',
	})
	.register(fmulter.contentParser)
	.register(db_plugin)
	.register(require("./routes"))
	.listen(process.env.PORT, (err, address) => {
		if (err) {
			console.log(err);
			fastify.log.error(err);
			process.exit(1);
		}
		fastify.blipp();
		fastify.log.info(`server listening on ${address}`);
	});