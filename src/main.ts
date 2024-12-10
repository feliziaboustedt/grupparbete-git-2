import axios from "axios";

interface IOMDBResponse{
    Search: IMovie[];
}

interface IMovie{
    Title: string; 
    Poster: string;
    imdbID: string;
}

  document.getElementById("form")?.addEventListener("submit", async (event) => {
    event.preventDefault();

    const response = await axios.get<IOMDBResponse>("https://img.omdbapi.com/?=c5e0d36b&s=harry");
    
    console.log(response.data.Search);
  });

  function createHtml(movies: IMovie) {
    const moviesContainer = document.getElementById("movies");

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
    

    movieContainer?.appendChild(heading);
    movieContainer?.appendChild(image);

    movieContainer?.appendChild(movieContainer);
  });
  }

