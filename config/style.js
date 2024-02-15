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
    {
      id: "47960123-924d-4046-88a7-a0938b178431",

      total: "95",

      user: "Melch",
    },
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
        id: "2c0312d6-f24e-4511-ad48-32f9ee7e2252",

        description: "Lechuga",

        total: "132",

        provider: "WALMART",
      },
      {
        id: "aee9f41e-c270-48eb-8379-d6be596e5f2b",

        description: "Carne ",

        total: 0,

        provider: "COSTCO",
      },
      {
        id: "0650102a-aed6-4c70-bd4d-e82b6b536654",

        description: "Debe",

        total: "104",

        provider: "Rodrigo",
      },
      {
        id: "2b1409b7-5f20-41ac-aa7a-56ab089e2927",

        description: "Pago Felipe",

        total: "300",

        provider: "Felipe",
      },
      {
        id: "fa97bb18-a62f-4087-96c7-a3551b51bf0a",

        description: "DInero para bolsa de compras",

        total: "1059",

        provider: "Bolsa compras",
      },
      {
        id: "c50f957a-121a-464d-9d3a-afcab4b1f6cf",

        description: "El 10%",

        total: "324",

        provider: "10%",
      })
    ],
};
