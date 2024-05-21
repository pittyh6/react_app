function ListGroup() {
  let items = ["Sydney", "Tokyo", "Krabi", "Bali", "Bangkok", "Ho Chi Min"];
  items = [];
  return (
    //  to create multiple components use fragment
    <>
      <h1>List</h1>
      {
        items.length === 0 && (
          <p>No item found</p>
        ) /* if the items =0 than show No item found. Same as {items.length === 0 ? <p>No item found</p> : null} */
      }
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
