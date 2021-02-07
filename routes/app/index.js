module.exports = async (fastify) => {

	// fastify
 //    .addHook('onRequest', async (request, reply) => {
 //      const user = request.session.user;
 //      if (!user) {
 //        reply.redirect('/auth/login');
 //      }
 //    })

	fastify.get('/', (request, reply) => {
		reply.view('app/home')
	})
	fastify.register(require('./data'), { prefix: 'data' });
	fastify.register(require('./desa'), { prefix: 'desa' });
	fastify.register(require('./rank'), { prefix: 'rank' });
}