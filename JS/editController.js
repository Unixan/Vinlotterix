function deleteUser(index) {
  model.participants.splice(index, 1);
  updateView();
}

function addParticipant() {
  if (model.addName.replaceAll(" ", "").length < 3) {
    alert("Navnet må ha minst 3 bokstaver");
    model.addName = "";
    updateView();
  } else {
    let newId = findNewId();
    let newP = {
      id: newId,
      name: model.addName,
      joining: false,
    };
    model.participants.push(newP);
    console.log(model.addName.trim().length);
    model.addName = "";
    updateView();
  }
}

function findNewId() {
  let topId = model.participants.length + 1;
  for (x = 0; x < model.participants.length; x++) {
    let tempId = x + 1;
    if (model.participants[x].id != tempId) return tempId;
  }
  return topId;
}
