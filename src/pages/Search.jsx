import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Search = () => {
  const [searchUrl, setSearchUrl] = useState("")
  const [searchData, setSearchData] = useState([])
  const [errorMessage, setErrorMessage] = useState("")

  const url = useSelector((state) => state.mealApiUrl.mealUrl)
  
  const getSearchData = async () => {
    try {
      const res = await axios.get(searchUrl)
      setSearchData(res.data.meals)
      console.log(res.data.meals);
      console.log(searchData);
    } catch (error) {
      setErrorMessage("Not Found")
    }
  }

  useEffect(() => {
    setSearchUrl(url[0])
    console.log(searchUrl);
    getSearchData()
  }, [searchUrl])

  return (
    <div className="flex flex-wrap justify-center items-center gap-8">
      {errorMessage ? <p className="text-white text-5xl">{errorMessage}😓</p>
        : 
        <>
          {searchData.map((element) => {
            <div className="card w-64 bg-[#e9ddd2df] shadow-xl" key={element.idMeal}>
            <figure className="px-10 pt-10">
              <img
                src={element.strMealThumb}
                alt="Category Image"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{element.strMeal}</h2>
            </div>
          </div>
          })}
        </>
      }
    </div>
  );
};

export default Search;
