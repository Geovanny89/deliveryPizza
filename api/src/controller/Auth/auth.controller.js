
const User = require('../../models/User');
const { validateResult } = require('../../utils/handleValidators');

const register = async (req, res) => {
    try {
        
        const {name,lastName,identity,email,password,phone,adress}= req.body;
        
        const newUser = await User({
            name,
            lastName,
            identity,
            email,
            password,
            phone,
            adress,

        });

        // Guardar el nuevo usuario en la base de datos
        await newUser.save();

        // Devolver una respuesta exitosa
        res.status(201).send(newUser)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al registrar el usuario' });
    }
};

module.exports = {
    register
};
