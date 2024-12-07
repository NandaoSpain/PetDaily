import { hoursLoad } from "../form/hours-load.js"
import { renderSchedules } from "./render-schedules.js"
import { scheduleFetchByDay, inputFetchByDay } from "../../services/schedule-fetch-by-day.js"

// seleciona o input de data
const selectedDate = document.getElementById("date")
const input = document.getElementById("date-time")

export async function schedulesDay() {
  // obtém a data do input
  const date = selectedDate.value
  const inputDate = input.value
  // busca na API os agendamentos
  const dailySchedules = await scheduleFetchByDay ({ date })
  const inputSchedules = await inputFetchByDay({ inputDate })  
  
  // Renderiza os agendamentos do dia atual.
  renderSchedules({ dailySchedules })
  // Renderiza as horas disponíveis.
  hoursLoad({ date, inputSchedules })

}

