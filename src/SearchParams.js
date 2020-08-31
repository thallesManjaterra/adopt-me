import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropwdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropwdown] = useDropdown("Breed", "breed", breeds);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropwdown />
        <BreedDropwdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
