/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { adaptRoute } from '../adapters/express-routes-adapter'
import { makeSignupController } from '../factories/signup'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignupController()))
}
