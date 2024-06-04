"use strict";
const adalaber1 = {
  name: "Susana",
  age: 34,
  job: "periodista",
  showBio: function () {
    console.log(
      `Mi nombre es ${this.name},tengo ${this.age} años y soy ${this.job}`
    );
  },
};

console.log(
  `Mi nombre es: ${adalaber1.name}, tengo ${adalaber1.age} y soy ${adalaber1.job}`
);

const adalaber2 = {
  name: "Rocío",
  age: 25,
  job: "actriz",
  showBio: function () {
    console.log(
      `Mi nombre es ${this.name},tengo ${this.age} años y soy ${this.job}`
    );
  },
};

adalaber1.showBio();
adalaber2.showBio();
