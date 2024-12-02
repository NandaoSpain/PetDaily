import dayjs from "dayjs"
import { openingHours } from "../../utils/openning-hours.js"
export function hoursLoad({ date }) {
  /* Aqui fiz uma requisição para o arquivo de horas abertas, fiz um map para exibir
  as horas de abertura fazendo um split e para separar pelos 2 pontos, desestruturando
  e pegando somente a primeira posição do array, omitindo a segunda posição.*/
 const opening = openingHours.map((hour) => {
  const [scheduleHour] = hour.split(':')
  
  // Verifica se a hora agora é anterior à hora de abertura do horário de atendimento.
  const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
  
  // retorna se o horário está disponivel
  return {
    hour,
    isAvailable:!isHourPast,
  }
})
// Cria um select com os horários de atendimento disponíveis, já preenchendo com a hora atual.
const select = document.querySelector("select")
opening.forEach(({ hour, isAvailable}) =>  {  
  const option = document.createElement("option")
  if (isAvailable) {
    option.selected = true
    option.style.color = "#B7D4FF"
  } else {
    option.disabled = true 
    option.style.color = "#D4A5A5"
    option.style.cursor = "not-allowed"
  }
  option.textContent = hour
  option.value = hour
  select.append(option)
})
}