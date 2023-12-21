import { Button } from "antd";
import React, { useState } from "react";
import { useCashCut } from "@teparuiz69/context/cashcut-context";
import ModalExpense from "../modal/Income/ModalExpense";

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

  return (
    <div className="container_table_card">
      <h3> Registro de egresos y pagos</h3>
      <div className="d-flex"></div>
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
