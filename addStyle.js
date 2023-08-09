const bodyClass = "bg-gray-300 bg-gradient-to-br from-gray-900 bg-opacity-75"
const bdy = document.querySelector("body");
bodyClass.split(" ").forEach(cls => bdy.classList.add(cls));

const calcBodyClass = 
"max-w-lg rounded overflow-hidden shadow-2x1 bg-gray-600 bg-opacity-75"
const calcBody = document.querySelector(".calcBody");
calcBodyClass.split(" ").forEach(cls => calcBody.classList.add(cls));

const outputClass = 
"flex flex-col w-3/4 h-12 justify-center items-end m-1 bg-gray-300 text-gray-900 font-semibold px-2 border-black hover:border-gray-500 rounded"
const output = document.querySelector(".output");
outputClass.split(" ").forEach(cls => output.classList.add(cls));

const previousNumberClass = "flex max-w-lg h-1/3 pb-5 pt-1 text-gray-600 text-xs"
const previousNumber = document.querySelector(".previousNumber");
previousNumberClass.split(" ").forEach(cls => previousNumber.classList.add(cls));

const currentNumberClass = "flex max-w-lg h-2/3 pb-2 text-x1"
const currentNumber = document.querySelector(".currentNumber");
currentNumberClass.split(" ").forEach(cls => currentNumber.classList.add(cls));

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
  addClasses(btn)
})

function addClasses(button){
  const btnNumberClass = "hover:bg-gray-700 border-gray-200";
  const btnClearClass = "hover:bg-red-500 border-red-500";
  const btnOpClass = "hover:bg-blue-300 border-blue-300";
  const btnEqClass = "hover:bg-orange-600 border-orange-600";
 

  if (button.classList.value === "number"){
    btnNumberClass.split(" ").forEach((cls) => button.classList.add(cls));
  } else if (button.classList.value === "operator"){
    btnOpClass.split(" ").forEach((cls) => button.classList.add(cls));
  } else if (button.classList.value === "clear"){
    btnClearClass.split(" ").forEach((cls) => button.classList.add(cls));
  } else if (button.classList.value === "equal"){
    btnEqClass.split(" ").forEach((cls) => button.classList.add(cls));
  } 

  const baseClass = 
  "number clear flex w-12 h-12 justify-center items-center m-1 font-bold py-2 px-2 border hover:border-transparent rounded text-white border-2 text-2x1"
  baseClass.split(" ").forEach((cls) => button.classList.add(cls));
}
