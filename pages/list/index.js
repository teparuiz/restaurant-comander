import React from "react";
import { useOrder } from "@teparuiz69/context/orders-context";
import { findList } from "@teparuiz69/config/utils";
import { burguers } from "@teparuiz69/config/const";
import { HTTP } from "/config/http";
import { getSession } from "next-auth/client";
import { validationSessionUser } from "@teparuiz69/config/utils";
import { Button } from "antd";
import { useRouter } from "next/router";
const ListOrder = (props) => {
  const router = useRouter();
  const { getOrder, saveOrder } = useOrder();

  const _delete = (index) => {
    saveOrder([...getOrder.slice(0, index), ...getOrder.slice(index + 1)]);
  };


  const _goList = () => {
    router.push("/orders");
  };

  const _getTotal = () => {
    const quantityTotal = getOrder
      .map((i) => i.quantity)
      .reduce((a, b) => a + b, 0);
    return quantityTotal * 89;
  };

  return (
    <div className="container">
      <h1>Lista de órdenes</h1>
      <div className="col">
        <Button onClick={_goList}>Regresar</Button>
      </div>

      <div className="row">
        <div className="col-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Orden</th>
                <th>Producto</th>
                <th>Notas</th>
                <th> Acciones </th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {getOrder.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{findList(burguers, item.burguer)}</td>
                  <td>{item.notes}</td>
                  <td>
                  
                    <Button onClick={() => _delete(index)}>
                      <i className="material-icons">delete</i>
                    </Button>
                  </td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="container">
        <h4>
          Total: <p> $ {_getTotal()}</p>
        </h4>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  let user;

  if (!session) {
    return {
      redirect: {
        destination: "/account/login",
        permanent: false,
      },
    };
  }



  try {
    user = await HTTP("GET", "/user", {}, session.accessToken);
  } catch (err) {
    console.error("Error al obtener al usuario", err);
  }

  return {
    props: {
      session,
      accessToken: session?.accessToken,
      user: user?.data,
    },
  };
}
export default ListOrder;
