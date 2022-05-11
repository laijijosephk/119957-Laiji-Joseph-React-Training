// Promise: Its a way to communicate with APIs.
// Promise: Is an object that return a value that hope you to recieve in Future.
// Promise is well suited for handling Asynchronous Operations
// Promise has three states: Fullfilled, Reject, Pending

const API_URL = "https://jsonplaceholder.typicode.com/users";

function getApiData(url) {
  setTimeout(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => displayData(data))
      .catch((err) => console.log(err));
  }, 3000);
}

getApiData(API_URL);

function displayData(serverData) {
  console.log(serverData);
  for (let user of serverData) {
    let newRow = document.createElement("tr");

    let newtd1 = document.createElement("td");
    let newtd2 = document.createElement("td");
    let newtd3 = document.createElement("td");
    let newtd4 = document.createElement("td");

    newtd1.innerText = `${user.id}`;
    newtd2.innerText = `${user.name}`;
    newtd3.innerText = `${user.email}`;
    newtd4.innerText = `${user.phone}`;

    newRow.appendChild(newtd1);
    newRow.appendChild(newtd2);
    newRow.appendChild(newtd3);
    newRow.appendChild(newtd4);

    document.getElementById("myTable").appendChild(newRow);
  }
}
