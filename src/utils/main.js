"use strict"
// Configuração do dayjs
import "../libs/dayjs.js"

// Imports JS
import "../modules/form/submit.js"
import "../modules/dom-load.js"
import "../modules/form/date-change.js"
import { removeSchedule } from "../services/remove-schedule.js"

// Imports CSS
import "../css/global.css"
import "../css/styles.css"

// Seleciona os elementos necessários
const openModalBtn = document.getElementById('openModalBtn')
const closeModalBtn = document.getElementById('closeModalBtn')
const closeModalSpan = document.getElementById('closeModalSpan')
const modal = document.getElementById('modal')
const successModal = document.getElementById('successModal')
const modalSuccessParagraph = document.getElementById('modal-success-paragraph')

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-button")) {
    event.preventDefault();
    const id = event.target.dataset.id; // Obtém o ID armazenado no atributo data-id
    if (id) {
      removeSchedule({ id }); // Chama a função para remover agendamento
      console.log(`Removing schedule with ID: ${id}`);
    } else {
      console.error("ID do agendamento não encontrado.");
    }
  }
})

// Abre o modal
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex' // Exibe o modal como flexbox
})

export function successfullyModal ({ pet, when}) {    
    successModal.style.display = 'flex' // Exibe o modal de sucesso
    modalSuccessParagraph.innerHTML = `Agendado com sucesso, esperamos <strong>${pet}</strong> para o dia <strong>${when.format('DD/MM/YYYY HH:mm')}</strong>` // Atualiza o título do modal de sucesso
    setTimeout(() => {
        successModal.style.display = 'none' // Esconde o modal de sucesso
        modal.style.display = 'none' // Esconde o modal
    }, 4000) // Mostra o modal de sucesso por 3 segundos    
}

// Fecha o modal ao clicar no botão de fechar
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none' // Esconde o modal
})
closeModalSpan.addEventListener('click', () => {
    modal.style.display = 'none' // Esconde o modal
})
// Fecha o modal ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none' // Esconde o modal
    }
})