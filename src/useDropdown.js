import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);

  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const opt = item => (
    <option value={item} key={item}>
      {item}
    </option>
  );

  const selectOptions = options.map(opt);

  const Dropdown = () => (
    <label htmlFor={id}>
      <select
        id={id}
        value={state}
        onChange={e => setState(e.target.value)}
        onBlur={e => setState(e.target.value)}
        disabled={!options.length}
      >
        <option value="">All</option>
        {selectOptions}
      </select>
    </label>
  );

  return [state, Dropdown, setState];
};

export default useDropdown;
