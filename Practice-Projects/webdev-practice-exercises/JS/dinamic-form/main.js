console.log("holla");

const form = document.querySelector("#form");
const dinamicCont = document.querySelector("#optional-container");
const countryInput = document.querySelector("#country");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);

  // let city = document.getElementById("cities-argentina").value;
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let state = document.querySelector("#state")?.value || "not available";
  let citySpain =
    document.querySelector("#cities-spain")?.value || "not available";
  let cityArgentina =
    document.querySelector("#cities-argentina")?.value || "not available";

  console.log(name);
  console.log(email);
  console.log(countryInput.value);
  console.log(state);
  console.log(citySpain);
  console.log(cityArgentina);
});

countryInput.addEventListener("change", (e) => {
  if (e.target.value === "eeuu") {
    dinamicCont.innerHTML = "";
    dinamicCont.innerHTML = `<select name="state" id="state">
        <option value="texas">Texas</option>
        <option value="newyork">New York</option>
        <option value="atlanta">Atlanta</option>
      </select>`;
  } else if (e.target.value === "spain") {
    dinamicCont.innerHTML = "";
    dinamicCont.innerHTML = `  <select name="city" id="cities-spain">
        <option value="madrid">Madrid</option>
        <option value="malaga">Malaga</option>
        <option value="barcelona">Barcelona</option>
      </select>`;
  } else if (e.target.value === "argentina") {
    dinamicCont.innerHTML = "";
    dinamicCont.innerHTML = `<select name="city" id="cities-argentina">
        <option value="buenos-aires">Buenos Aires</option>
        <option value="cordoba">Córdoba</option>
        <option value="rosario">Rosario</option>
        <option value="mendoza">Mendoza</option>
        <option value="salta">Salta</option>
      </select>`;
  } else {
    dinamicCont.innerHTML = "";
  }
});
