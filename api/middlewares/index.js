const jwt = require('jsonwebtoken')

exports.isLogged = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    console.log(token)
    jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
      if (err) {
        return res.status(400).json(err)
      } else {
        req.data = data
        next()
      }
    })
  } catch (error) {
    return res.status(400).json({ err: 'Token invalido' })
  }
}
