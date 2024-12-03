import dayjs from "dayjs"
const form = document.querySelector('form')
const selectedDate = document.getElementById('date-time')
const showDate = document.getElementById('date')

const clientName = document.getElementById('client-name')
const petName = document.getElementById('pet-name')
const phoneClient = document.getElementById('phone')
const descriptionService = document.getElementById('service')
const hourSelected = document.getElementById('time-date')

// data atual
const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

// Carrega a data atual
selectedDate.value = inputToday
showDate.value = inputToday
// Define a data minima como sendo o dia atual
selectedDate.min = inputToday

form.onsubmit = (e) => {
  e.preventDefault() 
  
  try {
    const name = clientName.value.trim()
    const date = selectedDate.value
    const pet = petName.value
    const phone = phoneClient.value
    const description = descriptionService.value.trim()
    const time = hourSelected.value

    if(!time) {
    return alert('Selecione uma hora.')
    }
    const data = {
      name,
      date,
      pet,
      phone,
      description,
      time
    }
    // recupera somente a hora
    const [hour] = time.split(':')
    // insere a hora na data
    const when = dayjs(date).add(hour, "hour")
    // gera um ID
    const id = new Date().getTime()
    // fazer um modal com o código de abaixo
    //alert(`Serviço agendado para ${when.format('DD/MM/YYYY HH:mm')} com o nome do cliente ${name}, pet ${pet}, telefone ${phone}, descrição ${description}`)
  } catch (error) {
    console.log(error)
  }
}