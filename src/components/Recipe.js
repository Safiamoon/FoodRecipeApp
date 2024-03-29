import React, {useState} from 'react'
import RecipeDetails from "./RecipeDetails";

const Recipe = ({recipe}) => {
    const [show, setShow] = useState(false);
    const{label, image, ingredients} = recipe.recipe;

    return (
        <div className="recipe">
            <img src={image} alt={label}/> 
            <h3>{label}</h3>
            <button onClick={() => setShow(!show)}>Ingredients</button>
            {show && <RecipeDetails ingredients={ingredients} />}
        </div>
    )
}

export default Recipe
