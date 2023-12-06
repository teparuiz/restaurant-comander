"use client";
import React from "react";
import { Table } from "antd";

const data = [{
  
}]
const CashCut = (props) => {
  return (
    <div>
      <h1> Corte de caja</h1>
      <Table dataSource={data} />
    </div>
  );
};

export default CashCut;
