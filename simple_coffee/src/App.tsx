import style from "./App.module.css";
import Banner from "./components/Banner";
import Card from "./components/Card";
import { useFetch } from "./hooks/useFetch";

const url =
  "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json";

function App() {
  const { data: items, loading, error } = useFetch(url);
  console.log(items);

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
        {loading && <p className={style.loading}>Carregando dados...</p>}
        {error && <p>{error}</p>}
        <div className={style.card_list}>
          {items &&
            items.map((item) => (
              <>
                {console.log(typeof item)}
                <Card key={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  votes={item.votes}
                  popular={item.popular}
                  available={item.available}
                />
              </>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
