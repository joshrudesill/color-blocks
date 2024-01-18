console.log("🟥 🟦 🟩 🟨");

function deleteSelf(event, color) {
  let counter = document.querySelector(`#${color}-c`);
  if (Number(counter.textContent) !== 0) {
    counter.textContent = Number(counter.textContent) - 1;
  }

  event.target.remove();
}
function addBlock(color) {
  let counter = document.querySelector(`#${color}-c`);

  counter.textContent = Number(counter.textContent) + 1;

  document.querySelector(
    "#blocks"
  ).innerHTML += `<div class="block ${color}-fill" onclick="deleteSelf(event, '${color}')"></div>`;
}
