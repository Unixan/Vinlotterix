function updateEditView() {
  html = /*HTML*/ `
  <button onclick="model.app.state = 'trekningView'; updateView()">Til trekning</button><button>Resultatskjerm</button><hr>    
  <h1>Rediger medlemmer</h1>
        <table>
          <tr>
            <th>Navn</th><th>Handling</th>
          </tr>`;
  model.participants.map(
    (names, index) =>
      (html += /*HTML*/ `
          <tr>
            <td>${names.name}</td>
            <td class="trekkes"> <button onclick="deleteUser(${index})">Slett</button>
          </tr>`)
  );
  html += /*HTML*/ `
</table><br>
<input type="text" value="${model.addName}" oninput="model.addName=this.value"/>
<button onclick="addParticipant()">Legg til</button>
`;
  document.getElementById("app").innerHTML = html;
}
