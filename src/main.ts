import axios from "axios";

interface IOMDBResponse{
    Search: IMovie[];
}

interface IMovie{
    Title: string; 
    Poster: string;
    imdbID: string;
}

  function createHtml(movies: IMovie[]) {
    const moviesContainer = document.getElementById("moviesContainer");

    if (moviesContainer) {
      moviesContainer.innerHTML = "";
    }

    movies.forEach((movie) => {
      const movieContainer = document.createElement("div");
      const heading = document.createElement("h3");
      const image = document.createElement("img");

      heading.innerHTML = movie.Title;
      image.src = movie.Poster;
      image.alt = movie.Title;

      movieContainer?.append(heading, image);
      moviesContainer?.appendChild(movieContainer);
  });
}

document.getElementById("form")?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const inputText = document.getElementById("input");

  if (inputText) {
    const userInput = (inputText as HTMLInputElement).value;

    const response = await axios.get<IOMDBResponse>("https://omdbapi.com/?apikey=c5e0d36b&s=" + userInput);

    createHtml(response.data.Search);
  }
  
});