const { createUser, findUser } = require('../repositories/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.register = async ( req, res ) => {
  try {
    const { password, username, email } = req.body
  
    if(!password || !username | !email) return res.status(400).json({ error: 'complete all fields' })
 
    if(password < 6) return res.status(400).json({ error: 'The password must have at least 6 characters' })

    const userExist = await findUser( username )
    if( userExist ) return res.status(400).json({error: 'user already exist'})

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = {
      username,
      password: hash,
      email
    }

    await createUser( newUser )

    res.json({msg: 'User created successfully'})

  } catch (error) {
    res.status(400).json({error})
  }
}

exports.login = async( req, res ) => {
  try{
    const { password, username } = req.body
  
    if(!password || !username) return res.status(400).json({ error: 'complete all fields' })

    const user = await findUser( username )
    if( !user ) return res.status(400).json({error: 'user not exist'})

    const validatePass = bcrypt.compareSync(password, user.password);
    if(!validatePass) return res.status(400).json({error: 'incorrect password'})

    const token = jwt.sign({
      username,
      id: user.id
    }, process.env.TOKEN_SECRET)

    res.json({msg: {token, user}})

  } catch (error) {
    res.status(400).json({error})
  }
}