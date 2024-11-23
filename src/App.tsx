import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";

function App() {
  const items: {
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
  }[] = [
    { text: "Lonely Student", color: "primary" },
    { text: "Bullied Student", color: "primary" },
    { text: "Stressed Student", color: "primary" },
  ];

  const handleSelectItem = (index: number) => {
    return <Link to="/scenarios"></Link>;
  };

  return (
    <>
      <NavBar />
      <ListGroup
        items={items}
        heading="Scenarios"
        onSelectedItem={handleSelectItem}
      />
    </>
  );
}

export default App;
