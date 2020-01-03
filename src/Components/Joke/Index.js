import React, { useEffect, useCallback } from "react";

import "./Styles.css";
import { Button } from "../../StyledComponents";
import api from "../../services/api";

import { useDispatch, useSelector } from "react-redux";

export default function Joke() {
  const categorie = useSelector(state => state.jokes.categorie);
  const joke = useSelector(state => state.jokes.joke);
  const dispatch = useDispatch();

  const cb = useCallback(() => {
    api
      .get(`/random?category=${categorie}`)
      .then(res => res.data)
      .then(joke => {
        dispatch({ type: "TOGGLE_JOKE", joke });
      });
  }, [dispatch, categorie]);

  useEffect(() => {
    cb();
  }, [cb]);

  function changeJoke() {
    cb();
  }

  return (
    <article className="content">
      <div>
        <div className="joke-box">
          <p className="joke-box__text">{joke.value}</p>
        </div>
        <div className="btn-area">
          <Button onClick={changeJoke}>One more !</Button>
        </div>
      </div>
    </article>
  );
}
