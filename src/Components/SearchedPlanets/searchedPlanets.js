// @flow
import React, { PureComponent } from 'react';
import './searchedPlanets.scss';



type Props = {
  planetName: string,
  population: number,
  onCardClick: number => void,
  planetId: number
};

export default class SearchCard extends PureComponent<Props, {}> {
  onCardClick = () => {
    this.props.onCardClick(this.props.planetId);
  };

  render() {
    return (
      <div onClick={this.onCardClick} className="search-card">
      
        <div>
          <p> {this.props.planetName} </p>
          <div>
            {this.props.population }
            {this.props.population > 10000 }
            {this.props.population > 100000 }
            {this.props.population > 10000000 }
            {this.props.population > 100000000 }
          </div>
        </div>

      </div>
    );
  }
}
