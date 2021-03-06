function Drawer() {
  return (
    <div style={{ display: `none` }} className="overlay">
       <div className="drawer">
      <h2 className="d-flex justify-between mb-30">
        Корзина{" "}
        <img className="removeBtn cu-p" src="/img/btnRemove.svg" alt="remove" />{" "}
      </h2>

      <div className="items">
        <div className="cartItem d-flex align-center mb-20">
          <div
            style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
            className="cartItemImg"
          ></div>

          <div className="mr-20 flex">
            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
            <b>10 500 uah</b>
          </div>
          <img className="removeBtn" src="/img/btnRemove.svg" alt="remove" />
        </div>

        <div className="cartItem d-flex align-center mb-20">
          <div
            style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
            className="cartItemImg"
          ></div>

          <div className="mr-20 flex">
            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
            <b>10 500 uah</b>
          </div>
          <img className="removeBtn" src="/img/btnRemove.svg" alt="remove" />
        </div>
      </div>

      <div className="cartTotalBlock">
        <ul>
          <li>
            <span>Итого</span>
            <div></div>
            <b>21 000 uah</b>
          </li>
          <li>
            <span>Налог 5%:</span>
            <div></div>
            <b>1050 uah</b>
          </li>
        </ul>
        <button className="greenButton">
          Оформить заказ <img src="/img/arrow.svg" alt="arrow" />{" "}
        </button>
      </div>
    </div>
      </div>
    
  );
}

export default Drawer;
