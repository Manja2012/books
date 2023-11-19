import config from './config.js'
import app from './app.js'
import connect from './connect.js'


try {
  // Connect to MongoDB
  await connect()
  // Start the server
  await app.listen({ port: config.port })
} catch (err) {
  app.log.error(err)
  process.exit(1)
}
