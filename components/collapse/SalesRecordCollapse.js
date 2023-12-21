import React, { useState } from "react";
import Input from "../form/Input";
import { Button } from "antd";

const SalesRecordCollapse = () => {
  const [salesRecord, setSalesRecord] = useState("");

  return (
    <div className="container_table_card">
      <h3> Ventas </h3>

      <div className="col col-lg-4">
        <Input
          value={salesRecord}
          onChange={setSalesRecord}
          placeholder="Ingresa la venta del día"
          title="Venta del día"
        />
      </div>
      <div className="d-flex justify-content-end">
        <Button type="primary" onClick={() => setSalesRecord("")}>
          Guardar
        </Button>
      </div>
    </div>
  );
};

export default SalesRecordCollapse;
