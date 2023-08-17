import React from "react";
import { useOrder } from "@teparuiz69/context/orders-context";
import { findList } from "@teparuiz69/config/utils";
import { burguers } from "@teparuiz69/config/const";
import { HTTP } from "/config/http";
import { getSession } from "next-auth/react";
import { validationSessionUser } from "@teparuiz69/config/utils";
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

export async function getServerSideProps(context) {
  const {} = context.query;
  const session = await getSession(context);
  let user;
  if (!session)
    return {
      redirect: {
        destination: "/account/login",
        permanent: false,
      },
    };
  try {
    user = await HTTP("GET", "/list", {}, session.accessToken);
    if (validationSessionUser(user)) return validationSessionUser(user);
  } catch (err) {
    return validationSessionUser(err);
  }
  let data;
  try {
    data = await HTTP(
      "GET",
      `user/all`,
      { ...context.query },
      session?.accessToken
    );
  } catch (err) {
    return validationSessionUser(err);
  }

  return {
    props: {
      session: session,
      accessToken: session.accessToken,
      layout: "admin",
      user: user,
      data: data,
      params: {
        ...context.query,
        s,
      },
      rol: rol,
    },
  };
}

export default ListOrder;
