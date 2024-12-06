import { hoursLoad } from "../form/hours-load.js";
import { renderSchedules } from "./render-schedules.js";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";

// seleciona o input de data
const selectedDate = document.getElementById("date")

export async function schedulesDay() {
  // obtém a data do input
  const date = selectedDate.value
  
  const dailySchedule = await scheduleFetchByDay({ date })
  console.log(dailySchedule)
  // Renderiza as horas disponíveis.
  hoursLoad({ date })
  renderSchedules({ date })

}