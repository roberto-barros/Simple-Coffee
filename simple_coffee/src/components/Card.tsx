import style from "./Card.module.css";
import star_fill from '../assets/Star_fill.svg'
import star from '../assets/Star.svg'


type Props = {
  name: string;
  image: string;
  price: string;
  rating: number;
  votes: number;
  popular: boolean;
  available: boolean;
};



function Card(props: Props) {
  return (
    <div className={style.card_container}>
      <div className={style.image_container}>
        <img
          className={style.image}
          src={props.image}
          alt=""
        />
        {props.popular && <span className={style.category}>Popular</span>}
        {/* {!props.popular && <span className={style.category} hidden>Popular</span>} */}
      </div>
      <div className={style.details_container}>
        <div>
          <p>{props.name}</p>
          <span className={style.price}>{props.price}</span>
        </div>
        <div>
          <div>
            <img src={props.rating ? star_fill : star} alt="rating star" />
            {props.rating && <p>{props.rating}</p>}
            {props.votes ? <span>({props.votes} votes)</span> : <span>No ratings</span>}
          </div>
          {!props.available && <p className={style.available}>Sold out</p>}          
        </div>
      </div>
    </div>
  );
}

export default Card;
