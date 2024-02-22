/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useState } from "react";
import { getSession } from "next-auth/client";
import { HTTP } from "../config/http";
import { Card } from "antd";
import EChart from "@teparuiz69/components/chart/EChart";
import LineChart from "@teparuiz69/components/chart/LineChart";

function Home() {
  return (
    <>
      <div className="layout-content">
        <h3> Hola, Bienvenido </h3>
        <div className="row">
          <div className="col">
            <Card
              title="Venta de ayer"
              bordered={false}
              style={{
                width: 300,
              }}
            >
              <p>$800</p>
            </Card>
          </div>
          <div className="col">
            <Card
              title="Venta de la semana"
              bordered={false}
              style={{
                width: 300,
              }}
            >
              <p>$5000</p>
            </Card>
            
          </div>
          <div className="col">
          <Card
              title="Venta del mes"
              bordered={false}
              style={{
                width: 300,
              }}
            >
              <p>$20000</p>
            </Card>
          </div>
        </div>
        <div className="row">
          <LineChart />

        </div>
      </div>
    </>
  );
}

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

  return {
    props: {
      session,
      accessToken: session?.accessToken,
      user: user,
    },
  };
}

export default Home;
