function updateTrekningView() {
  html = /*HTML*/ `
    <h1>Vinlotterix</h1>
  <table>
    <tr>
      <th>Navn</th><th>Trekkes</th>
    </tr>`;
  model.participants.map(
    (names, index) =>
      (html += /*HTML*/ `
    <tr>
      <td>${names.name}</td>
      <td class="trekkes"><input 
        type="checkbox" ${names.joining ? "checked" : ""} 
        oninput=
        "model.participants[${index}].joining = !model.participants[${index}].joining;
         updateTrekningView()"/>
      </td>
    </tr>`)
  );
  html +=/*HTML*/ `
  </table><br>
  <button onclick="goToEditView()">Rediger liste</button>
  `;
  document.getElementById("app").innerHTML = html;
}
