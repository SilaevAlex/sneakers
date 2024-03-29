import Card from "../components/Card";
import React from "react";


function Home({
  items,
  searchValue,
  setSearchValue,
  onAddToFavorite,
  onChangeSearchInput,
  onAddToCart,
  isLoading,
}) {


  const renderItems = () => {
const filtredItems = items && items.filter((item) =>
item.title
  .toLowerCase()
  .includes(searchValue.toString().toLowerCase())
)

    return (
      isLoading
        ? [...Array(8)]
        : filtredItems
    ).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content p-40 ">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Поиск по : ${searchValue}` : `Все кроссовки`}</h1>
        <div className="search-block d-flex">
          <img src="img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              src="img/btnRemove.svg"
              alt="clear"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;
