import { hoursLoad } from "../form/hours-load";
import { renderSchedules } from "./render-schedules";

// seleciona o input de data
const selectedDate = document.getElementById("date")

export function schedulesDay() {
  // obtém a data do input
  const date = selectedDate.value
  

  // Renderiza as horas disponíveis.
  hoursLoad({ date })
  renderSchedules({ date})

}