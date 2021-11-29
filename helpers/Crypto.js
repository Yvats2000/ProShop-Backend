const bcrypt = require('bcrypt');
const saltRounds = 2;



const encryptPass=async(password)=>{
    console.log(password,"==>")
       let encpass=await bcrypt.hash(password, saltRounds,)
       return encpass

}

async function checkUser(pass,hash) {

    const match = await bcrypt.compare(pass, hash);
    console.log(match)
     return match
    //...
}

module.exports={
    encryptPass,checkUser
}


