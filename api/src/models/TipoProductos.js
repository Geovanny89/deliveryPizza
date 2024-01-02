const {mongoose} = require('mongoose')

const tipoProductosSchema = mongoose.Schema({
    name:{
        type:String,
        requiere: true
    },
})
module.exports= mongoose.model('TipoProductos',tipoProductosSchema);