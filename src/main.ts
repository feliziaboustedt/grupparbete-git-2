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
