
import React, { Component } from 'react';
import * as actions from '../actions/actions'
import { connect } from 'react-redux';
import SearchComponent from '../components/SearchComponent.jsx';
import OutputContainer from './OutputContainer.jsx'
import AddRecipe from '../components/AddRecipe.jsx'

const mapStateToProps = (state) => ({
  recipesList: state.recipes.recipesList, //pass down recipesList array
  name: state.recipes.name,
  showModal: state.recipes.showModal
})

const mapDispatchToProps = (dispatch) => ({
  retrieveRecipe: (recipeObj) => dispatch(actions.retrieveRecipe(recipeObj)),
  newSearch:(recipe) => dispatch(actions.setSearch(recipe)),
  openModal: () => dispatch(actions.showModal()),
  setModal: () => dispatch(actions.setModal())
})

class SearchContainer extends Component {

  constructor(props){
    super(props)

  }
 
  // setModal () {
  //   this.props.setModal();
  // }
  render() {
    if (!this.props.showModal) 
    return (
      <div>
      <h1 className='title'>Recipe.io</h1>
      <SearchComponent
      dispatchRecipe={this.props.newSearch}
      handleClick={this.props.retrieveRecipe}
      name={this.props.name}
      />
      <button onClick={this.props.setModal} className='modalButton'>Add Recipe</button>
      <OutputContainer />
    </div>
    )
    else {
    return (
      <div className="main">
        <div>
          <h1 className='title'>Recipe.io</h1>
          <SearchComponent
          dispatchRecipe={this.props.newSearch}
          handleClick={this.props.retrieveRecipe}
          name={this.props.name}
          />
          <div>
          <button onClick={this.props.setModal} className='modalButton'>Add Recipe</button>
          </div>
          <OutputContainer />
        </div>
        <AddRecipe  /> 
      </div>
    )
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)