import { Button } from "antd";
import React, { useState } from "react";
import Input from "../form/Input";
import { Controller, useForm } from "react-hook-form";

const CountCash = (props) => {
  const [data, setData] = useState(0);
  const { control, handleSubmit, watch } = useForm();

  const save = (data) => {
    setData(data);
  };

  const _summaryBills = () => {
    let total =
      parseFloat(watch("500")) * 500 +
      parseFloat(watch("200")) * 200 +
      parseFloat(watch("100")) * 100 +
      parseFloat(watch("50")) * 50 +
      parseFloat(watch("20")) * 20;

    return total || 0;
  };

  const _summaryCoins = () => {
    let total =
      parseFloat(watch("coins20")) * 20 +
      parseFloat(watch("coins10")) * 10 +
      parseFloat(watch("coins5")) * 5 +
      parseFloat(watch("coins2")) * 2 +
      parseFloat(watch("coins1")) * 1 +
      parseFloat(watch("coins0.5")) * 0.5;

    return total || 0;
  };

  return (
    <div className="container_table_card">
      <h3> Conteo caja </h3>
      <div className="d-flex justify-content-around">
            <h5>Billetes</h5>
            <h5>Monedas</h5>
          </div>

      <form onSubmit={handleSubmit(save)}>
        <div className="d-flex">
         
          <div className="d-flex justify-content-between pt-2">
            <div className="d-flex flex-wrap justify-content-center">
              <Controller
                name="500"
                control={control}
                render={({ field }) => (
                  <Input
                    title="$ 500"
                    placeholder="Ingresa los billetes de 500"
                    {...field}
                  />
                )}
              />
              <Controller
                name="200"
                control={control}
                render={({ field }) => (
                  <Input
                    title="$ 200"
                    placeholder="Ingresa los billetes de 200"
                    {...field}
                  />
                )}
              />
              <Controller
                name="100"
                control={control}
                render={({ field }) => (
                  <Input
                    title="$ 100"
                    placeholder="Ingresa los billetes de 100"
                    {...field}
                  />
                )}
              />
            </div>
            <div className="d-flex flex-wrap justify-content-center">
              <Controller
                name="50"
                control={control}
                render={({ field }) => (
                  <Input
                    title="$ 50"
                    placeholder="Ingresa los billetes de 50"
                    {...field}
                  />
                )}
              />
              <Controller
                name="20"
                control={control}
                render={({ field }) => (
                  <Input
                    title="$ 20"
                    placeholder="Ingresa los billetes de 20"
                    {...field}
                  />
                )}
              />
            </div>
          </div>

          <div className="d-flex justify-content-between pt-2">
            <div className="d-flex flex-wrap justify-content-center">
              <Controller
                name="coins20"
                control={control}
                render={({ field }) => (
                  <Input
                    title="$ 20"
                    placeholder="Ingresa los billetes de 500"
                    {...field}
                  />
                )}
              />
              <Controller
                name="coins10"
                control={control}
                render={({ field }) => (
                  <Input
                    title="$ 10"
                    placeholder="Ingresa los billetes de 200"
                    {...field}
                  />
                )}
              />
              <Controller
                name="coins5"
                control={control}
                render={({ field }) => (
                  <Input
                    title="$ 5"
                    placeholder="Ingresa los billetes de 100"
                    {...field}
                  />
                )}
              />
            </div>
            <div className="d-flex flex-wrap justify-content-center">
              <Controller
                name="coins2"
                control={control}
                render={({ field }) => (
                  <Input
                    title="$ 2"
                    placeholder="Ingresa los billetes de 100"
                    {...field}
                  />
                )}
              />
              <Controller
                name="coins1"
                control={control}
                render={({ field }) => (
                  <Input
                    title="$ 1"
                    placeholder="Ingresa los billetes de 50"
                    {...field}
                  />
                )}
              />
              <Controller
                name="coins0.5"
                control={control}
                render={({ field }) => (
                  <Input
                    title="$ 0.50"
                    placeholder="Ingresa los billetes de 20"
                    {...field}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </form>
<div className="divider"></div>
      <div>Total Billetes: $ {_summaryBills()}</div>
      <div>Total monedas: $ {_summaryCoins()}</div>
      <div>Total: $ {_summaryBills() + _summaryCoins()}</div>
    </div>
  );
};

export default CountCash;
