const request = require('supertest');
const fs = require('fs');
const path = require ('path');
const recipeController = require('../server/controller/recipeController');
const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and html file', () => {
        return request(server)
          .get('/')
          .expect(200)
          .expect('Content-Type', /text\/html/)
      });
    });
  });

  describe('/api/searchRecipes', () => {
    describe('POST', () => {
      it('responds with 200 status and application/json content type', () => {
        // want to add market to market test database
        const foundRecipe = {
          name: 'food'
        };
        recipeController.searchRecipes(foundRecipe);
        // return a request to the server
        // add a puth to the path of /markets
        // expect content-type to be application/json
        // expect status to be 200
        return request(server)
          .post('/api/searchRecipes')
          .send(foundRecipe)
          .expect('Content-Type', 'application\/json; charset=utf-8')
          .expect(200);
            
        });
    });
  });
});