export const getVehicles = () => {
    return fetch(`http://localhost:8000/vehicles`,
    {
        method: "GET",
        headers: {
            Authorization: `Token ${localStorage.getItem("auth_token")}`,
            "Content-Type": "application/json"
        }
      }).then((res) => res.json())
  }

export const getVehicleById = (id) => {
    return fetch(`http://localhost:8000/vehicles/${id}`,
    {
        method: "GET",
        headers: {
            Authorization: `Token ${localStorage.getItem("auth_token")}`,
            "Content-Type": "application/json"
        }
      }).then((res) => res.json())
}