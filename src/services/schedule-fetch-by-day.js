import dayjs from "dayjs"
import { apiConfig } from "./api-config"
export async function scheduleFetchByDay({ date }) {
  try {
    // aqui vai fazer a chamada para o backend usando fetch
    const response = await fetch (`${apiConfig.baseUrl}/schedules`)
    // converte a resposta para json
    const data = await response.json()
    //filtra os agendamentos pelo dia selecionado
    const dailySchedules = data.filter((schedule) => 
      dayjs(date).isSame(schedule.when, "day")
    )
    return dailySchedules
  } catch (error) {
    console.error(error)
    alert('Erro ao buscar agendamentos')
  }
}