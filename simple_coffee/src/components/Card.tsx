import style from "./Card.module.css";

type Props = {};

function Coffee({}: Props) {
  return (
    <div className={style.card_container}>
      <div className={style.image_container}>
        <img
          className={style.image}
          src="https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg"
          alt=""
        />
        <span className={style.category}>Popular</span>
      </div>
      <div className={style.details_container}>
        <div>
          <p>Cappuccino</p>
          <span>$5.20</span>
        </div>
        <div>
          <img src="./src/assets/Star_fill.svg" alt="" />
          <p>4.7</p>
          <span>(65 votes)</span>
        </div>
      </div>
    </div>
  );
}

export default Coffee;
