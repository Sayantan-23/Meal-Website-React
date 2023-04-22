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
      setSearchData(res.data)
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
    <>
      {errorMessage ? "" : ""}
    </>
  );
};

export default Search;
