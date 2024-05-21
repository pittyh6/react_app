import ListGroup from "./components/ListGroup";
import React from "react";

function App() {
  let items = ["Sydney", "Tokyo", "Krabi", "Bali", "Bangkok", "Ho Chi Min"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
      <ListGroup items={items} heading="List Group" />
    </div>
  );
}

export default App;
