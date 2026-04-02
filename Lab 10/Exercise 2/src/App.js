import React, { useState } from "react";

function App() {
  // State for list
  const [items, setItems] = useState([]);

  // State for input
  const [input, setInput] = useState("");

  // Add item
  const addItem = () => {
    if (input.trim() === "") return;

    const newItem = {
      id: Date.now(), // unique key
      text: input
    };

    setItems([...items, newItem]);
    setInput(""); // clear input
  };

  // Remove item
  const removeItem = (id) => {
    const updatedList = items.filter((item) => item.id !== id);
    setItems(updatedList);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Item List</h1>

      {/* Input */}
      <input
        type="text"
        placeholder="Enter item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addItem} style={{ marginLeft: "10px" }}>
        Add
      </button>

      {/* List Display */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.length === 0 ? (
          <p>No items available</p>
        ) : (
          items.map((item) => (
            <li key={item.id} style={{ margin: "10px" }}>
              {item.text}
              <button
                onClick={() => removeItem(item.id)}
                style={{ marginLeft: "10px" }}
              >
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;