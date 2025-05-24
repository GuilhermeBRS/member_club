export function updateAvatar(avatarPath) {
  const avatar = document.getElementById("avatar");

  avatar.onerror = () => {
      avatar.src = "/assets/images/default-avatar.svg";
   };

  avatar.src = avatarPath;
}

export function updateName(name) {
  const clientName = document.getElementById("client-name");
  clientName.textContent = `${name}`
}

export function updateClientHistory(data) {
  const clientSince = document.getElementById("client-since");
  clientSince.textContent = `Cliente desde ${data}`
}

export function updateCard(cardId) {
  const cardIdValue = document.getElementById("card-id-value")
  cardIdValue.textContent = `ID: ${cardId}`;
}

export function updateCutsInfo(totalCuts, remainingCuts, neededCuts) {
  const cutCount = document.getElementById("cut-count")
  const cutsRemaining = document.getElementById("cuts-remaining")
  const cutsNeeded = document.getElementById("cuts-needed")

  cutCount.textContent = `${totalCuts} cortes`;
  cutsRemaining.textContent = remainingCuts;
  cutsNeeded.textContent = `${totalCuts} de ${neededCuts}`;
}

export function updateProgressBar(totalCuts, cutsNeeded) {
  const progressBar = document.getElementById("progress-id")
  progressBar.value = (totalCuts / cutsNeeded) * 100;
}
