import "./Search.css";

function Search({ isCheck, changeShort, firstEntrance }) {
  return (
    <div className="page">
      <section className="search page__search">
        <div className="box search__container">
          <div class="container-4 search__form">
            <input
              className="search__input"
              type="search"
              id="search"
              placeholder="Фильм"
            />
            <button className="search__submit" type="submit">
              Поиск
            </button>
          </div>
        </div>
        <div>
          <div className="search__input-container"> {/*toggle switch */}
            <input type="checkbox" id="switch" />
            <label for="switch">Toggle</label>
          </div>
          <span className="search__check-text">Короткометражки</span>
        </div>
      </section>
    </div>
  );
}

export default Search;
