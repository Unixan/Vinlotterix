function deleteUser(index) {
  model.participants.splice(index, 1);
  updateView();
}

function addParticipant() {
  let newId = findNewId();
  let newP = {
    id: newId,
    name: model.addName,
    joining: false,
  }
  model.participants.push(newP)
  model.addName = '';
  updateView()
}

function findNewId() {
  let topId = model.participants.length + 1;
  for (x = 0; x < model.participants.length; x++) {
    let tempId = x + 1;
    if (model.participants[x].id != tempId) return tempId;
  }
  return topId;
}
