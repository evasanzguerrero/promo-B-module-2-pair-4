"use strict";
const adalaber1 = {
  name: "Susana",
  age: 34,
  job: "periodista",
  runAMarathon: function (distance) {
    console.log(`Estoy corriendo un marathon ${distance} kilometros`);
  },
};

console.log(
  `Mi nombre es: ${adalaber1.name}, tengo ${adalaber1.age} y soy ${adalaber1.job}`
);

const adalaber2 = {
  name: "Rocío",
  age: "25 años",
  job: "actriz",
};
console.log(
  `Mi nombre es: ${adalaber2.name}, tengo ${adalaber2.age} y soy ${adalaber2.job}`
);

adalaber1.runAMarathon(50);
