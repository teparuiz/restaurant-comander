import React from "react";
import { Table, Space, Tag, Button } from "antd";
import { getSession } from "next-auth/client";
import { HTTP } from "/config/http";
import { validationSessionUser } from "@teparuiz69/config/utils";
import { useRouter } from "next/router";

const columns = [
  {
    title: "Fecha",
    dataIndex: "date",
    key: "date",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Venta",
    dataIndex: "sale",
    key: "sale",
    render: (sale) => <a>$ {sale}</a>,
  },
  {
    title: "Usuario",
    dataIndex: "user",
    key: "user",
  },

  {
    title: "Acción",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Detalle</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    date: "22/01/2024",
    sale: 900,
    user: "Rodrigo",
  },
  {
    key: "2",
    date: "23/01/2024",
    sale: 900,
    user: "Victor",
  },
  {
    key: "3",
    date: "24/01/2024",
    sale: 900,
    user: "Melchor",
  },
  {
    key: "4",
    date: "25/01/2024",
    sale: 900,
    user: "Milka",
  },
];
const CashCut = (props) => {
  const router = useRouter();
  return (
    <div className="container-fluid">
      <h1> Corte de caja</h1>
      <div className="d-flex justify-content-end mb-3">
        <Button
          onClick={() => router.push("/cashcut/new")}
          icon={<i className="material-icons">add</i>}
        >
          {" "}
          Nuevo corte{" "}
        </Button>
      </div>
      <Table dataSource={data} columns={columns} />;
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
    if (user) validationSessionUser(user);
  } catch (err) {
    validationSessionUser(user);
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
