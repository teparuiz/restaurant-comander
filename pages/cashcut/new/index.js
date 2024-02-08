import React from "react";
import { getSession } from "next-auth/client";
import { HTTP } from "/config/http";
import { validationSessionUser } from "@teparuiz69/config/utils";
import SalesRecordCollapse from "@teparuiz69/components/collapse/SalesRecordCollapse";
import IncomeRecordCollapse from "@teparuiz69/components/collapse/IncomeRecordCollapse";
import ExpensesRecordCollapse from "@teparuiz69/components/collapse/ExpensesRecordCollapse";
import CountCash from "@teparuiz69/components/collapse/CountCash";
import { Button } from "antd";
import ShipmentsCollapse from "@teparuiz69/components/collapse/ShipmentsCollapse";

const NewCashCut = (props) => {
  return (
    <div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <SalesRecordCollapse />
      </div>
      <div className="divider"></div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <ShipmentsCollapse />
      </div>
      <div className="divider"></div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <ExpensesRecordCollapse />
      </div>

      <div className="divider"></div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <IncomeRecordCollapse />
      </div>
      <div className="divider"></div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <CountCash />
      </div>
      <div className="divider"></div>
      <div className="row sticky_bottom force_sticky  mt-4">
        <div className="col col-12">
          <div className="cashcut_footer">
            <div className="d-flex-column">
              <p>Esperado: $ 6,249.50</p>
              <p>Creditos: $ 198.0</p>
              <p>Efectivo total: $6, 051.50</p>
              <p> Diferencia: $ 48.00 </p>{" "}
              {`//**TODO diferencia si es menor debbe estar en rojo y si es mayor en warning, si queda cero es ok o sea en verde */`}
            </div>
            <Button title="Guardar" type="primary" />
          </div>
        </div>
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
export default NewCashCut;
