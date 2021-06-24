import { useState } from 'react'

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4
}

const elvenGauntletRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 3
}

console.log(elvenShieldRecipe);
console.log(elvenGauntletRecipe);



function Recipes() {
    const [recipes, setRecipes] = useState({});
    
    return (
        <div>
            <h3>Current Recipes:</h3>
            <button onClick={() => setRecipes(elvenShieldRecipe)}>Elven Shield Recipe</button>
            <button onClick={() => setRecipes(elvenGauntletRecipe)}>Elven Gauntlet Recipe</button>
            
            
            <ul>
                {Object.keys(recipes).map(material => (
                    <li key={material}>
                        {material} : { recipes[material]}
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default Recipes
