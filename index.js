const colors = [
  "#D04848",
  "#F3B95F",
  "#FDE767",
  "#6895D2",
  "#F2F597",
  "#FE7A36",
  "#D24545",
  "#FF004D",
  "#E26EE5",
];
function colorChange() {
  let randomColor = Math.trunc(Math.random() * colors.length);
  document.querySelector(
    "body"
  ).style.backgroundColor = `${colors[randomColor]}`;
}
colorChange();
document.querySelector("button").addEventListener("click", colorChange);
