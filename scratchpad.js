// Password Hashing
const bcrypt = require('bcrypt')

const plainTextPassword = "supersecrepass"
const saltRounds = 10

const init = async () => {
  // TODO: Hash password when a new user is created...
  const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds)
  console.log(hashedPassword)

  // TODO: Login logic
  // compare login form password with hash password
  const isCorrectPassword = await bcrypt.compare("supersecrepass", hashedPassword)
  console.log(`Is correct pw: ${isCorrectPassword}`)
}

init()