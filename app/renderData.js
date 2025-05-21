export function renderSeals(totalCuts) {
  const sealContainer = document.getElementById("seal")

  sealContainer.innerHTML = "";

  for (let s = 0; s < 10; s++) {
    const stamp = document.createElement("div");
    stamp.classList.add("stamp");

    if (s === 9) {
      const img = document.createElement("img");
      img.src = "assets/icons/blocked-gift.svg";
      img.alt = "Presente bloqueado";
      stamp.appendChild(img);
    }

    if (s < totalCuts) {
      const img = document.createElement("img");
      img.src = "assets/icons/green-check.svg";
      img.alt = "Mais um presente";
      stamp.appendChild(img);
    }

    sealContainer.appendChild(stamp);
  }
}

export function renderHistory(appointmentHistory) {
  const historyList = document.getElementById("history-list");

  historyList.innerHTML = "";

  while (historyList.children.length > 1) {
    historyList.removeChild(historyList.lastChild);
  }

  appointmentHistory.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="history-entry">
        <div class="history-text">
          <span class="history-date">${item.date}</span>
          <span class="history-time">${item.time}</span>
        </div>
        <img src="/assets/icons/green-check.svg" alt="seal" class="seal-icon" />
      </div>
    `;
    historyList.appendChild(li);
  });
}
