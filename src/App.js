import "./index.css";
import React from "react";

function Header(props) {
  return (
    <section>
      <h1> We serve the best {props.Food}</h1>
    </section>
  );
}
function Main(props) {
  return (
    <section>
      <h1> Choose your {props.Toppings}</h1>
    </section>
  );
}
function Footer(props) {
  return (
    <section>
      <h1> Choose your {props.Desert}</h1>
    </section>
  );
}
function App() {
  return (
    <div className="App">
      <Header Food="Pizza" />
      <Main Toppings="" />
      <Footer Desert="" />
      <h2>Choose your magical Toppings happen!</h2>
    </div>
  );
}
export default App;
