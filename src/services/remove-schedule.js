import { updateSchedulesUI } from "./schedule-fetch-by-day"
import { apiConfig } from "./api-config";

export async function removeSchedule({ id }) {
  try {
    if (!id) {
      throw new Error("ID do agendamento não fornecido.");
    }

    const response = await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erro ao tentar remover o agendamento.");
    }

    const data = await response.json();
    console.log(data)

    updateSchedulesUI();
    
  } catch (error) {
    console.error("Erro ao remover o agendamento:", error.message);
    alert(`Erro: ${error.message}`);
  }
}