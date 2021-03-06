function Card(props) {
const onClickButton = () => {
  alert(props.title)
}


  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart_anliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{props.price} uah</b>
        </div>
        <button className="button" onClick={onClickButton}>
          <img width={11} height={11} src="/img/Plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}
export default Card;
