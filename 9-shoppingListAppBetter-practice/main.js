const input = document.querySelector(".footer_name");
const items = document.querySelector(".items");
const addBtn = document.querySelector(".footer_btn");
const form = document.querySelector(".new-form");

function onAdd() {
  const textInput = input.value;
  if (textInput === "") {
    input.focus();
    return;
  }

  const item = createItem(textInput);
  items.appendChild(item);
  item.scrollIntoView({ block: "center" });
  input.value = "";
  input.focus();
}
let id = 0; //UUID
function createItem(textInput) {
  const itemsRow = document.createElement("li");
  itemsRow.setAttribute("class", "items_row");
  itemsRow.setAttribute("data-id", id);
  itemsRow.innerHTML = `
      <div class="item">
        <span class="item_name">${textInput}</span>
        <button class="delete_btn">
          <i class="fa-solid fa-trash-can" data-id=${id}></i>
        </button>
      </div>
      <div class="item_divider"></div>`;
  id++;
  return itemsRow;
}
/*
addBtn.addEventListener("click", () => {
  onAdd();
});

// keypress는 deprecated 됨
// keydown 혹은 keyup 사용
input.addEventListener("keydown", (e) => {
  if (e.isComposing) {
    return;
  }
  if (e.key === "Enter") {
    onAdd();
  }
});
*/
// 위보다 아래처럼 submit 처리 해준 게 더 간단
form.addEventListener("submit", (e) => {
  e.preventDefault();
  onAdd();
});

items.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.items_row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
