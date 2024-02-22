import React, { useEffect, useState } from "react";
import IncomeCard from "../card/IncomeCard";
import ModalIncome from "../modal/Income/ModalIncome";
import { useCashCut } from "../../context/cashcut-context";
import { findList, payMethodLabel } from "../../config/utils";
import { Button } from "../form/Button";
import { v4 as uuidv4 } from "uuid";
import { payMethod } from "@teparuiz69/config/const";

const IncomeRecordCollapse = () => {
  const { getIncome, saveIncome, getTotalCash, getTickets, getCoins } =
    useCashCut();
  const [visible, setVisible] = useState({
    visible: false,
    data: false,
  });

  useEffect(() => {
    if (getTickets.save && getCoins.save) {
      const obj = {
        id: uuidv4(),
        description: 3,
        total: getTotalCash,
      };

      let idx = getIncome.map((i) => i.id).indexOf(obj.id);

      if (idx === -1) saveIncome([...getIncome, obj]);
      else
        saveIncome([
          ...getIncome.slice(0, idx),
          obj,
          ...getIncome.slice(idx + 1),
        ]);
    }
  }, [getTickets, getCoins, getTotalCash]);

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
      <div className="row">
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
