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
    <section style={{ textAlign: "left" }}>
      <h3> Toppings</h3>
      <ul>
        {props.Topping.map((top) => (
          <li>{top}</li>
        ))}
      </ul>
    </section>
  );
}
function Footer(props) {
  return (
    <section>
      <h3 style={{ textAlign: "left" }}> Deserts </h3>
      <ul>
        {props.Desert.map((SweetTooth) => (
          <li style={{ textAlign: "left" }}>{SweetTooth}</li>
        ))}
      </ul>
      <p style={{ textAlign: "Centre" }}> Copyright ={props.year}</p>
    </section>
  );
}
const Topping = ["Peperoni", "Sausage", "Chello Kebab", "Butter Chicken"];
const Desert = ["Red Velvet", "Cheese Cake", "Truffles", "Firni"];

function App() {
  return (
    <div className="App">
      <Header Food="Pizza" />
      <Main Topping={Topping} />
      <Footer Desert={Desert} year={new Date().getFullYear()} />
    </div>
  );
}
export default App;
