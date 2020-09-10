import { log } from './log'

class InitManager {
  static init_gobal () {
    global.log = log
  }
}

export {
  InitManager
}