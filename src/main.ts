interface IOMDBRespons{
    Search: IMovie[];
}

interface IMovie{
    Title: string; 
    Poster: string;
    imdbID: string;
}

  document.getElementById("form")?.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("hej hej");
  })

  