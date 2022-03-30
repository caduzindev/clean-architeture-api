import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

describe('SignUp Routes', () => {
  beforeAll(async () => {
    const uri = process.env.MONGO_URL ? process.env.MONGO_URL : ''
    await MongoHelper.connect(uri)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    await MongoHelper.getCollection('accounts').deleteMany({})
  })
  test('Should return an account on success', async () => {
    app.get('/test_cors', (req, res) => {
      res.send()
    })

    await request(app)
      .post('/api/signup')
      .send({
        name: 'name',
        password: 'password',
        email: 'email@email.com',
        passwordConfirmation: 'password'
      })
      .expect(200)
  })
})
