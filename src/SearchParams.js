import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropwdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropwdown, setBreed] = useDropdown(
    "Breed",
    "breed",
    breeds
  );

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet
      .breeds(animal)
      .then(
        ({ breeds: apiBreeds }) => apiBreeds.map(({ name }) => name),
        console.error
      )
      .then(setBreeds);
  }, [animal]);

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
