import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

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
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectItem}
      />
    </>
  );
}

export default App;
