import React, { useRef } from "react";
import { openai } from "../Utils/openAI";
import { API_Options, aifakeData } from "../Utils/constantData";
import { refFromURL } from "firebase/database";
import { useDispatch } from "react-redux";
import { addAI_Movies } from "../Utils/movieSlice";
import AI_ResultList from "./AI_ResultList";

export default function AI_Search() {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchAIResponse = async (input) => {
    let response = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${input}&include_adult=false&language=en-US&page=1`,
      API_Options
    );
    let parsedJSON = await response.json();
    let filteredData = parsedJSON.results.filter(
      (item) =>
        item.original_title?.toLowerCase().trim() ===
          input.toLowerCase().trim() ||
        (item.original_name?.toLowerCase().trim() ===
          input.toLowerCase().trim() &&
          item.poster_path !== null)
    );
    return filteredData;
  };

  const handleAI_Search = async () => {
    // let AI_Prompt = `Act as a Advanced Movie and TV show recommendation system or expert and suggest the most accurate infomation for this input: ${searchText.current.value}.
    //  Remember to provide maximum 10 results or as per the prompt, each seperated with comma`;

    // const searchResult = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: AI_Prompt }],
    //   model: "gpt-3.5-turbo",
    // });

    // if (!searchResult.choices) {
    //   // error handling
    // }

    // console.log(searchResult.choices?.[0]?.message?.content);

    // const AI_result = searchResult.choices?.[0]?.message?.content.split(",");

    const AI_result = aifakeData.split(",");

    const promiseArray = AI_result.map((input) => searchAIResponse(input));
    const resolvedPromise = await Promise.all(promiseArray);

    dispatch(
      addAI_Movies({
        AI_Movies: resolvedPromise,
        AI_Movies_Names: AI_result,
      })
    );
  };
  return (
    <>
      <form
        className="grid grid-cols-12 w-2/4 mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="border border-black p-2 col-span-10"
          ref={searchText}
        />
        <button
          className="border border-black p-2 col-span-2"
          onClick={handleAI_Search}
        >
          Search
        </button>
      </form>
      <AI_ResultList />
    </>
  );
}
