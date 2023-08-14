import React from "react";
import { useOrder } from "@teparuiz69/context/orders-context";
import { findList } from "@teparuiz69/config/utils";
import { burguers } from "@teparuiz69/config/const";
const ListOrder = (props) => {
  const { getOrder } = useOrder();

  return (
    <div>
      <h1> Lista de ordenes</h1>
      

      {getOrder.map((item, index) => (
        <div key={index}>
          <div>{findList(burguers, item.burguer)}</div>
          <div>{item.description}</div>
          <div>{item.quantity}</div>
        </div>
      ))}
    </div>
  );
};

export default ListOrder;
