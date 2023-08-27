import { useState, useContext } from "react";
import axios from "axios";
import { ShorterContext } from "../hooks/useStateContext";
// import useStateContext from "../hooks/useStateContext";

export default function ShorterInput() {
  const [query, setQuery] = useState("");
  // const [searchResults, setSearchResults] = useState(null);
  // const { setContext, context } = useStateContext();
  const { addToLinks } = useContext(ShorterContext);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.shrtco.de/v2/shorten?`, {
        params: {
          url: query,
        },
      });

      // setSearchResults(response.data);
      const newUrlShorter = response.data.result.short_link;
      const newBaseShorter = query;
      const newUrl = {
        base: newBaseShorter,
        shorter: newUrlShorter,
      };

      // setContext(newUrl);
      addToLinks(newUrl);
      console.log(newUrl);
      setQuery("");
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  return (
    <div className="bg-purple-950 p-5 md:p-10 flex flex-col md:flex-row gap-3 md:gap-5 font-poppins rounded-lg">
      <input
        type="text"
        placeholder="Shorten a link here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border-2 py-3 text-lg rounded-lg border-black flex-1"
      />
      <button
        className="bg-cyan-500 hover:bg-cyan-600 transition-colors duration-200 px-6 py-3 rounded-lg text-white font-semibold text-lg"
        onClick={handleSearch}
      >
        Shorten It!
      </button>
    </div>
  );
}
