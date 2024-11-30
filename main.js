// Seleciona os elementos necessários
const openModalBtn = document.getElementById('openModalBtn')
const closeModalBtn = document.getElementById('closeModalBtn')
const closeModalSpan = document.getElementById('closeModalSpan')
const modal = document.getElementById('modal')

// Abre o modal
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex' // Exibe o modal como flexbox
})

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