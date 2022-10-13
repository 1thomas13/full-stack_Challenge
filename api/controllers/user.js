const { createUser } = require('../repositories/user')

exports.register = async ( req, res ) => {
  try {
    const { password, username } = req.body
  
    if(!password || !username) return res.status(400).json({error: 'complete all fields'})

    if(password < 6) return res.status(400).json({error: 'The password must have at least 6 characters'})

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = {
      username,
      password: hash
    }

    await createUser(newUser)
  } catch (error) {
    
  }
  

  res.json('a')
}

exports.login = ( req, res ) => {
  res.json('a')
}