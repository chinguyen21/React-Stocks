import React from 'react';

class SearchBar extends React.Component {
  state={
    checked_alpha: false,
    checked_price: false
  }

  handleCheckAlpha = () => {
    this.setState({checked_alpha: !this.state.checked_alpha})
    this.props.handleAlphaOrder();
  }

  handleCheckPrice = () => {
    this.setState({checked_price: !this.state.checked_price})
    this.props.handlePriceOrder();
  }

  render(){
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={this.checked_alpha} onChange={this.handleCheckAlpha}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={this.checked_price} onChange={this.handleCheckPrice}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={this.props.handleFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  )}
}


export default SearchBar;
