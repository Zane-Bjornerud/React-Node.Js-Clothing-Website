import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

//RAFCE

//import ListGroup from "./components/ListGroup";
function App() {
  //ListGroup Component
  /*let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  */

  //<Message /> is self closing

  //Button + Alert Combo
  /*
  const [alertVisible, setAlertVisibility] = useState(false); //initialize to false so it is hidden
  */

  const [slideIndex, setSlideIndex] = useState(false);
  let navItems = ["New", "Men", "Women", "Clearence"];
  let slides = ["First Slide", "Second Slide", " Third Slide"];
  const handleSelectSlide = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Navbar navItems={navItems}> Lothes </Navbar>
      <Carousel
        onNext={() => setSlideIndex(slideIndex)}
        slides={slides}
      ></Carousel>
    </div>

    //Alert DIV
    /*
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
    */

    //Button + Alert DIV
    /*
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color={"secondary"} onClick={() => setAlertVisibility(true)}>
        Fuck
      </Button>
    </div>
    */

    //ListGroup DIV
    /*
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
    */
  );
}
//export so it can be used somewhere else
export default App;
