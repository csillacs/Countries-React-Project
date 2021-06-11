import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../redux/actions";

export default function SearchField(props) {
  const input = useSelector((store) => store.allCountries.input);
  const dispatch = useDispatch();

  const searchCountry = (event) => {
    dispatch(search(event.target.value));
  };

  return (
    <div className="">
      <input
        onChange={searchCountry}
        value={input}
        type="text"
        placeholder="Search.."
        className="border border-gray-300 rounded p-1 dark:bg-gray-900 dark:text-white"
      ></input>
    </div>
  );
}
