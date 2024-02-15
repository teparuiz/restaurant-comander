export const cashCut = [
  {
    comments: "Faltante de 60",
    user: "rodrigo",
    Ayer: 3084,
    Inicio: 3084,
    Final: 3084,
    Kyte: 0,
    credit: 0,
    cash: 0,
    diffCashCredit: 0,

    shipments: {
      Melch: 0,
      Victor: 0,
      Tepa: 0,
      Total: 0,
    },
    incomes: [
      { description: "Rappi", amount: 0 },
      { description: "Didi", amount: 0 },
      { description: "Tarjeta crédito", amount: 0 },
      { description: "Depositos y/o tranferencia", amount: 0 },
      { Total: 0 },
    ],
    expenses: [
      { Descripción: "", amount: 0 },
      { Descripción: "", amount: 0 },
      { Descripción: "", amount: 0 },
      { Descripción: "", amount: 0 },
      { Descripción: "", amount: 0 },
      { Descripción: "", amount: 0 },
      { Total: 0 },
    ],
    tickes: [
      { Valor: 1000, Cantidad: 0 },
      { Valor: 500, Cantidad: 0 },
      { Valor: 200, Cantidad: 0 },
      { Valor: 100, Cantidad: 0 },
      { Valor: 50, Cantidad: 0 },
      { Valor: 20, Cantidad: 0 },
      { Total: 0 },
    ],
    coins: [
      { Valor: 20, Cantidad: 0 },
      { Valor: 10, Cantidad: 0 },
      { Valor: 5, Cantidad: 0 },
      { Valor: 2, Cantidad: 0 },
      { Valor: 1, Cantidad: 0 },
      { Valor: 0.5, Cantidad: 0 },
      { Total: 0 },
    ],
  },
];

export const obj = {
  getTickets: {
    bill1000: 0,
    bill500: 0,
    bill200: 2,
    bill100: 3,
    bill50: 0,
    bill20: 0,
    active: true,
    save: true,
  },

  getShipments: [
    { id: "c884bc50-84d0-4644-9f3f-23db600cb3cf", total: "95", user: "Melch" },
  ],

  getSales: {
    salesRecord: 3235,
    initCash: 1000,
    endCash: 1000,
    active: true,
    save: true,
  },

  getCoins: {
    coins20: 0,
    coins10: 5,
    coins5: 9,
    coins2: 0,
    coins1: 5,
    coins05: 0,
    other: 200,
    active: true,
    save: true,
  },

  getExpense:
    Array(6)[
      ({
        id: "bee9a421-cb98-429c-8679-09055004a8ec",
        description: "Lechuga",
        total: "132",
        provider: "WALMART",
      },
      {
        id: "5fd0de4e-a04e-4a5b-ae4a-497d5283146b",
        description: "MERCADO PAGO 1143",
        total: "0",
        provider: "COSTCO",
      },
      {
        id: "e3445d11-dee4-499d-961b-031c4990d62c",
        description: "DEbe Rodrigo",
        total: "104",
        provider: "WIPBURGERS",
      },
      {
        id: "8a35a429-a9b3-4f18-941f-82154e719058",
        description: "Felipe Sueldo",
        total: "300",
        provider: "WIPBURGERS",
      },
      {
        id: "981c72da-7382-4ee4-8a3b-dccb02bc030b",
        description: "COMPRAS",
        total: "1059",
        provider: "WIP BURGERS",
      },
      {
        id: "d46dd3ed-b321-4c3f-9160-aa7f45bfa99d",
        description: "10 %",
        total: "324",
        provider: "WIP BURGERS",
      })
    ],

  getTotalCash: 1000,
};