// const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// const generateToken = (user) => {
//     return jwt.sign({ user }, 'jwtToken', { expiresIn: '70h' });
// }

const encryptPass=async(password)=>{
    console.log(password,"==>")
       let encpass=await bcrypt.hashSync(password, saltRounds,)
       return encpass

}

async function checkUser(pass,hash) {
   console.log(pass,hash,"==>")
    const match = await bcrypt.compareSync(pass, hash);
    // console.log(match)
     return match
    //...
}


module.exports = {

    encryptPass,checkUser
}

