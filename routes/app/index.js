module.exports = async (fastify) => {

	fastify.get('/', (request, reply) => {
		reply.view('app/home')
	})
	fastify.register(require('./data'), { prefix: 'data' });
	fastify.register(require('./desa'), { prefix: 'desa' });
	fastify.register(require('./rank'), { prefix: 'rank' });
}