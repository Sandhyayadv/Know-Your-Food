import React, { useState } from "react";
import Nutrition from "./Nutrition";
import "./Calories.css";



const API_ID="";
const API_KEY="";

const App = () => {
  const [nutrition, setNutrition] = useState([]);
  const [inputText, setInputText] = useState("");

  const apiUrl = `https://api.edamam.com/api/nutrition-details?app_id=${API_ID}&app_key=${API_KEY}`;

  const getNutrition = () => {
    const cleanedInput = inputText.trim().replace(/(\n\s*){2,}/g, "\n");
    const nutritionDetails = {
      ingr: cleanedInput.split("\n"),
      text: cleanedInput,
    };

    fetch(apiUrl, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nutritionDetails),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setNutrition(data.ingredients);
      })

      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="mb-3">
        <textarea
          className="inputBox"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          id="myBox"
          rows="20"
          cols="40"
          placeholder="Write Your Ingerdients here"
        ></textarea>
      </div>
      <button className="button" onClick={getNutrition}>
        Analyze
      </button>

      <div className="heading">
        <h3>Quantity</h3>
        <h3>Unit</h3>
        <h3>food</h3>
        <h3>Weight</h3>
        <h3>Calories</h3>
      </div>

      <div className="recipes">
        {Array.isArray(nutrition) ? (
          nutrition.map((item, index) => (
            <Nutrition
              key={index}
              quantity={item?.parsed[0]?.quantity}
              unit={item?.parsed[0]?.measure}
              food={item?.parsed[0]?.food}
              weight={item?.parsed[0]?.weight.toFixed(2)}
              calories={item?.parsed[0]?.nutrients?.ENERC_KCAL?.quantity.toFixed(
                2
              )}
            />
          ))
        ) : (
          <p>Invalid data for nutrition</p>
        )}
      </div>
    </>
  );
};

export default App;
