import React from "react";
import { useOrder } from "@teparuiz69/context/orders-context";
import { findList } from "@teparuiz69/config/utils";
import { burguers } from "@teparuiz69/config/const";

const ListOrder = (props) => {
  const { getOrder } = useOrder();

  return (
    <div>
      <h1>Lista de órdenes</h1>

      <div className="row">
        <div className="col-12">
          <table>
            <thead>
              <tr>
                <th>Orden</th>
                <th>Producto</th>
                <th>Descripción</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {getOrder.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{findList(burguers, item.burguer)}</td>
                  <td>{item.description}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListOrder;
