function toggleMenu() {
  var menu = document.querySelector(".nav-menu");
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}
function slideBox() {
  var Box = document.querySelector(".interactiveBox");
  if (Box.style.display === "none" || Box.style.display === "") {
    Box.style.display = "block";
  } else {
    Box.style.display = "none";
  }
}

const formElement = document.querySelector("#stockForm");
const inputApi = document.querySelector("#api-calls");
const outputApi = document.querySelector("#outputAPI");

const urlBase =
  "https://bloomberg-market-and-financial-news.p.rapidapi.com/market/auto-complete?query=";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e72c78f677msh5ec16d84062e2e7p1c67d2jsn45aadf8bfa32",
    "X-RapidAPI-Host": "bloomberg-market-and-financial-news.p.rapidapi.com",
  },
};

async function theMarketPlace() {
  const query = inputApi.value.trim();

  if (!query) {
    alert("Please enter a stock name!");
    return;
  }

  try {
    const response = await fetch(urlBase + encodeURIComponent(query), options);
    const result = await response.json();

    // Display the result in the output element
    outputApi.textContent = JSON.stringify(result, null, 2);
  } catch (error) {
    console.error(error);
    alert("An error occurred while fetching data.");
  }
}

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  theMarketPlace();
});

let url = `https://majazocom.github.io/Data/pokemons.json`;
function fetchPokemonDAta(adress) {
  fetch(adress)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
console.log(fetchPokemonDAta(url));
