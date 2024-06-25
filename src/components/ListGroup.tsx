import { useState } from "react"; // Importing the useState hook from the "react" library

interface ListGroupProps {
  items: string[]; // An array of strings representing the items to be displayed in the list group
  heading: string; // A string representing the heading of the list group
  onSelectItem: (item: string) => void; // A function that will be called when an item is selected
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // hook
  const [selectedIndex, setSelectedIndex] = useState(-1); // Using the useState hook to create a state variable selectedIndex and a function setSelectedIndex to update its value

  return (
    <>
      <h1>{heading}</h1> {/* Displaying the heading */}
      {items.length === 0 && <p>No item found</p>}{" "}
      {/* Displaying a message if the items array is empty */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active" // Adding the "active" class if the current item is selected
                : "list-group-item" // Otherwise, adding the default class
            }
            key={item} // Assigning a unique key to each list item
            onClick={() => {
              setSelectedIndex(index); // Updating the selectedIndex state variable when an item is clicked
              onSelectItem(item); // Calling the onSelectItem function with the selected item as an argument
            }}
          >
            {item} {/* Displaying the item */}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup; // Exporting the ListGroup component as the default export
