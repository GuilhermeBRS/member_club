import { renderSeals, renderHistory } from "../app/renderData.js";
import { 
  updateAvatar,
  updateName,
  updateClientHistory,
  updateCard,
  updateCutsInfo,
  updateProgressBar
} from "../app/updateElement.js";

export function resultValidation(clientFound) {
  if (clientFound) {
    updateAvatar(clientFound.avatarPath);
    updateName(clientFound.name);
    updateClientHistory(clientFound.clienteSince);
    updateCard(clientFound.cardId);
    updateCutsInfo(
      clientFound.loyaltyCard['totalCuts'],
      clientFound.loyaltyCard['cutsRemaining'],
      clientFound.loyaltyCard['cutsNeeded']
    );
    updateProgressBar(
      clientFound.loyaltyCard['totalCuts'],
      clientFound.loyaltyCard['cutsNeeded']
    );
    renderSeals(clientFound.loyaltyCard['totalCuts']);
    renderHistory(clientFound.appointmentHistory);
  } else {
    alert("informe um id valido");
    return;
  }
}