import { apiConfig } from "./api-config.js"
import { successfullyModal } from "../utils/main.js"
import { schedulesDay } from "../modules/schedules/load.js"
const modal = document.getElementById('modal')


export async function scheduleNew({ 
  id, 
  when, 
  data:{
    name,
    date,
    pet,
    phone,
    description,
    time
  } }) {
    try {
      await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        id, 
        when, 
        data:{
          name,
          date,
          pet,
          phone,
          description,
          time
      } }),
    })
    // chamo a função que renderiza os agendamentos para atualizar com o novo agendamento
    schedulesDay()
    // aqui escondo o modal do form
    modal.style.display = 'none'
    // aqui chamo o modal de sucesso
    successfullyModal({ when, pet })
  } catch (error) {
    console.error(error)
  }
}
