import React, { Component } from 'react';
import Burger from './../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        let updatedCount = 0;
        if (oldCount === 0) {
            updatedCount = oldCount} else {
            updatedCount = oldCount - 1
        }
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceSubstraction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSubstraction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    };

    render () {
        return (
            <React.Fragment>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded ={this.addIngredientHandler}
                    ingredientSubstracted ={this.removeIngredientHandler}/>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;