function updateTrukketView() {
  previousRaffles = model.winners.reverse();
  html = /*HTML*/ `
      <h1>Vinnere</h1>
  `;
  for (let x = 0; x < previousRaffles.length; x++) {
    raffle = previousRaffles[x];

    html += /*HTML*/ `<h3>Trekning utført ${previousRaffles[x].date}</h3>
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
  }
  html += `<button onclick="model.app.state = 'trekningView'; updateView()">Tilbake</button>`;
  document.getElementById("app").innerHTML = html;
}
