document.addEventListener("DOMContentLoaded", function () {
  const table = document
    .getElementById("editableTable")
    .getElementsByTagName("tbody")[0];
  const addRowButton = document.querySelector(".add-row");

  // Función para crear una nueva fila
  function createRow(name = "", age = "", email = "") {
    const row = table.insertRow();

    const nameCell = row.insertCell(0);
    const ageCell = row.insertCell(1);
    const emailCell = row.insertCell(2);
    const actionsCell = row.insertCell(3);

    nameCell.contentEditable = true;
    ageCell.contentEditable = true;
    emailCell.contentEditable = true;

    nameCell.innerText = name;
    ageCell.innerText = age;
    emailCell.innerText = email;

    // Botón para eliminar la fila
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", function () {
      const confirmDelete = confirm(
        "¿Estás seguro de que quieres eliminar esta fila?"
      );
      if (confirmDelete) {
        table.deleteRow(row.rowIndex - 1);
      }
    });

    actionsCell.appendChild(deleteButton);
  }

  // Agregar una fila al hacer clic en el botón "Agregar Fila"
  addRowButton.addEventListener("click", function () {
    createRow();
  });

  // Crear una fila inicial como ejemplo
  createRow("Juan Pérez", "28", "juan.perez@example.com");
});
