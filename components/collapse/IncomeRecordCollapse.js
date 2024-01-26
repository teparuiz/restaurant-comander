import React, { useState } from "react";
import IncomeCard from "../card/IncomeCard";
import ModalIncome from "../modal/Income/ModalIncome";
import { useCashCut } from "../../context/cashcut-context";
import { findList, payMethodLabel } from "../../config/utils";
import { payMethod } from "@teparuiz69/config/const";
import { Button } from "../form/Button";

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

  const _trash = (index) => {
    saveIncome([...getIncome.slice(0, index), ...getIncome.slice(index + 1)]);
  };

  return (
    <div className="container_table_card">
      <h3> Ingresos</h3>

      <div className="d-flex">
        {getIncome.map((i, idx) => (
          <IncomeCard
            description={findList(payMethod, i.description)}
            total={i.total}
            key={idx}
            trash={() => _trash(idx)}
            onEdit={() => setVisible({ visible: true, data: i })}
          />
        ))}
      </div>
      <div className="d-flex justify-content-end">
        <Button
          name="Añadir ingreso"
          onClick={() => setVisible({ visible: true, data: false })}
        
        />
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
