function goToEditView() {
  model.app.state = "editView";
  updateView();
}

function decreaseWinners() {
  if (model.howManyWinners <= 1) {
    model.howManyWinners = 1;
  } else model.howManyWinners--;
  updateView();
}

function increaseWinners() {
  let partySize = model.raffleParticipants.length;
  if (model.howManyWinners >= partySize) {
    model.howManyWinners = partySize;
  } else if (model.howManyWinners >= 10) {
    model.howManyWinners = 10;
  } else model.howManyWinners++;
  updateView();
}

function doRaffle() {
  let participants = model.raffleParticipants;
  let possibleIndex = model.raffleParticipants.length;
  let numberOfDraws = model.howManyWinners;
  let winners = {
    raffleNo: model.winners.length + 1,
    date: getDate(),
    winners: [],
  };
  let order = 1;
  if (possibleIndex <= 0) {
    alert("Du må ha minst 1 deltaker!");
  } else {
    for (let i = 0; i < numberOfDraws; i++) {
      randomIndex = Math.floor(Math.random() * possibleIndex);
      winners.winners.push({
        place: order,
        name: participants[randomIndex].name,
      });
      participants.splice(randomIndex, 1);
      possibleIndex--;
      order++;
    }
    model.winners.push(winners)
    console.log(model.winners);
    model.app.state = 'trukketView'
  }
  updateView();
}

function getParticipants() {
  let participants = [];
  model.raffleParticipants = "";
  model.participants.map((user) => {
    if (user.joining) {
      participants.push(user);
    }
    model.raffleParticipants = participants;
  });
}

function getDate() {
  rawDate = new Date();
  date = rawDate.getDate();
  month = rawDate.getMonth() + 1;
  year = rawDate.getFullYear();
  newDate = date + '/' + month + ' - ' + year
  return newDate
}
