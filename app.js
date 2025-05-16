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

function rollTable() {
  const select = document.getElementById("table-select").value;
  const results = tables[select];
  const random = results[Math.floor(Math.random() * results.length)];
  document.getElementById("result").textContent = random;
}

function updateScore(delta) {
  score += delta;
  document.getElementById("score").textContent = score;
}
