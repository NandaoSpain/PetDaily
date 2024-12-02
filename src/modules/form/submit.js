import dayjs from "dayjs"
const form = document.querySelector('form')
const selectedDate = document.getElementById('date-time')
const showDate = document.getElementById('date')

// data atual
const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

// Carrega a data atual
selectedDate.value = inputToday
showDate.value = inputToday
// Define a data minima como sendo o dia atual
selectedDate.min = inputToday

form.onsubmit = (e) => {
  e.preventDefault()  
}