let form = document.querySelector("form");
let input = document.querySelector("input");
let API_KEY = "aa8ba69c9150ad7c0f9cdc9cb92cf54a";
let BASE_PATH = "https://image.tmdb.org/t/p/original";
let results = document.querySelector(".result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    let responce = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        input.value +
        "&include_adult=false&language=en-US&page=1&api_key=" +
        API_KEY
    );
    let result = await responce.json();
    console.log(result.results);
    displayData(result.results);
  } catch (error) {
    console.log(error);
    displayData(error);
  }
});

function displayData(data) {
  results.innerHTML = "";
  let fragment = document.createDocumentFragment();
  if (data.length > 0) {
    data.forEach((obj) => {
      let image = document.createElement("img");
      image.src = BASE_PATH + obj.poster_path;
      image.classList.add("movie_img");
      fragment.append(image);
    });
    results.append(fragment);
  }
  else{
    let notice = document.createElement("h1");
    notice.innerText = "Kya search kar rahi ho NANDU , sahi se saerch karo..." ;
    notice.classList.add("notice");
    fragment.append(notice);
    results.append(fragment);
  }
}
