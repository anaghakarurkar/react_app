import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Sanfranciso", "India", "Tokyo", "Paris"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
