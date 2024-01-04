// JS code here

const jokeElem = document.getElementById("joke")
const jokeButton = document.getElementById("jokeBtn")

jokeButton.addEventListener("click", generateJoke)

async function generateJoke() {
  // Fetching api here
  const config = {
    headers: {
      Accept: "application/json",
    },
  }

  try {
    const res = await fetch("https://icanhazdadjoke.com", config)

    if (res.status === 200) {
      // handle data here
      const data = await res.json()
      jokeElem.innerHTML = data.joke
    }
    // throw new Error("new error comming here")
  } catch (error) {
    // handle error
    console.log("error will show here: ", error)
  } finally {
    console.log("Fetched Joke completed!!")
  }
}

function generateJokePromise() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  }

  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => {
      jokeElem.innerHTML = data.joke
    })
    .catch((error) => {
      // Handle error here
      console.log(error)
    })
}

generateJoke()
