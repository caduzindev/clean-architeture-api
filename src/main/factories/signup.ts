import { DbAddAccount } from '../../data/usecases/add-account/db-add-accout'
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adapter'
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account'
import { SignUpController } from '../../presentation/controllers/signup/signup'
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter'

export const makeSignupController = (): SignUpController => {
  const emailValidator = new EmailValidatorAdapter()
  const addAccount = new DbAddAccount(
    new BcryptAdapter(12),
    new AccountMongoRepository()
  )

  return new SignUpController(emailValidator, addAccount)
}
