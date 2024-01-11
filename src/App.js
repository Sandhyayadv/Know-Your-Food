import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchRecipe from "./SearchRecipe";

import SearchNutrition from "./SearchNutrition";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchRecipe />} />
          <Route path="searchnutrition" element={<SearchNutrition />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
