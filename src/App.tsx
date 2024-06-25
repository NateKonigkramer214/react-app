import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Tokyo", "London", "Paris"];
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={(item) => console.log(item)}
      ></ListGroup>
    </div>
  );
}

//Exporting a componet
export default App;
