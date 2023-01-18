function updateEditView() {
  html = `
     
  <h1>Rediger medlemmer</h1>
        <table>
          <tr>
            <th>Navn</th><th>Handling</th>
          </tr>`;
  model.participants.map(
    (names, index) =>
      (html += `
          <tr>
            <td>${names.name}</td>
            <td class="trekkes">
            <button onclick="deleteUser(${index})">Slett</button>
          </tr>`)
  );
  html += `
</table><br>
<input id="addUser" onkeydown='if(event.key === "Enter") addParticipant()' 
type="text" 
value="${model.addName}" 
oninput="model.addName=this.value"/>
<button onclick="addParticipant()">Legg til</button><br><br>
<button onclick="model.app.state = 'trekningView'; updateView()">Tilbake</button> 
`;
  document.getElementById("app").innerHTML = html;
  document.getElementById("addUser").focus();
}
