import React from 'react'
import { useOrder } from '@teparuiz69/context/orders-context'
const ListOrder = (props) => {

    const { getOrder } = useOrder()
  return (
    <div>
      <h1> Lista de ordenes</h1>
      {getOrder.map((item, index)=> item.hamburguer)}
    </div>
  )
}

export default ListOrder
