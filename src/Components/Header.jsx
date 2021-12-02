import React from 'react';
import SearchBoxFilter from './SearchBoxFilter';

function Header() {
  return (
    <header id="pageHeader">
      <div id="headerCentralContainer">
        {/* <img
          src={}
          alt="Logo Star Wars"
        /> */}
        <SearchBoxFilter />
      </div>
    </header>
  );
}

export default Header;
