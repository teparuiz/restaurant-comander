import React, { useState } from "react";
import { useCashCut } from "@teparuiz69/context/cashcut-context";
import ModalExpense from "../modal/Income/ModalExpense";
import ExpenseCard from "../card/ExpenseCard";
import { Button } from "../form/Button";

const ExpensesRecordCollapse = (props) => {
  const { getExpense, saveExpense } = useCashCut();
  const [visible, setVisible] = useState({
    visible: false,
    data: false,
  });

  const _onClose = (reload = false) => {
    setVisible({
      visible: false,
      data: false,
    });

    if (reload) {
      let idx = getExpense.map((item) => item.id).indexOf(reload.id);

      if (idx === -1) saveExpense([...getExpense, reload]);
      else
        saveExpense([
          ...getExpense.slice(0, idx),
          reload,
          ...getExpense.slice(idx + 1),
        ]);
    }
  };

  const _trash = (index) => {
    saveExpense([...getExpense.slice(0, index), ...getExpense.slice(index + 1)]);
  };

  return (
    <div className="container_table_card">
      <h3>Egresos</h3>
      <div className="d-flex">
        <div className="col-6">
          <h5>Gastos caja</h5>
        {getExpense.map((item, index) => (
          <ExpenseCard
            total={item.total}
            provider={item.provider}
            description={item.description}
            key={index}
            trash={() => _trash(index)}
            onEdit={() => setVisible({ visible: true, data: item })}
          />
        ))}
        </div>
        <div className="col-6">
          <h5>Envios</h5>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <Button
          name="Añadir egreso"
          onClick={() => setVisible({ visible: true, data: false })}
        
        />
      </div>
      <ModalExpense
        visible={visible.visible}
        data={visible.data}
        onClose={_onClose}
      />
    </div>
  );
};

export default ExpensesRecordCollapse;
