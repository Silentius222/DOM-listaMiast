let olElement = document.createElement("ol");

let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

cities.forEach(city => {
  let liElement = document.createElement("li");
  liElement.className = "city";
  liElement.innerText = city;
  olElement.appendChild(liElement);
});

document.body.appendChild(olElement);