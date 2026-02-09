import React, { useState } from "react";
import "./App.css";

// Define the base URL of your backend
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Generic function to fetch data from backend
  const fetchData = async (endpoint) => {
    setLoading(true);
    setError("");
    setData(null);

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="App">
        <h1>Welcome to the App</h1>
        <div className="buttons">
          <button onClick={() => fetchData("/users")}>List Users</button>
          <button onClick={() => fetchData("/quotes")}>List Quotes</button>
        </div>
        <div className="output">
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>Error: {error}</p>}
          {data && (
              <ul>
                {data.map((item, index) => (
                    <li key={index}>{JSON.stringify(item, null, 2)}</li>
                ))}
              </ul>
          )}
        </div>
      </div>
  );
}

export default App;
