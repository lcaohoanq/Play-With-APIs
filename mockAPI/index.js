const endpoint = "https://6512cbd2b8c6ce52b3963937.mockapi.io/users/";

async function demoGet() {
  await fetch(endpoint)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log("Error");
      }
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

// demoGet();

async function demoPost() {
  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "ke bi an",
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

// demoPost();
