const addButton = document.querySelector(".input");
const todo = document.querySelector(".js-todo");

let list = JSON.parse(localStorage.getItem("todoList")) || [];

// Fonction pour ajouter un nouvel élément
function add() {
  let addValue = addButton.value.trim();
  if (!addValue) {
    alert("Please enter a valid task!");
    return;
  }

  // Ajouter l'élément à la liste avec la propriété `checked`
  list.push({ name: addValue, checked: false });
  localStorage.setItem("todoList", JSON.stringify(list));
  addButton.value = "";
  render();
}

// Écouter la touche "Entrée" pour ajouter une tâche
addButton.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    add();
  }
});

// Fonction pour supprimer un élément
function remove(i) {
  list.splice(i, 1);
  localStorage.setItem("todoList", JSON.stringify(list));
  render();
}

// Fonction pour afficher les tâches
function render() {
  todo.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    const html = `<p class="js-todo-list">
      <input type="checkbox" class="check" ${
        list[i].checked ? "checked" : ""
      } data-index="${i}">
      ${list[i].name}
      <button onclick="remove(${i})" class="delete-btn">Delete</button>
    </p>`;
    todo.innerHTML += html;
  }

  // Ajouter des gestionnaires d'événements aux checkbox
  const checkboxes = document.querySelectorAll(".check");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const index = this.dataset.index; // Récupérer l'index de la tâche
      list[index].checked = this.checked; // Mettre à jour l'état de la tâche
      localStorage.setItem("todoList", JSON.stringify(list)); // Sauvegarder dans le localStorage
    });
  });
}

render();
