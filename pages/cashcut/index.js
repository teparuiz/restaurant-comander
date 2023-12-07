import React from "react";
import { Table } from "antd";
import { getSession } from "next-auth/client";
import { HTTP } from "/config/http";

const data = [{}];
const CashCut = (props) => {
  return (
    <div>
      <h1> Corte de caja</h1>
      <Table dataSource={data} />
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
export default CashCut;
