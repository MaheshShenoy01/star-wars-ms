// @flow

import React, { PureComponent } from 'react';
import './searchField.scss';


type Props = {
  onSearchPlanet: string => void
};

export default class Search extends PureComponent<Props, {}> {
  onSearch = (e: SyntheticEvent<HTMLButtonElement>) => {
    window.setTimeout(this.props.onSearchPlanet(e.currentTarget.value), 1000);
  };

  render() {
    return (
      <div className="search-wrapper">
      
        <p> Search For Planets in Starwars World </p>
        <div className="input-wrapper">
        
          <input className="sw-field"
            onChange={this.onSearch}
            type="text"
            placeholder="Find Planet"
            autoFocus
          />
        </div>
      </div>
    );
  }
}
