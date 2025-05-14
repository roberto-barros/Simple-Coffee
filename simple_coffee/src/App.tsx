import style from "./App.module.css";
import Banner from "./components/Banner";
import Coffee from "./components/Coffee";

function App() {
  return (
    <>
      <Banner />
      <div className={style.container}>
        <h1>Our Collection</h1>
        <p>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <div className={style.links}>
          <a href="#">All Products</a>
          <a href="#">Available Now</a>
        </div>
        <Coffee />
      </div>
    </>
  );
}

export default App;
