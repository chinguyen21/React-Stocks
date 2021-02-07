import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolioStocks: [],
    alphaOrder: false,
    priceOrder: false,
    filter: ''
  }

  async componentDidMount(){
    const res = await fetch("http://localhost:3000/stocks")
    const stocks = await res.json()
    this.setState({stocks})
  }

  addPortfolio = (stock) => {
    this.setState({
      portfolioStocks: [...this.state.portfolioStocks, stock]
    })
  }

  removePortfolio =(removeStock) => {
    this.setState({
      portfolioStocks: this.state.portfolioStocks.filter(stock => stock !== removeStock)
    })
  }

  handleFilter = (event) => {
    event.preventDefault()
    this.setState({filter: event.target.value})
  } 

  handleAlphaOrder = () => {
    this.setState({alphaOrder: !this.state.alphaOrder})
  }

  handlePriceOrder = () => {
    this.setState({priceOrder: !this.state.priceOrder})
  }


  render() {
    let filterStock=this.state.stocks.filter(stock => stock.type.includes(this.state.filter))
    if (this.state.alphaOrder) {filterStock=filterStock.sort((a,b) => a.name > b.name ? 1 : -1)}
    if (this.state.priceOrder) {filterStock=filterStock.sort((a,b) => a.price > b.price ? 1 : -1)}

    return (
      <div>
        <SearchBar handleFilter={this.handleFilter}
        handleAlphaOrder={this.handleAlphaOrder}
        handlePriceOrder={this.handlePriceOrder}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={filterStock} 
              handlePortfolio={this.addPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolioStocks={this.state.portfolioStocks}
              removePortfolio={this.removePortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
