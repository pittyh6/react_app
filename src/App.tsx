import ListGroup from "./components/ListGroup";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = ["Sydney", "Tokyo", "Krabi", "Bali", "Bangkok", "Ho Chi Min"];
  const textBtn = "Click Here!!!";
  const [alertVisible, setAlertVisibility] = useState(false);

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
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisibility(false);
          }}
        >
          Hello <i>Gorgeous</i>
        </Alert>
      )}
      <Button
        children={textBtn}
        color="dark"
        onClick={() => setAlertVisibility(true)}
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
