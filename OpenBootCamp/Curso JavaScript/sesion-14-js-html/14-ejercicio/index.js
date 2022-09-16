const boton = document.querySelector("#boton");

boton.addEventListener("click", () => {
  alert("click en el botón");
});

$(() => {
  // Selectores:
  // id="el-1" => "#el-1"
  // class="el-1" => ".el-1"
  // $("#el-1").hide()

  $(".btn").click(() => {
    console.log("Hola, estoy utilizando jQuery");
  });
});
