function updateTrekningView() {
  html = /*HTML*/ `
    <h1>Vinlotterix</h1>
  `;
  model.participants.map(
    (names, index) =>
      (html += /*HTML*/ `
  <div>${names.name}</li><input type="checkbox" ${
        names.joining ? "checked" : ""
      } oninput="model.participants[${index}].joining = !model.participants[${index}].joining; updateTrekningView()"/>
   </div>`)
  );
  document.getElementById("app").innerHTML = html;
}
