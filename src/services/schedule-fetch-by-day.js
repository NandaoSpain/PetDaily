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

export async function inputFetchByDay({ inputDate }) {
  
  try {
    // aqui vai fazer a chamada para o backend usando fetch
    const response = await fetch (`${apiConfig.baseUrl}/schedules`)
    // converte a resposta para json
    const data = await response.json()
    //filtra os agendamentos pelo dia selecionado
    
    const inputSchedules = data.filter((schedule) => 
      dayjs(inputDate).isSame(schedule.when, "day")
    )

    return inputSchedules
  } catch (error) {
    console.error(error)
    alert('Erro ao buscar agendamentos')
  }
}

export async function updateSchedulesUI() {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao carregar os agendamentos.");
    }

    const { dailySchedules } = await response.json();

    // Re-renderiza os agendamentos na interface
    renderSchedules({ dailySchedules });
  } catch (error) {
    console.error("Erro ao atualizar os agendamentos:", error.message);
    alert("Não foi possível atualizar os agendamentos.");
  }
}
