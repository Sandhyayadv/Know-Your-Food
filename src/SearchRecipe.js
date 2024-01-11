import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
import nutritionIcon from "./nutritionIcon.png";
import { Link } from "react-router-dom";

const SearchRecipe = () => {
  const API_ID = "";
  const API_KEY = "";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRecipes("banana");
  }, []);

  const getRecipes = async (search) => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    console.log(response);
    console.log(data);
    setRecipes(data.hits);
    setSearch("");
  };

  return (
    <>
      <div className="App">

        <h1 className="heading1">Recipe App</h1>
        
        <Link to="/searchnutrition">
          <img id="image" src={nutritionIcon} alt="" />
          <b style={{margin:"-90px"}}>Know Your Food</b>
        </Link> 
        <div className="search-form">
          
          <input
            className="search-bar"
            placeholder="Search for recepies"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button onClick={() => getRecipes(search)} className="search-button">
            Search
          </button>
        </div>
        <div className="recipies">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchRecipe;
