import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";

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

  const handleSelectItem = (item: { text: string; color: string }) => {
    console.log(item);
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
