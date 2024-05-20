function ListGroup() {
  const items = ["Sydney", "Tokyo", "Krabi", "Bali", "Bangkok", "Ho Chi Min"];
  return (
    //  to create multiple components use fragment
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
