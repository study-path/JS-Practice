//Every element in the array has a value above input number functionality
const ages = [22, 24, 20, 34];
document.getElementById("arrayElements").innerHTML = ages;

function checkAge(age) {
  return age > document.getElementById("ageToCheck").value;
}

function check() {
  document.getElementById("checkedAge").innerHTML = ages.every(checkAge);
}

//All numbers even functionality
function checkAllEven() {
  const inputStr = document.getElementById("numberInput").value;
  const arrInputs = inputStr.split(",").map((n) => parseInt(n.trim()));
  const allEven = arrInputs.every((num) => num % 2 === 0);
  const res = allEven ? "All numbers are even" : "Not all numbers are even";
  document.getElementById("answerEven").innerHTML = res;
  document.getElementById("answerEven").style.color = allEven ? "green" : "red";
  document.getElementById("inputNums").innerHTML =
    document.getElementById("numberInput").value;
  document.getElementById("numberInput").value = "";
}
//All products are from one brand functionality

const products = [
  {
    name: "Running Shoes",
    brand: "Nike",
  },
  {
    name: "Soccer Shoes",
    brand: "Nike",
  },
  {
    name: "Backpack",
    brand: "Nike",
  },
];

const list = document.getElementById("productList");
products.forEach((product) => {
  const li = document.createElement("li");
  li.textContent = `${product.name} - ${product.brand}`;
  list.appendChild(li);
});
function checkBrand() {
  const inputBrand = document.getElementById("brandInput").value;
  const allSameBrand = products.every(
    (product) => product.brand === inputBrand
  );

  document.getElementById("brandsChecked").innerHTML = allSameBrand
    ? "<div style='color:green'>Yes</div>"
    : "<div>No</div>";
}
