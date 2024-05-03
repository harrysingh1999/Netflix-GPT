import React, { useRef } from "react";
import { openai } from "../Utils/openAI";

export default function AI_Search() {
  const searchText = useRef(null);

  const handleAI_Search = async () => {
    const searchResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-3.5-turbo",
    });
    console.log(searchResult.choices);
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
