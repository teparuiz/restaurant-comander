import { Button } from "antd";
import React, { useState } from "react";
import { useCashCut } from "@teparuiz69/context/cashcut-context";
import ModalExpense from "../modal/Income/ModalExpense";
import ExpenseCard from "../card/ExpenseCard";

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
      <h3> Pagos y egresos</h3>
      <div className="d-flex">
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
      <div className="d-flex justify-content-end">
        <Button
          type="primary"
          onClick={() =>
            setVisible({
              visible: true,
              data: false,
            })
          }
        >
          Añadir egreso
        </Button>
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
