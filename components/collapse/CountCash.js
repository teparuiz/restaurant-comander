import { Button } from "antd";
import React from "react";
import Input from "../form/Input";

const CountCash = (props) => {
  return (
    <div className="container_table_card">
      <h3> Conteo de efectivo en caja </h3>

      <h5>Billetes </h5>

      <Input
      title="500"
      placeholder="Ingresa los billetes de 500"
      
      />
       <Input
      title="200"
      placeholder="Ingresa los billetes de 500"
      
      />
       <Input
      title="100"
      placeholder="Ingresa los billetes de 500"
      
      />
       <Input
      title="50"
      placeholder="Ingresa los billetes de 500"
      
      />
       <Input
      title="20"
      placeholder="Ingresa los billetes de 500"
      
      />

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
          Añadir efectivo
        </Button>
      </div>
    </div>
  );
};

export default CountCash;
