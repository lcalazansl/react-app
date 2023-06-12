// import { Fragment } from "react";

import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    // empty tags in place of <fragment></fragment>
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex == index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => {setSelectedIndex(index);}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
<div></div>;
