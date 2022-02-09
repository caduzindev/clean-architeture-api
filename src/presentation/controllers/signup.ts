import { MissingParamError } from '../errors/missing-param'
import { BadRequest } from '../helpers/http'
import { HttpRequest, HttpResponse } from '../protocols/http'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      BadRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      BadRequest(new MissingParamError('email'))
    }
    return {
      statusCode: 200,
      body: {}
    }
  }
}
