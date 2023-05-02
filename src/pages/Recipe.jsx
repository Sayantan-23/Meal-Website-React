import { useEffect, useState } from "react";
import useStore from "../app/store";
import axios from "../axios/axios";

const Recipe = () => {
  const [searchData, setSearchData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const inputData = useStore((state) => state.inputValue);

  const getRecipe = async () => {
    try {
      const res = await axios.get(`/search.php?s=${inputData}`);
      setSearchData(res.data.meals);
      localStorage.setItem("lists", JSON.stringify(res.data.meals));
    } catch (error) {
      setErrorMessage("Sorry Recipe Not Found");
    }
  };

  const getRecipeFromLocalStorage = async () => {
    const recipe =
      localStorage.getItem("lists") !== null
        ? JSON.parse(localStorage.getItem("lists"))
        : [];
    if (recipe.length !== 0) {
      setSearchData(recipe);
    } else {
      setErrorMessage("Sorry Recipe Not Found");
    }
  };

  useEffect(() => {
    console.log(inputData);
    if (inputData.trim().length === 0) {
      getRecipeFromLocalStorage();
    } else {
      getRecipe();
    }
  }, []);

  console.log(searchData);

  return (
    <>
      {searchData.map((element) => {
        return (
          <div className="flex flex-col pt-28" key={element.idMeal}>
            <div className="flex sm:flex-col justify-center sm:justify-between items-center p-2">
              <figure className="">
                <img
                  src={element.strMealThumb}
                  alt="Meal Image"
                  className="rounded-xl max-h-96 sm:w-64"
                />
              </figure>
              <p className="text-white">{element.strMeal}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Recipe;
