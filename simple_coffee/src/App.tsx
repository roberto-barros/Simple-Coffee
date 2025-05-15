import style from "./App.module.css";
import Banner from "./components/Banner";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Banner />
      <div className={style.container}>
        <h1>Our Collection</h1>
        <p className={style.subtitle}>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <div className={style.links}>
          <a href="#">All Products</a>
          <a href="#">Available Now</a>
        </div>
        <div className={style.card_list}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
