import "./Main.css";
import Landing from "../Landing/Landing";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Error from "../Error - 404/Error";
import SearchForm from "../Search/Search";
import { movies, savedMovies } from "../../utils/constants";
import { useEffect, useState } from "react";
import Search from "../Search/Search";
import Card from "../Card/Card";
import Profile from "../Profile/Profile";

function Main({ name, setLoggedIn }) {
  const [moviesAll, setMoviesAll] = useState([]);
  const [saveMovie, setSaveMovie] = useState([]);
  const [isCheckMoviesAll, setIsCheckMoviesAll] = useState(true);
  const [isCheckMoviesSave, setIsCheckMoviesSave] = useState(true);

  useEffect(() => {
    setMoviesAll(movies);
    setSaveMovie(savedMovies);
  }, []);

  function onCheckMoviesAll() {
    if (isCheckMoviesAll) {
      setIsCheckMoviesAll(false);

      setMoviesAll(moviesAll.filter((element) => element.duration <= 40));
    } else {
      setIsCheckMoviesAll(true);
      setMoviesAll(movies);
    }
  }

  function onCheckMoviesSave() {
    if (isCheckMoviesSave) {
      setIsCheckMoviesSave(false);
      setSaveMovie(saveMovie.filter((element) => element.duration <= 40));
    } else {
      setIsCheckMoviesSave(true);
      setSaveMovie(savedMovies);
    }
  }

  return (
    <main className="main">
      {
        {
          homepage: (
            <>
              <Landing />
            </>
          ),
          signin: <Login name={name} setLoggedIn={setLoggedIn} />,
          signup: <Register name={name} setLoggedIn={setLoggedIn} />,
          error: <Error />,
          profile: <Profile  name={name} setLoggedIn={setLoggedIn} />,
          movies: (
            <>
              <Search
                isCheck={isCheckMoviesAll}
                changeShot={onCheckMoviesAll}
              />
              <Card movies={moviesAll} />
            </>
          ),
          savedmovies: (
            <>
              <SearchForm
                isCheck={isCheckMoviesSave}
                changeShot={onCheckMoviesSave}
              />
              <Card movies={saveMovie} />
            </>
          ),
        }[name]
      }
    </main>
  );
}

export default Main;
