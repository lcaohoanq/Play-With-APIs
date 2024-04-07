const endpoint = "https://6512cbd2b8c6ce52b3963937.mockapi.io/";

async function demoGet(id) {
  await fetch(`${endpoint}/users/${id}`)
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

// demoGet("");
// demoGet(1);

async function demoPost() {
  fetch(`${endpoint}/users`, {
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

async function demoDelete(id) {
  fetch(`${endpoint}/users/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.ok) {
        console.log("Delete successfully");
      } else {
        console.log("Can't delete");
      }
    })
    .catch((error) => console.log(error));
}

// demoDelete(1);
