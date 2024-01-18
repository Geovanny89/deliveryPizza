import React, { useEffect } from 'react'
import NavbarUser from '../NavBar/NavbarUser'
import Card from '../../Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../../Redux/Action';

export default function HomeUser() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state)=> state.allProducts)

  useEffect(()=>{
    dispatch(getAllProduct())
  },[dispatch])
  return (
    <div>
        <NavbarUser/>
        {allProducts?.map((el, index) => (
        // Agrega el 'key' prop si 'el' tiene un identificador único
        <Card key={index} name={el.name} description={el.description} image={el.image} price={el.price} stock={el.stock} />
      ))}
    </div>
  )
}
