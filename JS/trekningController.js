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
  let possibleWinners = model.howManyWinners;
  let raffleParty = model.raffleParticipants;
  if (possibleWinners <= 0) {
    alert("Du må ha minst 1 deltaker!");
    model.howManyWinners = 1;
  }
  for (let i = 0; i < possibleWinners.length; i++) {
    let randomNum = 0;
    randomNum = Math.floor(Math.random() * possibleWinners);
    console.log('test' + randomNum);
  }
  console.log(possibleWinners);
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
