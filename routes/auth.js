const multer = require('fastify-multer') // or import multer from 'fastify-multer'
const upload = multer({ dest: 'uploads/' })

module.exports = async (fastify) => {

	const db = fastify.db;

	fastify.route({
		method: 'GET',
		url: '/login',
		handler: async (request, reply) => {
			console.log(request.session);
			if (request.session.user) {
				reply.redirect('/');
				return;
			}
			const auth_err = request.session.auth_err;
			let data = {};
			if (auth_err) {
				data.auth_err = auth_err;
			}
			reply.view('login', data);
		}
	})

	fastify.route({
		method: 'POST',
		url: '/login',
		preHandler: upload.none(),
		handler: async (request, reply) => {
			delete request.session.auth_err;
			const { username, password } = request.body;
			const user = await db('app_user').where('username', '=', username).first();
			if (!user) {
				request.session.auth_err = {
					type: 'USER_NOT_FOUND',
					message: 'user tidak ditemukan'
				};
				reply.redirect('/auth/login');
				return;
			} else if (user.password != password) {
				request.session.auth_err = {
					type: 'PASS_ERR',
					message: 'pasword tidak cocok'
				};
				reply.redirect('/auth/login');
				return;
			} else {
				request.session.user = user;
				reply.redirect('/app/data');
			}
		}
	})

}