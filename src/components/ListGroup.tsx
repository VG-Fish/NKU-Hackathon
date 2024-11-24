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
      <div className="bg-dark text-white" style={{ minHeight: "100vh" }}>
        <h1 className="text-center mt-2">{heading}</h1>
        <ul className="list-group bg-dark text-white list-group-flush">
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active bg-dark text-white"
                  : "list-group-item bg-dark text-white"
              }
              style={{ border: "none" }}
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
      </div>
    </>
  );
}

export default ListGroup;
