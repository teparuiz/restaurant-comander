import React, { useEffect, useState } from "react";
import Input from "../form/Input";
import { Button } from "../form/Button";
import { useCashCut } from "@teparuiz69/context/cashcut-context";

const SalesRecordCollapse = () => {
  const { getSales, saveSales } = useCashCut();
  const [isEdit, setIsEdit] = useState(true);
  const [salesRecord, setSalesRecord] = useState(0);
  const [initCash, setInitCash] = useState(1000);
  const [endCash, setEndCash] = useState(1000);
  const [comments, setComments] = useState("");

  const _save = () => {
    const obj = {
      salesRecord: parseFloat(salesRecord),
      initCash,
      endCash,
      comments,
      active: true,
      save: true,
    };

    saveSales(obj);
    setIsEdit(false);
  };

  useEffect(() => {
    if (getSales.active && getSales.save) {
      setIsEdit(false);
      setComments(getSales.comments);
      setSalesRecord(getSales.salesRecord);
      setInitCash(getSales.initCash);
      setEndCash(getSales.endCash);
    } else {
      setIsEdit(true);
    }
  }, [getSales]);

  useEffect(() => {
    if (isEdit) {
      saveSales({
        ...getSales,
        save: false,
      });
    }
  }, [isEdit]);

  return (
    <div className="container_table_card">
      <h3> Ventas </h3>

      {isEdit ? (
        <div className="row">
          <div className="d-flex col">
            <div className="col col-xs-12 col-md-6 col-lg-3 p-3">
              <Input
                value={salesRecord}
                onChange={setSalesRecord}
                type="number"
                placeholder="Ingresa la venta KYTE del día"
                title="Venta KYTE"
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
                value={comments}
                onChange={setComments}
                placeholder="Añade los comentarios"
                title="Comentarios"
              />
            </div>
            {/* <div className="col col-xs-12 col-md-6 col-lg-3 p-3">
          <Input
            value={yesterdayCash}
            onChange={setYesterdayCash}
            placeholder="Ingresa la caja final de ayer"
            title="Caja de ayer"
          />
        </div> */}
          </div>
          <div className="d-flex justify-content-end">
            <Button name="Guardar" onClick={_save} />
          </div>
        </div>
      ) : (
        <>
          <div className="col col-12">
            <div className="row">
              <div className="col col-md-4 col-lg-3">
                <b>Venta KYTE:</b>
                <p> {getSales.salesRecord}</p>
              </div>
              <div className="col col-md-4 col-lg-3">
                <b>Caja inicial:</b>
                <p> {getSales.initCash}</p>
              </div>
              <div className="col col-md-4 col-lg-3">
                <b>Caja Final:</b>
                <p> {getSales.endCash}</p>
              </div>
              <div className="col col-md-4 col-lg-3">
                <b>Comentarios:</b>
                <p> {getSales.comments}</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <Button name="Editar" onClick={() => setIsEdit(true)} />
          </div>
        </>
      )}
    </div>
  );
};

export default SalesRecordCollapse;
