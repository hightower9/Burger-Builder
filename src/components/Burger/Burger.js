import React from 'react';
import { withRouter } from 'react-router-dom'; // use if u want the history and other props
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // check video 8.12 if not understand
    //This is applied so that we get "cheese: 2" 2 units of cheese and similiar for other ingredients'
    //like 2 units of cheese, 1 unit of meat, etc 
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => {    ///this part is used to get the count of elements
            return arr.concat(el);
        }, []);
    // console.log(transformedIngredients);
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default withRouter(burger);