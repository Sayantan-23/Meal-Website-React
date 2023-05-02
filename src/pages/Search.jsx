import axios from "../axios/axios";
import { createContext, useEffect, useState } from "react";
import searchIcon from "../assets/search.png";
import { Link } from "react-router-dom";
import useStore from "../app/store";

const Search = () => {
  const [inputData, setInputData] = useState("");
  const [onSearch, setOnSearch] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const changeInputValue = useStore((state)=>state.changeInputValue)

  const handleOnClick = () => {
    setOnSearch(true);
  };

  const searchOnClick = (element) => {
    setInputData(element)
    changeInputValue(element)
  };

  const getSearchData = async () => {
    try {
      const res = await axios.get(`/search.php?s=${inputData}`);
      if (res.data.meals === null) {
        setErrorMessage("Please Search For Valid Meals");
      } else {
        setSearchData(res.data.meals);
        setErrorMessage("");
      }
    } catch (error) {
      setErrorMessage("Not Found");
    }
  };

  useEffect(() => {
    if (onSearch) {
      if (inputData.trim().length === 0) {
        setOnSearch(false);
      } else {
        getSearchData();
        setOnSearch(false);
      }
    }
  }, [onSearch]);


  return (
    <>
      <div className="pt-[100px] flex w-full justify-center gap-2 sticky top-0 z-10">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered input-warning rounded-[100vmax] h-12 w-60 sm:w-80 md:w-96"
          onChange={(e) => setInputData(e.target.value)}
        />
        <button
          className="btn bg-base-100 hover:bg-amber-700 rounded-[100vmax] p-2 w-12"
          onClick={handleOnClick}
        >
          <img className="w-5" src={searchIcon} alt="Search Icon" />
        </button>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 pb-8">
        {errorMessage ? (
          <p className="text-xl sm:text-2xl md:text-5xl pt-8 text-amber-700 text-center font-medium">
            {errorMessage}🍔
          </p>
        ) : (
          <>
            {searchData.map((element) => {
              return (
                <Link to={"/recipe"} key={element.idMeal}>
                  <div
                    className="card w-64 bg-[#2f2922] shadow-xl text-white mt-8 cursor-pointer"
                    key={element.idMeal}
                    onClick={() => searchOnClick(element.strMeal)}
                  >
                    <figure className="p-2">
                      <img
                        src={element.strMealThumb}
                        alt="Meal Image"
                        className="rounded-xl"
                      />
                    </figure>
                    <div className="card-body items-center text-center text-amber-200">
                      <h2 className="card-title">{element.strMeal}</h2>
                      <span className="text-amber-400">{element.strArea}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Search;
