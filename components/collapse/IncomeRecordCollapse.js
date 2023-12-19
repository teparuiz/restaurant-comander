import React, { useState } from "react";
import Input from "../form/Input";
import { Button } from "antd";
import IncomeCard from "../card/IncomeCard";
import ModalIncome from "../modal/Income/ModalIncome";
import { useCashCut } from "../../context/cashcut-context";
import { findList, payMethodLabel } from "../../config/utils";
import { payMethod } from "@teparuiz69/config/const";

const IncomeRecordCollapse = () => {
  const { getIncome, saveIncome } = useCashCut();
  const [incomeRecord, setIncomeRecord] = useState("");
  const [visible, setVisible] = useState({
    visible: false,
    data: false,
  });

  const _onClose = (reload = false) => {
    setVisible({ visible: false, data: false });

    if (reload) {
      let idx = getIncome.map((i) => i.id).indexOf(reload.id);
      if (idx === -1) saveIncome([...getIncome, reload]);
      else
        saveIncome([
          ...getIncome.slice(0, idx),
          reload,
          ...getIncome.slice(idx + 1),
        ]);
    }
  };

  return (
    <div className="container_table_card">
      <h3> Registro de ingresos</h3>

      <div className="d-flex">
        {getIncome.map((i, idx) => (
          <IncomeCard description={findList(payMethod, i.description)} total={i.total} key={idx} />
        ))}
      </div>
      <div className="d-flex justify-content-end">
        <Button
          type="primary"
          onClick={() => setVisible({ visible: true, data: false })}
        >
          Añadir ingreso
        </Button>
      </div>
      <ModalIncome
        visible={visible.visible}
        data={visible.data}
        onClose={_onClose}
      />
    </div>
  );
};

export default IncomeRecordCollapse;
