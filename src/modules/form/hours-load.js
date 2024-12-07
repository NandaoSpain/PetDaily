import dayjs from "dayjs"
import { openingHours } from "../../utils/openning-hours.js"
import { schedulesDay } from "../schedules/load.js"
const hours = document.getElementById("time-date")
const inputDate = document.getElementById("date-time")

inputDate.onchange = () => {
  schedulesDay()
}

export function hoursLoad({ date, inputSchedules }) {
  // Limpa a lista de horários
  hours.innerHTML = ""  
  
  // Obtém a lista de horários ocupados
  const unavailableHours = inputSchedules.map((schedule) => {
    return dayjs(schedule.when).format("HH:mm")
  })

  /* Aqui fiz uma requisição para o arquivo de horas abertas, fiz um map para exibir
  as horas de abertura fazendo um split e para separar pelos 2 pontos, desestruturando
  e pegando somente a primeira posição do array, omitindo a segunda posição.*/

  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":")
    
    // Verifica se a hora agora é anterior à hora de abertura do horário de atendimento.
    const isHourPast = dayjs(date.value).add(scheduleHour, "hour").isBefore(dayjs())
    
    // Verifica se o horário está disponível
    const available = !unavailableHours.includes(hour) && !isHourPast
    
    // Retorna o horário e a disponibilidade
    return {
      hour,
      available,
    }
  })
  
  const select = document.querySelector("select")
  // Cria um select com os horários de atendimento disponíveis, já preenchendo com a hora atual.
  opening.forEach(({ hour, available }) => { 
    const option = document.createElement("option")
    // Se a data atual é no futuro todos os horários recebem 'available' como true
    
    
    // Se o horário está disponível
    if (available) {
      option.selected = true
      option.style.color = "#B7D4FF"
    } else {
      option.disabled = true
      option.style.color = "#D4A5A5"
      option.style.cursor = "not-allowed"
    }
    
    // Define o conteúdo da opção do select
    option.textContent = hour
    option.value = hour

    // Adiciona os headers para as diferentes partes do dia
    if (hour === "06:00") {
      hourHeaderAdd("Manhã")
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde")
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite")
    }

    // Adiciona a opção ao select
    select.append(option)
  })
}

function hourHeaderAdd(title) {
  const select = document.querySelector("select")
  const header = document.createElement("option")
  header.textContent = title
  header.disabled = true
  header.style.backgroundColor = "#1E1E1E"
  header.style.cursor = "not-allowed"
  header.style.color = "#FFF"
  select.append(header)
}
