const tables = {
  battleCries: [
    "Let chaos reign!",
    "This one's for the glitter gods!",
    "Who wants a concussion with confetti?"
  ],
  wildMagic: [
    "You swap bodies with the nearest ferret.",
    "Everything turns polka-dot for 1d4 hours.",
    "You summon a mariachi band that follows you around."
  ],
  disasterSeverity: [
    "Mildly inconvenient: A shoe flies off.",
    "Chaotic mess: A table flips.",
    "Total catastrophe: You summon an elder god... again."
  ],
  introLines: [
    "I'm a slippery floor in a tavern brawl.",
    "I'm the wind that blows your skirt up mid-duel.",
    "I'm the torch that lights the wrong end of the fuse."
  ]
};

let score = 0;
let lastResult = "";

function rollTable() {
  const select = document.getElementById("table-select").value;
  const results = tables[select];
  const random = results[Math.floor(Math.random() * results.length)];
  lastResult = random;
  document.getElementById("result").textContent = random;
  document.getElementById('sfx-roll').play();
}

function updateScore(delta) {
  score += delta;
  document.getElementById("score").textContent = score;
  updateMeter();
}

function updateMeter() {
  const meter = document.getElementById("chaos-meter-fill");
  const label = document.getElementById("chaos-meter-label");
  let percent = Math.min(Math.max(score, 0), 100);
  meter.style.width = percent + "%";

  if (percent < 20) label.textContent = "Chill";
  else if (percent < 40) label.textContent = "Tense";
  else if (percent < 60) label.textContent = "Rowdy";
  else if (percent < 80) label.textContent = "Unhinged";
  else label.textContent = "TOTAL MAYHEM";
}

function copyResult() {
  const resultText = document.getElementById("result").innerText;
  if (!resultText) return;

  navigator.clipboard.writeText(resultText).then(() => {
    const feedback = document.getElementById("copy-feedback");
    feedback.style.display = "inline";
    setTimeout(() => feedback.style.display = "none", 1500);
  });
}

function saveFavorite() {
  if (!lastResult) return;
  let favorites = JSON.parse(localStorage.getItem("mayhemFavorites") || "[]");
  if (!favorites.includes(lastResult)) {
    favorites.push(lastResult);
    localStorage.setItem("mayhemFavorites", JSON.stringify(favorites));
    alert("Favorite saved!");
  } else {
    alert("Already in favorites.");
  }
}

function showFavorites() {
  const favorites = JSON.parse(localStorage.getItem("mayhemFavorites") || "[]");
  alert("Favorites:\n\n" + favorites.join("\n\n"));
}
