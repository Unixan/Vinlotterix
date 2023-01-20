function updateTrukketView() {
  previousRaffles = model.winners;
  html = `
  <div class="mainWindow">    
    <h1>Vinnere</h1><hr>
    `;
  for (let x = previousRaffles.length - 1; x >= 0; x--) {
    raffle = previousRaffles[x];

    html += `
    <div class="winners">
      <h3>Trekning utført ${previousRaffles[x].date}</h3>
        <div>Antall deltakere: ${raffle.contenders}</div>
        <div>Antall vinnere trukket: ${raffle.winnersDrawn}</div>
        <h4>Vinnere:</h4>`;
    for (i = 0; i < raffle.winners.length; i++) {
      winner = model.winners[x].winners[i];
      color = ["gold", "silver", "coral"];
      place = winner.place;
      html += `
        <div class="winnerPlace">Plass nummer ${place}:
        <div class="place" style="color: ${color[i]}">${winner.name}</div>
        </div><br>
                `;
    }
    html += `</div><hr>`;
  }

  html += `
  <button onclick="backToMain()">Tilbake</button>
  </div>`;
  document.getElementById("app").innerHTML = html;
}
