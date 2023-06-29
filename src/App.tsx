// import ListGroup from "./components/ListGroup";
import Button from "./components/DrepressoButton";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }
  // return (
  //   <div>
  //     <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
  //   </div>
  // );
  return (
    // <div className="alert alert-primary">
    //   Hello <span>World</span>
    // </div>
    <div>
      <Button onClick={() => console.log('espresso')}>Depresso</Button>
    </div>
  );
}

export default App;
