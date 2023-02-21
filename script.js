const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

//Using async/await
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  jokeEl.innerText = data.joke;
}

//.then is one way to do it but async await is more widely used and is cleaner
/*
function generateJoke() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
  
    fetch("https://icanhazdadjoke.com", config)
      .then((res) => res.json())
      .then((data) => {
        jokeEl.innerText = data.joke;
      });
  }
  */
