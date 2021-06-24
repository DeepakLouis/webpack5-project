import "./styles/index.scss";

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