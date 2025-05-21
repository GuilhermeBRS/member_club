import { resultValidation } from "../app/result.js";

const input = document.getElementById("card-input");
const button = document.querySelector(".enter-button");

button.addEventListener("click", fetchData);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    fetchData();
  }
});

async function fetchData() {
  const inputValue = input.value.trim();

  if (!inputValue) {
    alert("informe um id valido");
    return;
  }

  try {
    const response = await fetch('db-data.json');
    const clientData = await response.json();

    const clientFound = clientData.clients.find(
      item => item.id === inputValue
    );

    console.log(clientFound);

    resultValidation(clientFound);

  } catch (e) {
    alert(`ERROR: ${e}`);
  }
}
