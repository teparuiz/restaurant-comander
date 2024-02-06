import React, { useEffect, useState } from "react";
import { Table, Space } from "antd";
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

  return (
    <div className="container-fluid">
      <h1> Detaller de corte de caja</h1>
      <pre> {JSON.stringify(props.data)}</pre>
    </div>
  );
};
export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { cashcutId } = context.query;
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
    data = await HTTP(
      "GET",
      `/api/v1/cash-cut/${cashcutId}`,
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
