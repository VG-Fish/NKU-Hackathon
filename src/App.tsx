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

  return (
    <>
      <NavBar />
      <div>
        <ListGroup
          items={items}
          heading="Choose one of the following Scenarios:"
        />
      </div>
    </>
  );
}

export default App;
