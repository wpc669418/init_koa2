var log4js = require('log4js')

log4js.configure({
  appenders: {
    console: { type: 'console' },
    production: {
      type: 'dateFile',
      filename: './log4js/day.log',
      alwaysIncludePattern: true,
      keepFileExt: true,
      daysToKeep: 30,
    },
  },
  categories: {
    production: { appenders: ['production'], level: 'error' },
    another: { appenders: ['console'], level: 'trace' },
    default: { appenders: ['console', 'production'], level: 'trace' },
  },
})

const log = log4js.getLogger()
export { log }
