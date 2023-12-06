import React from "react";
import { Table } from "antd";
import { getSession } from "next-auth/client";

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

  if (!session) {
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
    },
  };
}
export default CashCut;
