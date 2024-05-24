import ListGroup from "./components/ListGroup";
import React from "react";

function App() {
  let items = ["Sydney", "Tokyo", "Krabi", "Bali", "Bangkok", "Ho Chi Min"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={items}
        heading="List Group"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
