import React, { useRef } from "react";
import { openai } from "../Utils/openAI";
import { API_Options, aifakeData } from "../Utils/constantData";
import { refFromURL } from "firebase/database";

export default function AI_Search() {
  const searchText = useRef(null);

  const searchAIResponse = async (input) => {
    let response = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${input}&include_adult=false&language=en-US&page=1`,
      API_Options
    );
    let parsedJSON = await response.json();
    let filteredData = parsedJSON.results.filter(
      (item) =>
        item.original_title?.toLowerCase() === input.toLowerCase() &&
        item.poster_path !== null
    );
    return filteredData;
    return parsedJSON.results;
  };

  const handleAI_Search = async () => {
    // let AI_Prompt = `Act as a Advanced Movie and TV show recommendation system or expert and suggest the most accurate infomation for this input: ${searchText.current.value}.
    //  Remember to provide maximum 10 results or as per the prompt`;

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
    console.log(AI_result);

    const promiseArray = AI_result.map((input) => searchAIResponse(input));
    const resolvedPromise = await Promise.all(promiseArray);
    console.log(resolvedPromise);
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
    </>
  );
}
