import React, { useEffect, useState } from "react";
import { Table, Space, Tooltip } from "antd";
import { getSession } from "next-auth/client";
import { HTTP } from "/config/http";
import { validationSessionUser } from "@teparuiz69/config/utils";
import { useRouter } from "next/router";
import { Button } from "@teparuiz69/components/form/Button";

const CashCut = (props) => {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.data) setData(props.data);
  }, [props.data]);

  const columns = [
    {
      title: "Fecha",
      dataIndex: "date",
      key: "date",
      render: (date) => <a>{date}</a>,
    },
    {
      title: "Venta",
      dataIndex: "kyteSells",
      key: "kyteSells",
      render: (kyteSells) => <a>$ {kyteSells}</a>,
    },
    {
      title: "Usuario",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Acciones",
      dataIndex: "action",
      key: "action",
      render: (_, record, index) => (
        <Space size="middle" key={`action_${record.id}`}>
          <Tooltip title="Ver detalle">
            <button
              className="btn btn-light d-flex align-items-center"
              onClick={() => _goToDetail(record.id)}
            >
              <i className="material-icons">arrow_forward</i>
            </button>
          </Tooltip>
        </Space>
      ),
    },
  ];

  const _goToDetail = (id) => {
    router.push(`/cashcut/${id}`);
  };

  return (
    <div className="container-fluid">
      <h1> Corte de caja</h1>
      <div className="d-flex justify-content-end mb-3">
        <Button
          name="Nuevo corte"
          onClick={() => router.push("/cashcut/new")}
          icon=""
        />
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
    user = await HTTP(
      "GET",
      `/api/v1/users/${session.userId}`,
      {},
      session.accessToken
    );
  } catch (err) {
    return {
      redirect: {
        destination: "/account/login",
        permanent: false,
      },
    };
  }

  let data;

  try {
    data = await HTTP("GET", `/api/v1/cash-cut`, {}, session.accessToken);
  } catch (err) {
    return {
      redirect: {
        destination: "/account/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
      accessToken: session?.accessToken,
      user: user,
      data: data,
    },
  };
}
export default CashCut;
