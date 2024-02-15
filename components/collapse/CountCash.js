import { Button } from "../form/Button";
import React, { useEffect, useState } from "react";
import Input from "../form/Input";
import { useCashCut } from "@teparuiz69/context/cashcut-context";

const CountCash = (props) => {
  const { saveTickets, saveCoins, getCoins, getTickets } = useCashCut();

  const [bills, setBills] = useState({
    bill1000: 0,
    bill500: 0,
    bill200: 0,
    bill100: 0,
    bill50: 0,
    bill20: 0,
  });

  const [coins, setCoins] = useState({
    coins20: 0,
    coins10: 0,
    coins5: 0,
    coins2: 0,
    coins1: 0,
    coins05: 0,
    other: 0,
  });

  const [isEditBills, setIsEditBills] = useState(true);
  const [isEditCoins, setIsEditCoins] = useState(true);

  const _saveBills = () => {
    const obj = {
      bill1000: parseFloat(bills.bill1000),
      bill500: parseFloat(bills.bill500),
      bill200: parseFloat(bills.bill200),
      bill100: parseFloat(bills.bill100),
      bill50: parseFloat(bills.bill50),
      bill20: parseFloat(bills.bill20),
      active: true,
      save: true,
    };

    saveTickets(obj);
    setIsEditBills(false);
  };

  const _saveCoins = () => {
    const obj = {
      coins20: parseFloat(coins.coins20),
      coins10: parseFloat(coins.coins10),
      coins5: parseFloat(coins.coins5),
      coins2: parseFloat(coins.coins2),
      coins1: parseFloat(coins.coins1),
      coins05: parseFloat(coins.coins05),
      other: parseFloat(coins.other),

      active: true,
      save: true,
    };

    saveCoins(obj);
    setIsEditCoins(false);
  };

  useEffect(() => {
    if (getCoins.active && getCoins.save) {
      setIsEditCoins(false);
      setCoins(getCoins);
    } else {
      setIsEditCoins(true);
    }
  }, [getCoins]);

  useEffect(() => {
    if (getTickets.active && getTickets.save) {
      setIsEditBills(false);
      setBills(getTickets);
    } else {
      setIsEditBills(true);
    }
  }, [getTickets]);

  useEffect(() => {
    if (isEditBills) {
      saveTickets({
        getTickets,
        save: false,
      });
    }
  }, [isEditBills]);

  useEffect(() => {
    if (isEditCoins) {
      saveCoins({
        getCoins,
        save: false,
      });
    }
  }, [isEditCoins]);

  const _summaryBills = () => {
    let total =
      bills.bill1000 * 1000 +
      bills.bill500 * 500 +
      bills.bill200 * 200 +
      bills.bill100 * 100 +
      bills.bill50 * 50 +
      bills.bill20 * 20;

    return total || 0;
  };

  const _summaryCoins = () => {
    let total =
      coins.coins20 * 20 +
      coins.coins10 * 10 +
      coins.coins5 * 5 +
      coins.coins2 * 2 +
      coins.coins1 * 1 +
      coins.coins05 * 0.5 +
      coins.other;

    return total || 0;
  };

  return (
    <div className="container_table_card">
      <h3> Arqueo caja </h3>
      {isEditBills ? (
        <div className="row mb-2">
          <div className="d-flex justify-content-between">
            <Input
              value={bills.bill1000}
              onChange={(bill1000) =>
                setBills({
                  ...bills,
                  bill1000,
                })
              }
              title="Billete $1000"
            />
            <Input
              value={bills.bill500}
              onChange={(bill500) =>
                setBills({
                  ...bills,
                  bill500,
                })
              }
              title="Billete $500"
            />
            <Input
              value={bills.bill200}
              onChange={(bill200) =>
                setBills({
                  ...bills,
                  bill200,
                })
              }
              title="Billete $200"
            />
            <Input
              value={bills.bill100}
              onChange={(bill100) =>
                setBills({
                  ...bills,
                  bill100,
                })
              }
              title="Billete $100"
            />
            <Input
              value={bills.bill50}
              onChange={(bill50) =>
                setBills({
                  ...bills,
                  bill50,
                })
              }
              title="Billete $50"
            />
            <Input
              value={bills.bill20}
              onChange={(bill20) =>
                setBills({
                  ...bills,
                  bill20,
                })
              }
              title="Billete $20"
            />
            <Button name="Guardar Billetes" onClick={_saveBills} />
          </div>
        </div>
      ) : (
        <div className="col col-12">
          <div className="row mt-4">
            <div className="col col-4 col-md-4 col-lg-4">
              <b>Billete $1000</b>
              <p>
                {getTickets.bill1000} x $ 1000 =
                <b> $ {getTickets.bill1000 * 1000}</b>
              </p>
            </div>
            <div className="col col-4 col-md-4 col-lg-4">
              <b>Billete $500</b>
              <p>
                {getTickets.bill500} x $ 500 =
                <b> $ {getTickets.bill500 * 500}</b>
              </p>
            </div>
            <div className="col col-4 col-md-4 col-lg-4">
              <b>Billete $200</b>
              <p>
                {getTickets.bill200} x $ 200 =
                <b> $ {getTickets.bill200 * 200}</b>
              </p>
            </div>
            <div className="col col-4 col-md-4 col-lg-4">
              <b>Billete $100</b>
              <p>
                {getTickets.bill100} x $ 100 =
                <b> $ {getTickets.bill100 * 100}</b>
              </p>
            </div>
            <div className="col col-4 col-md-4 col-lg-4">
              <b>Billete $50</b>
              <p>
                {getTickets.bill50} x $ 50 =<b> $ {getTickets.bill50 * 50}</b>
              </p>
            </div>
            <div className="col col-4 col-md-4 col-lg-4">
              <b>Billete $20</b>
              <p>
                {getTickets.bill20} x $ 20 =<b> $ {getTickets.bill20 * 20}</b>
              </p>
            </div>
            <div className="d-flex justify-content-end">
              <Button name="Editar" onClick={() => setIsEditBills(true)} />
            </div>
          </div>
        </div>
      )}

      <div className="divider"></div>

      {isEditCoins ? (
        <div className="row mb-5">
          <div className="d-flex justify-content-between">
            <Input
              value={coins.coins20}
              onChange={(coins20) =>
                setCoins({
                  ...coins,
                  coins20,
                })
              }
              title="Moneda $20"
            />

            <Input
              value={coins.coins10}
              onChange={(coins10) =>
                setCoins({
                  ...coins,
                  coins10,
                })
              }
              title="Moneda $10"
            />

            <Input
              value={coins.coins5}
              onChange={(coins5) =>
                setCoins({
                  ...coins,
                  coins5,
                })
              }
              title="Moneda $5"
            />

            <Input
              value={coins.coins1}
              onChange={(coins1) =>
                setCoins({
                  ...coins,
                  coins1,
                })
              }
              title="Moneda $1"
            />

            <Input
              value={coins.coins05}
              onChange={(coins05) =>
                setCoins({
                  ...coins,
                  coins05,
                })
              }
              title="Moneda $0.50"
            />

            <Input
              value={coins.other}
              onChange={(other) =>
                setCoins({
                  ...coins,
                  other,
                })
              }
              title="Otro"
            />

            <Button name="Guardar monedas" onClick={_saveCoins} />
          </div>
        </div>
      ) : (
        <div className="col col-12">
          <div className="row mt-4">
            <div className="col col-4 col-md-4 col-lg-4">
              <b>Moneda $20</b>
              <p>
                {getCoins.coins20} x $ 20 =<b> $ {getCoins.coins20 * 20}</b>
              </p>
            </div>
            <div className="col col-4 col-md-4 col-lg-4">
              <b>Moneda $10</b>
              <p>
                {getCoins.coins10} x $ 10 =<b> $ {getCoins.coins10 * 10}</b>
              </p>
            </div>
            <div className="col col-4 col-md-4 col-lg-4">
              <b>Moneda $5</b>
              <p>
                {getCoins.coins5} x $ 5 = <b>$ {getCoins.coins5 * 5}</b>
              </p>
            </div>
            <div className="col col-4 col-md-4 col-lg-4">
              <b>Moneda $2</b>
              <p>
                {getCoins.coins2} x $ 2 = <b>$ {getCoins.coins2 * 2}</b>
              </p>
            </div>
            <div className="col col-4 col-md-4 col-lg-4">
              <b>Moneda $1</b>
              <p>
                {getCoins.coins1} x $ 1 = <b>$ {getCoins.coins1 * 1}</b>
              </p>
            </div>
            <div className="col col-4 col-md-4 col-lg-4">
              <b>Moneda $0.50</b>
              <p>
                {getCoins.coins05} x $ 0.50 =<b> $ {getCoins.coins05 * 0.5}</b>
              </p>
            </div>
            <div className="col col-4 col-md-4 col-lg-4">
              <b>Otro</b>
              <p>$ {getCoins.other}</p>
            </div>
            <div className="d-flex justify-content-end">
              <Button name="Editar" onClick={() => setIsEditCoins(true)} />
            </div>
          </div>
        </div>
      )}

      <h5>
        <b>Total Billetes: $ {_summaryBills()}</b>
      </h5>
      <h5>
        <b>Total monedas: $ {_summaryCoins()}</b>
      </h5>
      <h5>
        <b>Total: $ {_summaryBills() + _summaryCoins()}</b>
      </h5>
    </div>
  );
};

export default CountCash;
