function updateTrekningView() {
  getParticipants();
  html = `
  <div class="mainWindow">
    <h1>Vinlotterix</h1>
      <div class="table">
        <table>
          <tr>
            <th>Navn</th><th>Trekkes</th>
          </tr>`;
  model.participants.map(
    (names, index) =>
      (html += `
          <tr>
            <td>${names.name}</td>
            <td class="trekkes"><input 
              type="checkbox" ${names.joining ? "checked" : ""} 
              oninput=
              "model.participants[${index}].joining = !model.participants[${index}].joining;
              updateView()"/>
            </td>
          </tr>`)
  );
  html += `
  </table>
    <br>
      <input 
      class="raffle" 
      type="number" value="${model.howManyWinners}" 
      min="1" 
      max="10" 
      oninput="model.howManyWinners=this.value"/>
      <button onclick="decreaseWinners()">-</button>
      <button onclick="increaseWinners()">+</button>
      <button  id="raffleBtn" onclick="doRaffle()" class="raffle">Trekk ${
        model.howManyWinners <= 1 ? "vinner" : "vinnere"
      }</button><br><br>
    <button onclick="goToEditView()">Rediger liste</button>
    </div>
  </div>
  `;
  document.getElementById("app").innerHTML = html;
  if (model.howManyWinners < 1) {
    document.getElementById("raffleBtn").disabled = true;
  }
}
