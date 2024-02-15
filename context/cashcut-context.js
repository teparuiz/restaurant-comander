import React, { useState, useMemo } from "react";

const MenuContext = React.createContext();

export function CashCutProvider(props) {
  const initialIncome = {
    active: false,
    save: false,
  };
  const [sales, setSales] = useState({});
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [shipments, setShipments] = useState([]);
  const [tickets, setTickets] = useState({});
  const [coins, setCoins] = useState({});

  const reset = () => {
    setSales({});
    setIncomes([]);
    setExpenses([]);
    setShipments([]);
    setTickets({});
    setCoins({});
  };

  const save = (obj) => {
    if (obj && obj.sales) setSales({ ...obj.sales, active: true, save: true });

    if (obj && obj.income) setIncomes(obj.income);

    if (obj && obj.expense) setExpenses(obj.expense);

    if (obj && obj.shipments) setShipments(obj.shipments);

    if (obj && obj.tickets) setTickets({ ...obj.tickets, active: true, save: true });

    if (obj && obj.coins) setCoins({ ...obj.coins, active: true, save: true });
  };

  const value = useMemo(() => {
    return {
      save,
      reset: reset,
      getSales: sales,
      saveSales: setSales,
      getIncome: incomes,
      saveIncome: setIncomes,
      getExpense: expenses,
      saveExpense: setExpenses,
      getShipments: shipments,
      saveShipments: setShipments,
      getTickets: tickets,
      saveTickets: setTickets,
      getCoins: coins,
      saveCoins: setCoins,
    };
  }, [sales, incomes, reset, expenses, shipments, coins, tickets]);

  return <MenuContext.Provider value={value} {...props} />;
}

export function useCashCut() {
  const context = React.useContext(MenuContext);
  return context;
}
