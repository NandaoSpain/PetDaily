import dayjs from "dayjs"

const periodMorning = document.getElementById("morning")
const periodAfternoon = document.getElementById("afternoon")
const periodNight = document.getElementById("night")

export function renderSchedules({ dailySchedules }) {
  try {
    // Verifica se os elementos foram encontrados
    if (!periodMorning || !periodAfternoon || !periodNight) {
      throw new Error("Um ou mais elementos de períodos não foram encontrados no DOM.")
    }
    
    // Limpa as listas
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    const sortedSchedules = dailySchedules.sort((a, b) => {
      return dayjs(a.when).unix() - dayjs(b.when).unix() // Ordena pelo horário
    })

    // Renderiza na tela os agendamentos por período
    sortedSchedules.forEach((schedule) => {
      const { data, when, id } = schedule // Desestruturação para acessar dados do agendamento
      const { name, pet, description } = data
      const hour = dayjs(when).format("HH:mm")

      // Cria o item do agendamento
      const item = document.createElement("div")
      item.classList.add("card-line")

      // Adiciona o conteúdo ao item
      item.innerHTML = `
        <div class="card-line-info">
          <div class="time">${hour}</div>
          <div class="names">
            <div class="pet-name">${pet}</div>
            <div>/</div>
            <div class="client-name">${name}</div>
          </div>
        </div>
        <div class="service" >${description}</div>
        <div>
          <a class="remove-button" data-id="${id}" href="#">Remover agendamento</a>
        </div>
      `
      
      

      // Classifica o agendamento por período
      const scheduleHour = dayjs(when).hour()
      if (scheduleHour < 12) {
        periodMorning.appendChild(item) // Manhã
      } else if (scheduleHour >= 12 && scheduleHour < 18) {
        periodAfternoon.appendChild(item) // Tarde
      } else {
        periodNight.appendChild(item) // Noite
      }

      

    })
  } catch (error) {
    console.error("Erro ao renderizar agendamentos:", error.message)
    alert("Não foi possível exibir os agendamentos.")
  }
}
