import React, { useState } from "react";
import { MouseEvent } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  //let selectedIndex = -1;
  // Event handle
  //const handleClick = (event: MouseEvent) => console.log("Clicked", event);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    //  to create multiple components use fragment
    <>
      <h1>{heading}</h1>
      {
        items.length === 0 && (
          <p>No item found</p>
        ) /* if the items =0 than show No item found. Same as {items.length === 0 ? <p>No item found</p> : null} */
      }
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            //onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
