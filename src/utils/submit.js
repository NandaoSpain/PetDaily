const dayjs = require("dayjs");
const form = document.querySelector('form')
const selectedDate = document.getElementById('date')

// Carrega a data atual
selectedDate.value = dayjs(new Date()).format('YYYY-MM-DD')

// Define a data minima como sendo o dia atual
selectedDate.min = dayjs(new Date()).format('YYYY-MM-DD')

form.onsubmit = (e) => {
  e.preventDefault()  
}