const moviesCont = document.querySelector("#movies");
const form = document.querySelector("#movie-form");
const query = document.querySelector("#query");

async function getMovies(url = "https://freetestapi.com/api/v1/movies") {
  const req = await fetch(url);
  const data = await req.json();
  console.log(data);
  return data;
}

async function renderMovies(url) {
  const movies = await getMovies(url);
  moviesCont.innerHTML = "";

  if (movies.length === 0) {
    moviesCont.insertAdjacentHTML("afterbegin", `<p>No movies found</p>`);
  }

  movies.forEach((movie) => {
    moviesCont.insertAdjacentHTML(
      "afterbegin",
      `<div class="movie-container">
        <h2 class="title">${movie.title}</h2>
        <img src="${movie.poster}" alt="${movie.title}" />
        <div class="actors">
          ${movie.actors.map((actor) => `<div>${actor}</div>`).join("")}
        </div>
      </div>`
    );
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  renderMovies(`https://freetestapi.com/api/v1/movies?search=${query.value}`);
});

let debounceTimer;

query.addEventListener("keyup", (e) => {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    renderMovies(
      `https://freetestapi.com/api/v1/movies?search=${e.target.value}`
    );

    console.log(e.target.value);
  }, 300);

  console.log(e.target.value);
});
