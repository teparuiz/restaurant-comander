import React from "react";
import { getSession } from "next-auth/client";
import { HTTP } from "/config/http";
import { validationSessionUser } from "@teparuiz69/config/utils";
import SalesRecordCollapse from "@teparuiz69/components/collapse/SalesRecordCollapse";
import IncomeRecordCollapse from "@teparuiz69/components/collapse/IncomeRecordCollapse";
import ExpensesRecordCollapse from "@teparuiz69/components/collapse/ExpensesRecordCollapse";
import CountCash from "@teparuiz69/components/collapse/CountCash";
import { Button } from "@teparuiz69/components/form/Button";
import ShipmentsCollapse from "@teparuiz69/components/collapse/ShipmentsCollapse";
import { useCashCut } from "@teparuiz69/context/cashcut-context";

const NewCashCut = (props) => {
  const {
    getTickets,
    getShipments,
    getSales,
    getCoins,
    getExpense,
    getIncome,
    getTotalCash,
  } = useCashCut();


  const _save = () => {
    const getCredit = getIncome.filter((i) => i.description !==  3).reduce((a, b) =>a + parseFloat(b.total), 0 ) 


    const obj = {
    comments: getSales.comments,
    user: props.user.firstName ,
    endDay: getSales.endCash,
    startDay: getSales.initCash,
    credit: getCredit,
    diffCashCredit:  getTotalCash - getCredit,
    cash: getTotalCash ,
    total: getSales.salesRecord,
    kyteSells: getSales.salesRecord ,
    date:new Date(),
    shipments: getShipments,
    incomes:getIncome,
    expenses:getExpense,
    tickets:getTickets,
    coins:getCoins,     

    };

    console.log(obj);
  };

  const _summaryExpense = () => {
    const expenses = getExpense.reduce((a, b) => a + parseFloat(b.total), 0);

    return expenses;
  };

  const _summaryIncome = () => {
    const incomes = getIncome.reduce((a, b) => a + parseFloat(b.total), 0);
    return incomes;
  };


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
        <CountCash />
      </div>
      <div className="divider"></div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-5">
        <IncomeRecordCollapse />
      </div>
      <div className="row sticky_bottom force_sticky  p-5">
        <div className="d-flex justify-content-between align-item-center">
          <div className="">
            <h5>
              VENTA TOTAL: <b>${getSales.salesRecord} </b>
            </h5>
            <h5>
              Gastos: <b>$ {_summaryExpense()} </b>
            </h5>
            <h5>
              Ingresos:<b>$ {_summaryIncome()}</b>{" "}
            </h5>
            <h5>
              Efectivo total: <b> $ {getTotalCash} </b> 
            </h5>
            <h5>
              Caja: <b>$ {getSales.endCash}</b>
            </h5>
          </div>
          <div>
            <Button name="Guardar corte de caja" onClick={_save} />
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
