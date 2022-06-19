let data = [
  {
    name: "David",
    age: "21",
  },
  {
    name: "Sarah",
    age: "32",
  },
  {
    name: "John",
    age: "25",
  },
  {
    name: "Beatriz",
    age: "19",
  },
  {
    name: "Renata",
    age: "23",
  },
  {
    name: "Sávio",
    age: "24",
  },
];

const infoSection = document.querySelector(".info");

let details = data.map((element) => {
  return "<div>" + element.name + " " + "is" + " " + element.age + "</div>";
});

infoSection.innerHTML = details.join("\n");
