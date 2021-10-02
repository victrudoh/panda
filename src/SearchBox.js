import React from "react";

const SearchBox = ({ searchNews }) => {
  return (
    <div className="pa1">
      <input
        className="pa1 ba b--gold bg-lightest-blue br4 grow tc bw2 shadow-S w-40"
        type="search"
        placeholder="Search news"
        name="search"
        onChange={searchNews}
      />
    </div>
  );
};

export default SearchBox;
