import { renderSeals, renderHistory } from "../app/renderData.js";

const clientName = document.getElementById("client-name");
const clientSince = document.getElementById("client-since");
const avatar = document.getElementById("avatar");
const cutCount = document.getElementById("cut-count")
const cardIdValue = document.getElementById("card-id-value")
const cutsRemaining = document.getElementById("cuts-remaining")
const cutsNeeded = document.getElementById("cuts-needed")
const progressBar = document.getElementById("progress-id")

export function resultValidation(clientFound) {
  if (clientFound) {
    renderSeals(clientFound.loyaltyCard['totalCuts']);
    clientName.textContent = `${clientFound.name}`
    clientSince.textContent = `Cliente desde ${clientFound.clientSince}`
    avatar.onerror = () => {
      avatar.src = "/assets/images/default-avatar.svg";
    };
    avatar.src = clientFound.avatarPath;
    cutCount.textContent = `${clientFound.loyaltyCard['totalCuts']} cortes`;
    cardIdValue.textContent = `ID: ${clientFound.cardId}`;
    cutsRemaining.textContent = clientFound.loyaltyCard['cutsRemaining'];
    cutsNeeded.textContent = `${clientFound.loyaltyCard['totalCuts']} de ${clientFound.loyaltyCard['cutsNeeded']}`;
    progressBar.value = clientFound.loyaltyCard['totalCuts'] * 1000 / 100;
    renderHistory(clientFound.appointmentHistory);
  } else {
    alert("informe um id valido");
    return;
  }
}