const model = {
  // app
  app: { state: "trekningView" },

  // input
  howManyWinners: 1,
  addName: "",

  // data
  raffleParticipants: [],
  participants: [
    { id: 1, name: "Nils", joining: false },
    { id: 2, name: "Arne", joining: false },
    { id: 3, name: "Bjarne", joining: false },
    { id: 4, name: "Petter", joining: false },
  ],
  winners: [
    {
      raffleNo: 1,
      date: "5/6 - 2022",
      contenders: 8,
      winnersDrawn: 3,
      winners: [
        { place: 1, name: "Anne" },
        { place: 2, name: "Petter" },
        { place: 3, name: "Karianne" },
      ],
    },
    {
      raffleNo: 2,
      date: "7/10 - 2022",
      contenders: 6,
      winnersDrawn: 3,
      winners: [
        { place: 1, name: "Sunniva" },
        { place: 2, name: "Iselin" },
        { place: 3, name: "Kalle" },
      ],
    },
    {
      raffleNo: 3,
      date: "10/1 - 2023",
      contenders: 10,
      winnersDrawn: 3,
      winners: [
        { place: 1, name: "Petter" },
        { place: 2, name: "Roger" },
        { place: 3, name: "Karianne" },
      ],
    },
  ],
};
