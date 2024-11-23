import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

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
}

function ListGroup({ items, heading }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();

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
              navigate("scenario", { state: index });
            }}
          >
            <Button text={item.text} color={item.color}></Button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
