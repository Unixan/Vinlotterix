function updateTrukketView() {
  previousRaffles = model.winners;
  html = `
  <div class="mainWindow">    
    <h1>Vinnere</h1>
  `;
  for (let x = previousRaffles.length - 1; x >= 0; x--) {
    raffle = previousRaffles[x];

    html += /*HTML*/ `
    
    <h3>Trekning utført ${previousRaffles[x].date}</h3>
      <div>Antall deltakere: ${raffle.contenders}</div>
      <div>Antall vinnere trukket: ${raffle.winnersDrawn}</div>
      <h4>Vinnere:</h4>`;
    for (i = 0; i < raffle.winners.length; i++) {
      winner = model.winners[x].winners[i];
      place = winner.place;
      html += /*HTML*/ `
      <p>Plass nummer ${place}: ${winner.name}</p>
      `;
    }
    `</div>`
  }
  html += /*HTML*/ `<button onclick="model.app.state = 'trekningView'; updateView()">Tilbake</button>`;
  document.getElementById("app").innerHTML = html;
}
