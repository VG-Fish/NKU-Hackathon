import { useState } from "react";
import Button from "./Button";

interface ListGroupProps {
  items: {
    text: string;
    color:
      | "primary"
      | "secondary"
      | "success"
      | "danger"
      | "warning"
      | "info"
      | "light"
      | "dark";
  }[];
  heading: string;
  onSelectedItem: (item: { text: string; color: string }) => void;
}

function ListGroup({ items, heading, onSelectedItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
          >
            <Button
              text={item.text}
              color={item.color}
              onClick={() => {}}
            ></Button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
