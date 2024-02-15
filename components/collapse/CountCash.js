import { Button } from "../form/Button";
import React, { useState } from "react";
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
    coins2:0, 
    coins1: 0,
    coins05: 0,
    other: 0,
  });

  const save = () => {
    saveTickets(data); // Suponiendo que `data` tiene la información que quieres guardar para los billetes
    saveCoins(data); // Suponiendo que `data` tiene la información que quieres guardar para las monedas
  };

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
      <div className="row mb-5">
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
            value={bills.bill20}
            onChange={(bill20) =>
              setBills({
                ...bills,
                bill20,
              })
            }
            title="Billete $20"
          />
          <Button name="Guardar Billetes" />
        </div>
      </div>

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

          <Button name="Guardar monedas"  />
        </div>
      </div>

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
