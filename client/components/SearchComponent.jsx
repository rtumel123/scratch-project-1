import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from "axios";




class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.checkNow = this.checkNow.bind(this);
  }
  checkNow() {
    return axios
      .post(
        "http://localhost:3000/api/searchRecipes",
        {
          name: this.props.name,
        }
      )
      .then((results) =>//results should an array of objects
        results.data.forEach( (recipe) => {
          this.props.handleClick({
            ingredients: recipe.ingredients,
            instructions: recipe.instructions,
            imagelink: recipe.imagelink,
          })
        })
      )
      .catch((err) => {
        console.error(err.messsage);
      });
  }
  render () {
  return(
    <div id='header'>
        <input
        id = 'input'
        type = "text"
        onChange = {e => this.props.dispatchRecipe(e.target.value)}
      ></input>
      <button className='searchButton' onClick ={this.checkNow} >Search</button>
    </div>
  )}

};

export default SearchComponent;