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
      <h3> Choose your {props.Toppings}</h3>
    </section>
  );
}
function Footer(props) {
  return (
    <section>
      <h3> Choose your {props.Deserts}</h3>
    </section>
  );
}
function App() {
  return (
    <div className="App">
      <Header Food="Pizza" />
      <Main Toppings="Peperoni" />
      <Footer Deserts="Puddings" />
      <h2>Choose your magical Toppings happen!</h2>
    </div>
  );
}
export default App;
