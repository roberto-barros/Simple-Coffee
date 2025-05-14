type Props = {};

function Coffee({}: Props) {
  return (
    <div>
      <img
        src="https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg"
        alt=""
      />
      <span>Popular</span>
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
  );
}

export default Coffee;
