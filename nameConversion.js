const input = document.querySelector("input");
const submitBtn = document.querySelector("button");

const camelCase = document.getElementById("camel-case");
const pascalCase = document.getElementById("pascal-case");
const snakeCase = document.getElementById("snake-case");
const screamingSnakeCase = document.getElementById("screaming-snake-case");
const kebabaCase = document.getElementById("kebab-case");
const screamingKebabaCase = document.getElementById("screaming-kebab-case");

let inputValue = "";
input.addEventListener("input", (e) => (inputValue = e.target.value));
submitBtn.addEventListener("click", () => onSubmit());

function onSubmit() {
  const inputValueArray = inputValue.split(" ");

  //   Camel case
  let camelArray = inputValueArray.map((item, index) => {
    if (index !== 0) {
      return item.charAt(0).toUpperCase() + item.slice(1);
    } else {
      return item;
    }
  });
  camelCase.innerText = camelArray.join("");

  //   Pascel Case
  let pascalArray = inputValueArray.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1);
  });
  pascalCase.innerText = pascalArray.join("");

  //   Snake case
  snakeCase.innerText = inputValueArray.join("_").toLowerCase();

  //   Screaming snake case
  screamingSnakeCase.innerText = inputValueArray.join("_").toUpperCase();

  //   Kabeb case
  kebabaCase.innerText = inputValueArray.join("-");

  //   Screaming kabeb case
  screamingKebabaCase.innerText = inputValueArray.join("-").toUpperCase();
}
