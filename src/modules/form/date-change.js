import { schedulesDay } from "../schedules/load"
// Seleciona o input de data
const selectedDate = document.getElementById('date-time')
const showDate = document.getElementById('date')

// Recarrega a lista de horarios quando a data mudar
selectedDate.onchange = () => schedulesDay()
showDate.onchange = () => schedulesDay()