import React, { Component } from 'react';
import * as actions from '../actions/actions'
import { connect } from 'react-redux';
import axios from "axios";

const mapStateToProps = (state) => ({
  addName: state.recipes.modal.addName,
  addInstructions: state.recipes.modal.instructions,
  addIngredients: state.recipes.modal.ingredients,
  addimagelink: state.recipes.modal.addImagelink,
  showModal: state.recipes.modal.showModal

})

const mapDispatchToProps = (dispatch) => ({
  addName: (data) => dispatch(actions.addName(data)),
  addInstructions: (data) => dispatch(actions.addInstructions(data)),
  addIngredients: (data) => dispatch(actions.addIngredients(data)),
  addImageLink: (data) => dispatch(actions.addImageLink(data)),
  showModal: () => dispatch(actions.showModal()),
  setModal: () => dispatch(actions.setModal())
})



class AddRecipe extends Component {

  constructor(props){
    super(props)
    this.sendNewRecipe = this.sendNewRecipe.bind(this)
  }

  closeModalClick() {
    
  }

  sendNewRecipe() {
    return axios
      .post(
        "http://localhost:3000/api/addRecipe",
        {
          name: this.props.addName,
          ingredients:this.props.addIngredients,
          instructions:this.props.addInstructions,
          imagelink:this.props.addImagelink 
        }
      )
      .then(() => {
        this.props.setModal
      })
      
      .catch((err) => {
        console.error(err.messsage);
      });
  }

  render() {
    return (
  
      <div>
        <form className='inputFields'>
          <p>Recipe Name.</p>
          <input 
            type="text"
            placeholder={'Input recipe name here...'}
            onChange={(e) => this.props.addName(e.target.value)}/>

          <p>Instructions. Number each step (eg. “1. Cut tofu into cubes 2. Heat oil in pan”)</p>
          <input 
            type="text"
            placeholder={'Input instructions here...'}
            onChange={(e) => this.props.addInstructions(e.target.value)}/>

          <p>Ingredients. Separate each ingredient with a comma (eg. “14oz tofu, 6 cloves garlic”)</p>
          <input
           type="text" 
           placeholder={'Input ingredients here...'}
           onChange={(e) => this.props.addIngredients(e.target.value)}/>

          <p>Image Link.</p>
          <input
           type="text"
           placeholder={'Input image link here...'}
           onChange={(e) => this.props.addImagelink(e.target.value)}/>
           
        </form>
        <br/>
        <button onClick={this.sendNewRecipe}>Submit the recipe</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe)