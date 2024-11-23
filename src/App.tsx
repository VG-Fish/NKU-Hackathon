import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import NavBar from "./components/NavBar";

function App() {
  const items = [
    ["Chicago", "test"],
    ["London", "test"],
    ["Tokyo", "test"],
    ["Cairo", "test"],
    ["Sao Paulo", "test"],
    ["Sydney", "test"],
  ];

  const handleSelectItem = (item: string[]) => {
    console.log(item);
  };

  return (
    <>
      <NavBar />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectItem}
      />
    </>
  );
}

export default App;
