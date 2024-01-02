const {mongoose,Schema} = require('mongoose')

const productosSchema = mongoose.Schema({
    name:{
        type:String,
        requiere: true
    },
    price:{
        type:Number,
        require:true
    },
    amount:{
        type:Number,
        require: true
    },
    image:{
        type:String
    },
    tipo:{ type: Schema.Types.ObjectId , ref: 'TipoProductos',
    required: true }
})
module.exports= mongoose.model('Productos',productosSchema);