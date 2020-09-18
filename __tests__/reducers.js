
import subject from '../client/reducers/recipeReducer';

describe('recipeReducer', () => {
  let state; 
  beforeEach(() => {
    state = {
      name: '',
      imagelink: '',
      ingredients: '',
      instructions: '',
      recipesList: [],
      showModal: false,
      modal: {
        addName: '',
        addInstructions: '',
        addIngredients: '',
        addimagelink: '',
      }
    }
  });

  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'aajsbicawlbejckr' };
      expect(subject(state, action)).toBe(state);
    });
  });
  
  describe('undefined state', () => {
    it('should return default state when provided an undefined input', () => {
      const action = { type: 'name' };
      expect(subject(undefined, action)).toStrictEqual(state);
    });
  });














})



