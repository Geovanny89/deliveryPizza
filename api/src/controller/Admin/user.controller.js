const User = require("../../models/User")

const allUser = async(req,res)=>{
    try {
        const users = await User.find()
        if(!users){
            res.status(404).send("No existen Usuarios")
            return
        }
        res.status(200).send(users)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error al registrar el usuario' });
    }
}

module.exports={
    allUser
}