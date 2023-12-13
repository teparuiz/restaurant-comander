import { useState, useMemo } from "react";

const MenuContext = React.createContext();

export function CashCutProvider(props) {
  const [sales, setSales] = useState("");

  const reset = () => {
    setSales([]);
  };

  const save = (obj) => {
    if (obj && obj.sales) setSales({ ...obj.sales, active: true, save: true });
  };

  const value = useMemo(() => {
    return {
      save,
      reset: reset,
      getSales: sales,
      saveSales: setSales,
    };
  }, [sales]);

  return <MenuContext.Provider value={value} {...props} />;
}

export function useSales() {
  const context = React.useContext(MenuContext);
  return context;
}
