// Selecionar elementos do DOM
const modal = document.getElementById('modal-1');
const openModalButton = document.querySelector('.modal-button');
const closeModalButtons = document.querySelectorAll('[data-micromodal-close]');
const appointmentForm = document.getElementById('new-appointment-form');
const appointmentList = document.querySelector('ul'); // A lista principal de horários

// Função para abrir o modal
function openModal() {
  modal.style.display = 'block'; // Mostra o modal
  modal.setAttribute('aria-hidden', 'false');
}

// Função para fechar o modal
function closeModal() {
  modal.style.display = 'none'; // Esconde o modal
  modal.setAttribute('aria-hidden', 'true');
}

// Evento para abrir o modal
openModalButton.addEventListener('click', openModal);

// Evento para fechar o modal (aplicado a todos os botões que fecham o modal)
closeModalButtons.forEach((button) => {
  button.addEventListener('click', closeModal);
});

// Adicionar evento de clique fora do modal para fechar
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Função para lidar com o envio do formulário de agendamento
appointmentForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Previne o envio padrão do formulário

  // Obter dados do formulário
  const clientName = document.getElementById('client-name').value;
  const petName = document.getElementById('pet-name').value;
  const phone = document.getElementById('phone').value;
  const service = document.getElementById('service').value;
  const time = '09:00'; // Exemplo fixo para o horário

  // Criar o novo agendamento na lista
  const newAppointment = document.createElement('li');
  newAppointment.className = 'hour hour-unavailable'; // Classe para manter o estilo

  newAppointment.innerHTML = `
    <div class="card">
      <div class="card-line">
        <div>
          <div class="time">${time}</div>
          <div class="names">
            <div class="pet-name">${petName}</div>
            <div>/</div>
            <div class="client-name">${clientName}</div>
          </div>
        </div>
        <div class="service">${service}</div>
        <div class="cancel-button">
          <a href="#" class="remove-appointment">Remover agendamento</a>
        </div>
      </div>
    </div>
  `;

  // Adicionar o novo agendamento à lista
  appointmentList.appendChild(newAppointment);

  // Fechar o modal
  closeModal();

  // Limpar o formulário
  appointmentForm.reset();
});

// Evento para lidar com a remoção de agendamentos
appointmentList.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-appointment')) {
    event.preventDefault(); // Previne comportamento padrão do link
    const appointment = event.target.closest('li'); // Seleciona o item de agendamento correspondente
    appointment.remove(); // Remove o agendamento
  }
});
