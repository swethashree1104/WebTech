import React, { useState, useEffect } from "react";

function App() {
  // State variables
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect for API call
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // runs only once

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>User List</h1>

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Data */}
      <ul style={{ listStyle: "none" }}>
        {data.map((user) => (
          <li key={user.id} style={{ margin: "10px" }}>
            <b>{user.name}</b> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;