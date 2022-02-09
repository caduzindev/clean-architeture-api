import { SignUpController } from './signup'

describe('Signup Controller', () => {
  it('Should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'carlos@gmail.com',
        password: '1234',
        passwordConfirmation: '1234'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
