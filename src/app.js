// Import the framework and instantiate it
import Fastify from 'fastify'
import config from './config.js'
// Import external routes
import routes from './routes.js'

const fastify = Fastify({
  logger: config.envToLogger[process.env.NODE_ENV || 'development']
})

// Declare a health-check route
fastify.get('/health', async function handler (request, reply) {
  fastify.log.info('Health check')
  return 'OK'
})

const prefix = '/api/v1'

// Register external routes
for (const route of routes) {
  fastify.register(route, { prefix })
}

export default fastify