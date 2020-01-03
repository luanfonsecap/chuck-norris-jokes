import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./Styles.css";
import Logo from "../../assets/chucknorris_logo.png";
import api from "../../services/api";

export default function List() {
  const [msg, setMsg] = useState([]);
  const categories = useSelector(state => state.jokes.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get("/categories")
      .then(res => res.data)
      .then(list => dispatch({ type: "LOAD_CATEGORIES", list }))
      .catch(err => {
        console.log(err);
        setMsg("Erro, recarregue a página!");
      });
  });

  function handleFact(categorie) {
    dispatch({ type: "TOGGLE_CATEGORIE", categorie });
  }

  return (
    <>
      <header className="header">
        <h1 className="header__title">chuck norris jokes</h1>
        <span className="header__msg">{msg}</span>
      </header>
      <section className="container">
        <img src={Logo} className="logo" alt="Logo Chuck Norris" />
        <div className="table-list">
          <h2 className="table-list__title">Select a categorie:</h2>
          <table className="table-list__table">
            {categories.map(categorie => (
              <tr className="table-list__line" key={categorie}>
                <td className="table-list__item">
                  <Link onClick={() => handleFact(categorie)} to="/joke">
                    {categorie.toUpperCase()}
                  </Link>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </section>
    </>
  );
}
