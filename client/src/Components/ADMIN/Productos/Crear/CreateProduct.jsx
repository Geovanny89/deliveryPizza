import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function CreateProduct() {
    const dispatch= useDispatch();
    const products = useState((state)=>state.allProducts)
    const [formData, setFormData]=useState({
        name:'',
        price:'',
        description:'',
        stock:'',
        image: req.body.image || '',
        tipo: tipoId,
    })

  return (
    <div>CreateProduct</div>
  )
}
