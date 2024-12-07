import { hoursLoad } from "../form/hours-load.js";
import { renderSchedules } from "./render-schedules.js";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
//import { inputLoad } from "../form/input-load.js";

// seleciona o input de data
const selectedDate = document.getElementById("date-time")
const input = document.getElementById("date")

export async function schedulesDay() {
  // obtém a data do input
  const date = selectedDate.value
  const inputDate = input.value
  // busca na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date })
  const inputSchedules = await scheduleFetchByDay({ inputDate })
  console.log(inputDate)
 
  
  
  renderSchedules({ inputSchedules })
  // Renderiza as horas disponíveis.
  hoursLoad({ date, dailySchedules })

  //inputLoad({ inputDate, inputSchedules })
}