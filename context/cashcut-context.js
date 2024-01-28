import React, { useState, useMemo } from "react";

const MenuContext = React.createContext();

export function CashCutProvider(props) {
  const initialIncome = {
    active: false,
    save: false,
  };

  const [sales, setSales] = useState("");
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const [shipments, setShipments] = useState([])

  const reset = () => {
    setSales([]);
    setIncome([]);
    setExpense([]);
    setShipments([]);
  };

  const save = (obj) => {
    if (obj && obj.sales) setSales({ ...obj.sales, active: true, save: true });

    if (obj && obj.income) setIncome(obj.income);

    if (obj && obj.income) setExpense(obj.expense);

    if (obj && obj.shipments) setShipments(obj.shipments);
  };

  const value = useMemo(() => {
    return {
      save,
      reset: reset,
      getSales: sales,
      saveSales: setSales,
      getIncome: income,
      saveIncome: setIncome,
      getExpense: expense,
      saveExpense: setExpense,
      getShipments: shipments,
      saveShipments: setShipments,
    };
  }, [sales, income, reset, expense, shipments]);

  return <MenuContext.Provider value={value} {...props} />;
}

export function useCashCut() {
  const context = React.useContext(MenuContext);
  return context;
}
