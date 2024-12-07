import dayjs from "dayjs"
import { apiConfig } from "./api-config"
export async function scheduleFetchByDay({ date, inputDate }) {
  try {
    // aqui vai fazer a chamada para o backend usando fetch
    const response = await fetch (`${apiConfig.baseUrl}/schedules`)
    // converte a resposta para json
    const data = await response.json()
    //filtra os agendamentos pelo dia selecionado
    const dailySchedules = data.filter((schedule) => 
      dayjs(date).isSame(schedule.when, "day")
    )
    const inputSchedules = data.filter((schedule) => 
      dayjs(inputDate).isSame(schedule.when, "day")
    )

    return dailySchedules, inputSchedules
  } catch (error) {
    console.error(error)
    alert('Erro ao buscar agendamentos')
  }
}