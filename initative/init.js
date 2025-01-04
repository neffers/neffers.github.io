function start() {
  const playerRange = document.getElementById("playerInitRng");
  const playerNum = document.getElementById("playerInitNum");

  playerRange.oninput = () => {playerNum.value = playerRange.value};
  playerNum.oninput = () => {playerRange.value = playerNum.value};
  playerRange.value = 15;
  playerNum.value = 15;
}
window.onload = (event) => {
  console.log("Page should be fully loaded");
  start();
}
