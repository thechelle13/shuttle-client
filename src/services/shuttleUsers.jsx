export const getShuttleUser = () => {
    return fetch(`http://localhost:8000/users/shuttleusers`, {
      method: "GET",
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_token")}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  export const editShuttleUser = (shuttleuserId, updatedShuttleUser) => {
    return fetch(`http://localhost:8000/users/shuttleusers/${shuttleuserId}`, {
      method: "PUT",
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedShuttleUser), 
    });
  };
  

  export const deleteShuttleUser = (shuttleuserId) => {
        return fetch(`http://localhost:8000/users/shuttleusers/${shuttleuserId}`, 
        {
            method: "DELETE",
            headers: {
                Authorization: `Token ${localStorage.getItem("auth_token")}`,
            },
        })
    }

  