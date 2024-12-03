import { apiConfig } from "./api-config.js"

export async function scheduleNew({ id, when, data }) {
  try {
    await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, when, data }),
    })
    // aqui é onde vai chamar o modal 
    console.log("Schedule created successfully")
  } catch (error) {
    console.error(error)
  }
}