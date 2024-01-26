import React, { useState } from "react";
import Input from "../form/Input";
import { Button } from "../form/Button";

const SalesRecordCollapse = () => {
  const [salesRecord, setSalesRecord] = useState("");
  const [initCash, setInitCash] = useState(0);
  const [endCash, setEndCash] = useState(0);
  const [yesterdayCash, setYesterdayCash] = useState(0);

  const _save = () => {
    const obj = {
      salesRecord,
      initCash,
      endCash,
      yesterdayCash,
    };

    console.log(obj);
  };

  return (
    <div className="container_table_card">
      <h3> Ventas </h3>

      <div className="d-flex col">
        <div className="col col-xs-12 col-md-6 col-lg-3 p-3">
          <Input
            value={salesRecord}
            onChange={setSalesRecord}
            placeholder="Ingresa la venta KYTE del día"
            title="Venta KITE"
          />
        </div>
        <div className="col col-xs-12 col-md-6 col-lg-3 p-3">
          <Input
            value={initCash}
            onChange={setInitCash}
            placeholder="Ingresa la caja inicial del dia"
            title="Caja Inicial"
          />
        </div>
        <div className="col col-xs-12 col-md-6 col-lg-3 p-3">
          <Input
            value={endCash}
            onChange={setEndCash}
            placeholder="Ingresa la caja final del día"
            title="Caja Final"
          />
        </div>
        <div className="col col-xs-12 col-md-6 col-lg-3 p-3">
          <Input
            value={yesterdayCash}
            onChange={setYesterdayCash}
            placeholder="Ingresa la caja final de ayer"
            title="Caja de ayer"
          />
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <Button name="Guardar" onClick={_save} />
      </div>
    </div>
  );
};

export default SalesRecordCollapse;
