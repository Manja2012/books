import dotenv from 'dotenv'

dotenv.config()

const envToLogger = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
  production: true,
  test: false,
}

export default {
  port: process.env.PORT || 3000,
  mongoDbUrl: process.env.MONGODB_URL || 'mongodb://localhost:27017/books',
  envToLogger,
}