import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.props.portfolioStocks.map(stock => <Stock key={stock.id} stock={stock} handlePortfolio={this.props.removePortfolio}/>)}
      </div>
    );
  }

}

export default PortfolioContainer;
